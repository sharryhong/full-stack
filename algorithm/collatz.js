function collatz(num) {
	var answer = 0;
  next(num)
  function next(num) {
    if(num == 1) return answer;
    if(answer >= 500) return answer = -1;
    if(num % 2 == 0) { num /= 2; answer++; next(num); console.log('짝',num) }
    else { num = num * 3 + 1; answer++; next(num); console.log('홀',num) }
  }
	return answer;
}

console.log( collatz(837799) );
