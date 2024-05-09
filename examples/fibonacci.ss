n f Fibonacci(n num){
  n num1 = 0
  n num2 = 0
  n next_num = num2
  n count = 1

  w(count <= num){
   count += 1
   num1 = num2
   num2 = next_num
   next_num = num1 + num2
  }

  r next_num
}


Fibonacci(9)