function Harshad(n){
  var result;
  var total = 0;
  var str = String(n);
  for(var i = 0 ; i < str.length; i++) {
    total += Number(str[i])
  }
  (n % total == 0) ? result = true : result = false;
  return result;
}

console.log(Harshad(18))
