import {ParserRuleContext} from "antlr4ts/ParserRuleContext";

export class LineError extends Error {
    line: number;
    column: number;

    constructor(ctx: ParserRuleContext, message: string) {
        super(message);
        this.line = ctx.start.line;
        this.column = ctx.start.charPositionInLine;
        this.name = "LineError";
    }

    toString() {
        return `Error [${this.line}:${this.column}]: ${this.message}`;
    }
}