import { ShortScriptLexer } from "./antlr/ShortScriptLexer";
import { ShortScriptParser } from "./antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitor } from "./antlr/ShortScriptVisitor";
import { ShortScriptVisitorFull} from "./ShortScriptVisitorFull";
import { LineError } from "./LineError";
import { stderr, stdout } from "process";
import { CustomErrorListener } from "./CustomErrorListener";

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
        print(num2)
    }    

    r num2
}

print('Wynik:')
print(Fibonacci(7))
`;



runInterpreter(input)

export function runInterpreter(input:string){    
    
    const inputStream = CharStreams.fromString(input);
    const lexer = new ShortScriptLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ShortScriptParser(tokenStream);

    const errorListener = new CustomErrorListener()
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    const tree = parser.program();
    const visitor: ShortScriptVisitorFull = new ShortScriptVisitorFull();

    try {        
        const result = visitor.visit(tree)

        // console.log(errorListener.messages);

        return [errorListener.messages.join("\n"),  visitor.logs.join("\n")]
    } catch (error) {
        if (error instanceof LineError) {
            
            console.error("Error:", error.toString());
        } else {
            throw error;
        }
    }

    return "";
}