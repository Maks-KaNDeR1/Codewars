// 6
function doubleChar(str) {
  var newString = "";
  for( i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}

// 7
function testit(a,b){

  return a | b;
}

// 8 
function switchItUp(number){
    var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number]; 
}

// 9 Use map() to double the values in an array
function double(array) {
   return array.map(x => x * 2)
}

// 10 Beginner - Lost Without a Map
function maps(x){
   return x.map(n => n * 2)
}