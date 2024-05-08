import { readdir } from "fs/promises";
import { join, dirname } from "path";
import pkg from "../package.json" assert {type: "json"};
import { fileURLToPath } from "url";
import { createAsyncPool, runTestCase, scoreTestResults } from "./util.js";

const encoding = "utf-8";
const poolCap = 5;

const __dirname = dirname(fileURLToPath(import.meta.url));

const testsDir = pkg.directories.test;
const testCasePaths = (await readdir(join(__dirname, "..", testsDir), {
  withFileTypes: true,
  recursive: true,
  encoding
}))
  .filter(dirent => dirent.isFile() && dirent.name.endsWith(".ss"))
  .map(file => join(file.path + "/" + file.name));

const taskPoolRunner = createAsyncPool(poolCap);
const results = await taskPoolRunner(testCasePaths, async testCasePath => ({ testCasePath, ...(await runTestCase(testCasePath)) }));
scoreTestResults(results, testsDir);