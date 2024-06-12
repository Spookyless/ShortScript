import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

export class LineError extends Error {
  line: number;
  column: number;

  constructor(line: number, column: number, message: string) {
    super(message);
    this.line = line;
    this.column = column;
    this.name = "LineError";
  }

  toString() {
    return `Error [${this.line}:${this.column}]: ${this.message}`;
  }
}
