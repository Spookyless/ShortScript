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

print('Wynik:')
print(Fibonacci(7))