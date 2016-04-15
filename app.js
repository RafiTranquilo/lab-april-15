function sum(one, two){
  return(one + two);
  // console.log('"The sum of ' + one + ' and ' + two + ' is ' + equalsTo + '."');
}
// "The sum of 4 and 7 is 11."

function multiply(one, two){
  return(one * two);
  // console.log('"The product of ' + one + ' and ' + two + ' is ' + times + '."');
}

// "The product of 4 and 7 is 28."

function sumAndMultiply(one,two,three){
  var output = [];
  output.push(sum(sum(one,two),three));
  output.push(multiply(multiply(one,two),three));
  // console.log('"' + one + 'and' + two + ' and ' + three + ' sum to ' + output[0] + '"');
  // console.log('"' + ' the numbers ' + one + ' and ' + two + ' and ' + three + ' have a product of ' + output[1] + '"');
  return output;}

// Wow look at this great function.
var total = 0;
function sumArray(input){
  for (var i = 0; i < input.length; i++) {
    total = total + input[i];
  }
  console.table(input);
  console.log(input + ' was passed in as an array of numbers, and ' + total + ' is their sum.');
};

var newTotal = 1;
function multiplyArray(input){
  for (var i = 0; i < input.length; i++) {
    newTotal = newTotal * input[i];
  }
  console.table(input);
  console.log('The numbers' + input + ' have a product of ' + newTotal);
}
