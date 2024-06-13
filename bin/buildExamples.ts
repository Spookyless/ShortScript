import { readdir, readFile, writeFile, access, mkdir } from "fs/promises";
import { join, dirname, basename } from "path";
import pkg from "../package.json";
import { fileURLToPath } from "url";

const encoding = "utf-8";

const __dirname = dirname(fileURLToPath(import.meta.url));

const examplesDir = pkg.directories["example:programs"];

const examplesPaths = (
  await readdir(join(__dirname, "..", examplesDir), {
    withFileTypes: true,
    recursive: true,
    encoding,
  })
)
  .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".ss"))
  .map((file) => join(file.path + "/" + file.name));

const programs: Record<string, string> = {};

for (const examplePath of examplesPaths) {
  programs[basename(examplePath)] = await readFile(examplePath, { encoding });
}

const builtFileContent = `export const examples = ${JSON.stringify(programs)};`;
const outDir = join(__dirname, "..", "src/examples");

try {

  await access(outDir);
} catch {
  mkdir(outDir, { recursive: true });
}

await writeFile(
  join(outDir, "/index.ts"),
  builtFileContent,
  { encoding }
);
