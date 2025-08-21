function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello"));

function reverseStringViaFunc(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringViaFunc("Hello"));