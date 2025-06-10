function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity) {
  return multiply(price, quantity);
}
console.log("Total:", calculateTotal(100, 3));