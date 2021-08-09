/** 
 * 프로그래머스 - 정렬 - K번째 수
 * https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
**/

function solution(array, commands) {
  var answer = [];
  let newArray = [];
  commands.map(item => {
    newArray = array.slice(item[0] - 1, item[1])
                    .sort((a, b) => a - b)
    answer.push(newArray[item[2] - 1])
  })

  return answer;
}



console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

/** 2번통과 안됨 -> https://programmers.co.kr/questions/16676
 * js는 compareFunction이 제공되지 않으면 유니코드 포인터 순서로 문자열을 비교해서 정렬합니다.
 * MDN에도 설명되어 있는 내용인데, 아래와 같은 방식으로 이루어집니다.
 * array1 = [1, 30, 4, 21, 100000];
 * console.log(array1.sort());
 * array1 = [1, 100000, 21, 30, 4];
 * 따라서 저희는 문자열 비교가 아닌 숫자를 비교해야되므로 sort함수에 정렬순서를 정의해주면 되겠죠.
**/


// 다른분 좋은 코드 
// function solution(array, commands) {
//   return commands.map(command => {
//     const [sPosition, ePosition, position] = command
//     const newArray = array
//       .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//       .sort((a, b) => a - b)

//     return newArray[position - 1]
//   })
// }