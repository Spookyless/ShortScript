export default class ContinueException extends Error {
   constructor(message?: string) {
       super(message);
       this.name = "ContinueException";
   }
}