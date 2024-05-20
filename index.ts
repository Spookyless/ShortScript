import { ShortScriptLexer } from "antlr/ShortScriptLexer";
import { ShortScriptParser } from "antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitor } from "antlr/ShortScriptVisitor";
import { ShortScriptVisitorFull } from "src/ShortScriptVisitorFull";
import { LineError } from "src/LineError";

const input = `
n f Fibonacci(n num){
    n num1 = 0
    n num2 = 2
    n next_num = num2     

    next_num = 3 + num
    r next_num

    n count = 1 
}

Fibonacci(9)
`;
const inputStream = CharStreams.fromString(input);
const lexer = new ShortScriptLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new ShortScriptParser(tokenStream);

const tree = parser.program();

const visitor: ShortScriptVisitor<any> = new ShortScriptVisitorFull();
try {
    const result = visitor.visit(tree)
    console.log("Result:", result);
} catch (error) {
    if (error instanceof LineError) {
        console.error(error.toString());
    } else {
        throw error;
    }
}
