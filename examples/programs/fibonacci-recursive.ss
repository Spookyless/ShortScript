n f fib(n num){
  if(num <= 0){
    r 0
  }
  
  if(num == 1){
    r 1
  }

  r fib(num - 1) + fib(num - 2) 
}
  
print('Result: ' + fib(8))
