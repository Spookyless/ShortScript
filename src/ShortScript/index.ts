import { ShortScriptLexer } from "./antlr/ShortScriptLexer";
import { ShortScriptParser } from "./antlr/ShortScriptParser";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ShortScriptVisitorFull } from "./ShortScriptVisitorFull";
import { LineError } from "./helpers/LineError";
import { ErrorListener } from "./ErrorListener";

type InterpretationResult = (string | LineError)[];

export function runInterpreter(input: string): InterpretationResult {
  const messages: (string | LineError)[] = [];

  const inputStream = CharStreams.fromString(input);
  const lexer = new ShortScriptLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ShortScriptParser(tokenStream);

  const errorListener = new ErrorListener(messages);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const tree = parser.program();
  const visitor: ShortScriptVisitorFull = new ShortScriptVisitorFull(messages);

  try {
    visitor.visit(tree);

    return [...messages];
  } catch (error) {
    if (error instanceof LineError) {
      return [...messages, error];
    }

    throw error;
  }
}
