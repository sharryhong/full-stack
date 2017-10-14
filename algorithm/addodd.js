// 주어진 문자열에서 홀수인 숫자들의 제곱의 합을 출력한다.
// 예) "ab2v9bc13j5jf4jv21" -> 9^2 + 13^2 + 5^2 + 21^2 = 716

var inputString = document.querySelector('.input-string'),
    inputBtn = document.querySelector('.btn'),
    resultSum = document.querySelector('.result-sum')
var nums = [] // 숫자만 담는 배열

// 숫자만 배열에 담아내는 함수
function getNumber(input) {
  return input.match(/[0-9]+/g)
}

// 홀수만 제곱의 합을 구하는 함수
function sumSquare(input) {
  if(!input) return result = '숫자가 없어요!'
  var result = 0
  var len = input.length
  for(let i = 0 ; i < len; i++) {
    if(input[i] % 2 === 1) {
      result += input[i] * input[i]
    }
  }
  return result
}

inputBtn.addEventListener('click', function() {
  var nums = getNumber(inputString.value)
  resultSum.innerText = sumSquare(nums)
})
