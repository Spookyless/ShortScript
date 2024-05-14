import { spawn } from "child_process";
import cli from "cli-color";

export const createAsyncPool =
	<T>(poolCap: number, keepOrder = true) =>
	async (iterable: T[], fun: (param: T) => void) => {
		const pool = new Set<Promise<any>>();
		const results = keepOrder ? new Array(iterable.length).fill(null) : [];

		const consume = async () => {
			const [value, index] = await (async () => {
				const [promise, value, index] = await Promise.race(pool);
				pool.delete(promise);
				return [value, index];
			})();

			keepOrder ? (results[index] = value) : results.push(value);
		};

		for (const index in iterable) {
			const item = iterable[index];
			const promise: Promise<any> = (async () => fun(item))().then((value) => [
				promise,
				value,
				index,
			]);

			pool.add(promise);

			if (pool.size >= poolCap) {
				await consume();
			}
		}

		while (pool.size > 0) {
			await consume();
		}

		return results;
	};

export type TestResult = {
	testCasePath: string;
	passed: boolean;
	error: string;
};

export const scoreTestResult = (result: TestResult, testsDir = "") => {
	const { testCasePath, passed, error } = result;

	const shortTestCasePath = testCasePath.substring(
		testCasePath.lastIndexOf(testsDir)
	);
	if (passed === true) {
		console.log(`Test ${shortTestCasePath} ${cli.green("passed")}`);
	} else {
		console.log();
		console.log(`Test ${shortTestCasePath} ${cli.red("failed")}`);
		console.log(error.trim());
		console.log();
	}

	return passed;
};

export const scoreTestResults = (results: TestResult[], testsDir = "") => {
	const passedCount = results.reduce(
		(passedCount, result) =>
			scoreTestResult(result, testsDir) ? passedCount + 1 : passedCount,
		0
	);

	console.log();
	console.log(
		cli.bold(
			`Overall: ${passedCount}/${results.length} - suite ${
				passedCount === results.length ? cli.green("passed") : cli.red("failed")
			}`
		)
	);
	console.log();
};

export const runTestCase = (filepath: string) =>
	new Promise<Omit<TestResult, "testCasePath">>((resolve) => {
		const testProcess = spawn("antlr4-parse", [
			"ShortScript.g4",
			"program",
			filepath,
		]);
		let passed = true;
		let error = "";

		testProcess.stderr.on("data", (chunk) => {
			error += chunk;
			passed = false;
		});

		testProcess.on("exit", () => {
			resolve({
				passed,
				error,
			});
		});
	});
