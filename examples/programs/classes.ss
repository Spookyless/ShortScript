c Stats {
  n value = 1
  
  Stats f Stats(n value){
    t.value = value
    p('Stats created')
  }
}

c Counter{
  n value = 0
  Stats stats

  Counter f Counter(n initialValue) {
    t.value = initialValue
    t.stats = Stats(10)
    
    p('Counter created')
  }

  v f increment(n amount = 1) {
    t.value += amount
    p('Incremented to: ' + t.value)
  }
}

Counter x = Counter(10)
x.increment()
x.increment(5)
x.value *= 2
p('Doubled: ' + x.value)
p('Stats: ' + x.stats.value)