function solution(cacheSize, cities) {
    var answer = 0;
    var cacheCities = [];
    for(let i = 0; i < cities.length; i++){
      cities[i] = cities[i].toUpperCase();
    }

    for(let i = 0; i < cacheSize; i++) {
      cacheCities.push(cities[i])
      answer += 5
    }

    for(let j = cacheSize - 1, len = cities.length - 1; j < len; j++) {
      if(cacheCities.includes(cities[j+1])) {
        console.log('캐시에 있어요')
        answer += 1
        cacheCities.splice(0, 1)
        cacheCities.push(cities[j+1])
      } else {
        answer += 5
        console.log('캐시에 없어요')
        cacheCities.splice(0, 1)
        cacheCities.push(cities[j+1])
      }
    }
    // return answer
    console.log(cacheCities, answer)
}

solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])
