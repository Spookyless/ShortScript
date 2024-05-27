import { ExpressionContext } from "antlr/ShortScriptParser";

export default class ReturnExpression{   
   constructor(public value: ExpressionContext|undefined){}
}