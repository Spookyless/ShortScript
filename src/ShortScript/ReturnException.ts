export default class ReturnException extends Error {
   value:any;
   constructor(message?: any) {
       super(message);
       this.name = "ReturnException";
       this.value = message
   }
}