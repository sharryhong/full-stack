/* 징검다리 건너기
 * 돌의 내구도 
 * 몸무게, 점프력에 따라 건널 수 있는 생존자 구하기 
*/

const strength = [5, 3, 4, 1, 3, 8, 3]
const dogs = [{
    "name" : "루비독",
    "jump" : "3",
    "weight" : "4",
    },{
    "name" : "피치독",
    "jump" : "3",
    "weight" : "3",
    },{
    "name" : "씨-독",
    "jump" : "2",
    "weight" : "1",
    },{
    "name" : "코볼독",
    "jump" : "1",
    "weight" : "1",
    },
]

// 1. dogs items for 돌면서 dog 
// 2. jump 값대로 strength 배열의 [jump 값 - 1]  값 구하기 
// 3. 2번 값 - dog[weight] 값 
// 4. 3번 값 < 0 이면 끝 
  
function solution(strength, dogs) {
  let position = 0;
  for (let dog of dogs) {
    let dogJump = Number(dog['jump'])
    while (position < strength.length - 1) {
      position += dogJump - 1
      let sValue = strength[position] - Number(dog['weight']);
      console.log("dog['name']", dog['name'], 'position', position, sValue);
      if (sValue < 0 ) {
        break;
      }
    }
  }
}















// function solution(strength, dogs) {
//   let answer = [];

//   for (let dog of dogs) {
//     let position = 0;
//     let fail = false;
//     while (position < strength.length - 1) {
//       position += Number(dog['jump']);
//       strength[position - 1] -=  Number(dog['weight']);
//       if (strength[position - 1]  < 0) {
//         fail = true;
//         break;
//       }
//     }
//     if (!fail) {
//       answer.push(dog['name'])
//     }
//   }
  
//   return answer;
// }

console.log(solution(strength, dogs))