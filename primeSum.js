function primeSum(x) {
  let sum = 0;
  
  function kaeloo(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 2; i < x; i++) {
    if (kaeloo(i)) {
      sum += i;
    }
  }
  
  return sum;
}
console.log( primeSum(2000000));

module.exports = primeSum