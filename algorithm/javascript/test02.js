function solution(dartResult) {
    var answer = 0;
    var beforeNum = [];
    for(let i = 0, len = dartResult.length; i < len; i++) {
      // 10인 경우를 간과하여 급하게 재수정 했습니다.
      switch (dartResult[i]) {
        case 'S':
          if(dartResult[i-2] == 1 && dartResult[i-1] == 0) {
            beforeNum.push(Math.pow(Number(dartResult[i-2]+dartResult[i-1]), 1))
          } else {
            beforeNum.push(Math.pow(Number(dartResult[i-1]), 1))
          }
          break;
        case 'D':
          if(dartResult[i-2] == 1 && dartResult[i-1] == 0) {
            beforeNum.push(Math.pow(Number(dartResult[i-2]+dartResult[i-1]), 2))
          } else {
            beforeNum.push(Math.pow(Number(dartResult[i-1]), 2))
          }
          break;
        case 'T':
          if(dartResult[i-2] == 1 && dartResult[i-1] == 0) {
            beforeNum.push(Math.pow(Number(dartResult[i-2]+dartResult[i-1]), 3))
          } else {
            beforeNum.push(Math.pow(Number(dartResult[i-1]), 3))
          }
          break;
        case '*':
          beforeNum.push('*')
          break;
        case '#':
          beforeNum.push('#')
          break;
      }
      console.log(dartResult[i], beforeNum, answer)
    }
    for(let j = 0, len = beforeNum.length; j < len; j++) {
      switch (beforeNum[j]) {
        case '*':
          if(beforeNum[j-2]) {
            beforeNum.splice(j-2, 2, beforeNum[j-2] * 2, beforeNum[j-1] * 2)
          } else {
            beforeNum.splice(j-1, 1, beforeNum[j-1] * 2)
          }
          var indexThis = beforeNum.indexOf('*')
          beforeNum.splice(indexThis, 1)
          break;
        case '#':
          beforeNum.splice(j-1, 1, beforeNum[j-1] * (-1))
          var indexThis = beforeNum.indexOf('#')
          beforeNum.splice(indexThis, 1)
          break;
      }
    }
    answer = beforeNum.reduce((prev, curr) => prev + curr)
    console.log(beforeNum, answer)
    return answer
}
solution('1T2D3D#')
