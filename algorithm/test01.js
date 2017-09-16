function solution(n, arr1, arr2) {
    var answer = [];
    var temp = [];
    var tempBinary = [];

    for(let i = 0; i < n; i++) {
      temp.push(arr1[i] | arr2[i])
      tempBinary.push(temp[i].toString(2))
    }
    console.log(tempBinary)
    for(let i = 0; i < n; i++) {
      answer[i] = ''
      for(let j = 0; j < n; j++) {
        tempBinary[i][j] == 1 ? answer[i] += '#' : answer[i] += ' '
      }
    }
    console.log(answer)
}

solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])
