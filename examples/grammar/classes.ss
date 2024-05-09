c TestClass{
   n testN
   n f testFunction(n testVar){
      n testVar1 = 2
   }
}

c TestClass1 <== TestClass {
   s testString
   s f testFunction1(s testVar){
      s testVar2 = '2'
      r testVar2
   }
}

c TestClass1 <== TestClass {
   s testString
   s f testFunction1(s testVar){
      s testVar2 = '2'
      r testVar2
   }
}

c TestClass1{
   TestClass1 f TestClass1() {
      n test = 1
   }
   s testString
   s f testFunction1(s testVar){
      s testVar2 = '2'
      r testVar2
   }
}

c TestClass1 <== TestClass {
   TestClass1 f TestClass1() {
      s test1 = '2'
      ^(1, 2, 3, 4)
      n test = 1
   }
   s testString
   s f testFunction1(s testVar){
      s testVar2 = '2'
      r testVar2
   }
}