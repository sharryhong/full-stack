// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript 문제풀이

// 1. 효율성테스트에서 안좋음
// function solution(participant, completion) {
//     var answer = '';
//
//     completion.forEach(person => {
//         if (participant.includes(person)) {
//           participant.splice(participant.indexOf(person), 1);
//         }
//     })
//     answer = participant[0];
//
//     return answer;
// }

// 2. 효율성테스트에서 안좋음
// function solution(participant, completion) {
//     var answer = '';
//
//     completion.filter( person => {
//       participant.splice(participant.indexOf(person), 1);
//     })
//
//     answer = participant[0];
//
//     return answer;
//
// }

// 3. 효율성테스트 통과
// function solution(participant, completion) {
//     var answer = '';
//     participant.sort();
//     completion.sort();
//     participant.forEach((person, index) => {
//       if (completion[index] !== person && !answer) {
//         answer = person;
//         return;
//       }
//     })
//     return answer;
// }


function solution(participant, completion) {
    let ret = []
    let hashed = []
    participant.forEach(entry => {
        hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1
    })
    completion.forEach(entry => {
        hashed[entry] = hashed[entry] - 1
    })

    console.log(hashed);

    for (var key in hashed) {
        if (hashed[key] >= 1) return key
    }
}

// solution(		["leo", "kiki", "eden"], ["eden", "kiki"]);
// solution(	["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
solution(	["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
