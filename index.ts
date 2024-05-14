import { ShortScriptLexer } from "antlr/ShortScriptLexer";
import { ShortScriptParser } from "antlr/ShortScriptParser";
import { ShortScriptListener } from "antlr/ShortScriptListener";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ShortScriptListenerFull } from "src/ShortScriptListenerFull";

const input = `
n f Fibonacci(n num){
  n num1 = 0
  n num2 = 0
  n next_num = num2
  n count = 1

  w(count <= num){
   count += 1
   num1 = num2
   num2 = next_num
   next_num = num1 + num2
  }

  r next_num
}


Fibonacci(9)
`;
const inputStream = new ANTLRInputStream(input);
const lexer = new ShortScriptLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new ShortScriptParser(tokenStream);

const tree = parser.program();

const listener: ShortScriptListener = new ShortScriptListenerFull();
ParseTreeWalker.DEFAULT.walk(listener, tree);
