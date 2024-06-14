c Counter{
  n value = 0

  Counter f Counter(n initialValue) {
    t.value = initialValue
    p('Counter created')
  }

  v f increment(n amount) {
    t.value += amount
    p('Incremented to: ' + t.value)
  }
}

Counter x = Counter(10)
x.increment(3)
x.increment(5)
x.value *= 2
p('Doubled: ' + x.value)