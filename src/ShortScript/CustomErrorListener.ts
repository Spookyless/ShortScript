import { ANTLRErrorListener, Recognizer, RecognitionException, Token } from 'antlr4ts';
import { LineError } from './LineError';

export class CustomErrorListener implements ANTLRErrorListener<Token> {
   messages: string[] = [];

   syntaxError(
      recognizer: Recognizer<Token, any>,
      offendingSymbol: Token | undefined,
      line: number,
      charPositionInLine: number,
      msg: string,
      e: RecognitionException | undefined
   ): void {
      const errorMessage = `line ${line}:${charPositionInLine} ${msg}`;
      
      console.error("Syntax Error:", errorMessage);
       

      this.messages.push(errorMessage)
   }
}
