import { ShortScriptLexer } from "./antlr/ShortScriptLexer";
import { ShortScriptParser } from "./antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitor } from "./antlr/ShortScriptVisitor";
import { ShortScriptVisitorFull } from "./ShortScriptVisitorFull";
import { LineError } from "./LineError";

const input = `
n f Fibonacci(n num){
    if(num<=0){
        r 0
    }
    e if(num==1){
        r 1
    }

    n num1 = 0
    n num2 = 1
        
    l(num - 1){
        n temp = num1
        num1 = num2
        num2 = temp + num2
    }    

    r num2
}


Fibonacci(7)
`;

// run(input)

export function runInterpreter(input:string){
    const inputStream = CharStreams.fromString(input);
    const lexer = new ShortScriptLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ShortScriptParser(tokenStream);

    const tree = parser.program();
    const visitor: ShortScriptVisitor<any> = new ShortScriptVisitorFull();

    try {
        const result = visitor.visit(tree)
        // console.log("Result:", result);
        return result
    } catch (error) {
        if (error instanceof LineError) {
            console.error("Error:", error.toString());
        } else {
            throw error;
        }
    }


}