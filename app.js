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
  console.log('"' + one + 'and' + two + ' and ' + three + ' sum to ' + output[0] + '"');
  console.log('"' + ' the numbers ' + one + ' and ' + two + ' and ' + three + ' have a product of ' + output[1] + '"');
  return output;}
