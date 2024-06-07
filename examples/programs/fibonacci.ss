n f Fibonacci(n num){
  if(num<=0){
      r 0
  }
  e if(num==1){
      r 1
  }

  n num1 = 0
  n num2 = 1
    
  l(n i=2..=num){
      n temp = num1
      num1 = num2
      num2 = temp + num2
  }    

  r num2
}


Fibonacci(6)