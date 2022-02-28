module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = [];
  let Correct = true;
  if (str.length % 2 != 0) {
    Correct = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      bracketsConfig.forEach(element => {
        if (str[i] == element[0] & str[i] == element[1]) {
          if (array[array.length-1] != str[i]) {
            array.push(str[i]);
          } else array.pop();
        } else {
          if (element[0] == str[i]) {
            array.push(str[i]);
          } 
          else if (element[1] == str[i]) {
            if (array[array.length-1] == element[0]) array.pop();
          
          }
        }
      });
    }
    Correct = array.length == 0 ? true : false;
  }
  
  return Correct;
}
