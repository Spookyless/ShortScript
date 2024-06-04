import { ShortScriptLexer } from "antlr/ShortScriptLexer";
import { ShortScriptParser } from "antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitor } from "antlr/ShortScriptVisitor";
import { ShortScriptVisitorFull } from "src/ShortScriptVisitorFull";
import { LineError } from "src/LineError";

const input = `
n num1 = 0

l(-9){
    num1+=1
}

num1
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
