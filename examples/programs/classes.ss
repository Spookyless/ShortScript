c Counter{
   n value = 1

   Counter f Counter() {
     print('Initial value: ' + t.value)
     t.value += 1
     print('Incremented: ' + t.value)
   }
}

Counter x = Counter()
x.value *= 2
print('Doubled: ' + x.value)

Counter y = Counter()
y.value *= 10
print('Second Counter: ' + y.value)