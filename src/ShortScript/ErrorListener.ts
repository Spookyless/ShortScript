import {
  ANTLRErrorListener,
  Recognizer,
  RecognitionException,
  Token,
} from "antlr4ts";
import { LineError } from "./helpers/LineError";

export class ErrorListener implements ANTLRErrorListener<Token> {
  private messages: (string | LineError)[];

  constructor(messages: (string | LineError)[]) {
    this.messages = messages;
  }

  syntaxError(
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    this.messages.push(new LineError(line, charPositionInLine, msg));
  }
}
