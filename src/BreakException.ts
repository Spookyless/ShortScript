export default class BreakException extends Error {
   constructor(message?: string) {
       super(message);
       this.name = "BreakException";
   }
}