v f roots(n ca, n cb, n cc) {
  n d = cb * cb - 4 * ca * cc
  
  print('Evaluating ' + ca + 'x^2 + ' + cb + 'x + ' + cb)

  if (d > 0) {
    n r1 = (-cb + d ** 0.5) / (2 * ca)
    n r2 = (-cb - d ** 0.5) / (2 * ca)
    print('Roots: ' + r1 + ' ' + r2)
    r
  }

  if (d == 0) {
    n r0 = -cb / (2 * ca)
    print('Root: ' + r0)
    r
  }

  print('No real roots exist')
}

roots(1, 3, 2)
roots(1, 6, 9)
roots(1, 1, 1)
