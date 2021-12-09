// 1
// repeat() Returns a new string with a specified number of copies of an existing string

function repeatStr (n, s) {
  return s.repeat(n);
}

// 2 Multiply

function multiply(a, b){
  return a * b
}

// 3 Write a function "greet" that returns "hello world!"

const greet = () => {
  return "hello world!"
}

// 4 Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  var a = bool.toString();
  if(a=='true')
    return 'Yes';
  else
    return 'No';
}

// 5 Returning Strings

function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`;
}