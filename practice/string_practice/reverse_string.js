function reverseString(str) {
  let reversed = "";
  //let reversed=[];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    //reversed[str.length-1-i] = str[i];
  }
  return reversed;
  //return reversed.toString();
}

console.log(reverseString("Hello"));

function reverseStringViaFunc(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringViaFunc("Hello"));