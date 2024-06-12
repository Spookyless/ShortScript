n f Fibonacci(n num){
    if(num<=0){
        r 0
    }
    e if(num==1){
        r 1
    }

    n num1 = 0
    n num2 = 1
        
    l(num - 1){
        n temp = num1
        num1 = num2
        num2 = temp + num2
        print(num2)
    }    

    r num2
}

n result = Fibonacci(7)
print('Wynik:')
print(result)


l(5) {
   print('pętla bez iteratora')
}

l (n i=0..4) {
  if (i == 1) {
    co
  }

  if (i == 3) {
    br
  }
  print(i)
}

l (n i=0..=2) {
  l (n j=0..=2) {
    print(i * j)
  }
}



if (1 >= 2) {
  print('first if')
} e if (5 > 3) {
   print('first e if')
} e if (6 > 1) {
   print('second e if')
} e {
   print('else')
}