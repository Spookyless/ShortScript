import { ShortScriptLexer } from "antlr/ShortScriptLexer";
import { ShortScriptParser } from "antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitor } from "antlr/ShortScriptVisitor";
import { ShortScriptVisitorFull } from "src/ShortScriptVisitorFull";

const input = `
5+2
`;
const inputStream = CharStreams.fromString(input);
const lexer = new ShortScriptLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new ShortScriptParser(tokenStream);

const tree = parser.program();

const visitor: ShortScriptVisitor<any> = new ShortScriptVisitorFull();
console.log("Result", visitor.visit(tree));
