function getSortedList(names) {
  var romanNum = { 'I': 1, 'V': 5, 'X': 10, 'L': 50 };
  var len = names.length;
  var firstNum;
  var nextNum;
  var decNum;
  if(len == 1) { console.log(decNum = romanNum[names[0]]) }
  firstNum = romanNum[names[0]];
  nextNum = romanNum[names[1]];
  if(firstNum < nextNum) { decNum = nextNum - firstNum }
  else { decNum = nextNum + firstNum }
  if(len >= 3) {
    for(let i = 2; i < len; i++) {
      decNum += romanNum[names[i]];
    }
  }
  console.log(decNum)
}

// var names = 'L'
var names = 'IV'

getSortedList(names)
