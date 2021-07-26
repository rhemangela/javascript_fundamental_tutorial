var i, j;

for (i = 2; i < 100; i++) {
  for (j = 2; j <= i / j; j++)
    if (!(i % j)) {
      break;
    }
  if (j > i / j) {
    console.log(i, "is prime");
  }
}
