import { ShortScriptLexer } from "antlr/ShortScriptLexer";
import { ShortScriptParser } from "antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitor } from "antlr/ShortScriptVisitor";
import { ShortScriptVisitorFull } from "src/ShortScriptVisitorFull";
import { LineError } from "src/LineError";

const input = `
n f Fibonacci(n num){
    n num1 = 0
    n num2 = 1
    n next_num = num2
    n count = 2
  
    w(count <= num){
     count += 1
     next_num = num1 + num2
     num1 = num2
     num2 = next_num     
    }
  
    r next_num
  }
  
  
  Fibonacci(6)
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
