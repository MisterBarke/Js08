function fibonacciSum(luffy) {
  let zoro = 2, sanji = 1;
  let ace = 0;

  while (zoro <= luffy) {
    if (zoro % 2 === 0) 
    ace += zoro;
    [zoro, sanji] = [zoro + sanji, zoro];
  }

  return ace;
}

console.log(fibonacciSum(4000000)); // 4613732

module.exports = fibonacciSum