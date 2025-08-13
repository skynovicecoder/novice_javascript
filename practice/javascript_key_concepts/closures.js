//example of closures
console.log("example of closures");
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

//Function factories -- example of closures
console.log("Function factories -- example of closures");
function makeMultiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(5));
console.log(double(6));

//Example of closures and how data encapsulation happens
console.log("FExample of closures and how data encapsulation happens");
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counterLocal = createCounter();
console.log(counterLocal.increment()); // 1
console.log(counterLocal.increment()); //2
console.log(counterLocal.getCount());  // 2
console.log(counterLocal.count);       // undefined (can't access directly)