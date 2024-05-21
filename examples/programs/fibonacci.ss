n f Fibonacci(n num){
  n num1 = 0
  n num2 = 1
  n next_num = num2
  n count = 2

  w(count <= num){
    count += 1
    next_num = num1 + num2
    num1 = num2
    num2 = next_num     
  }

  r next_num
}


Fibonacci(5)