n f Fibonacci(n num){

   if(num <= 0){
      r 0
   }
   e if(num == 1){
      r 1
   }
   e{
      n num1 = num - 1
      n num2 = num - 2
      r Fibonacci(num1) + Fibonacci(num2)
   }    
}
  
  
Fibonacci(8)


