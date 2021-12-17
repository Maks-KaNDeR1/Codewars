//12 Sum of all arguments
function sum() {
 let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
--------
function sum(...x) {
  return x.reduce((a,b) => a + b)
}