/* 암호해독
 * - 는 0, + 는 1
 * 2진수 -> 10진수 변환
 * 아스키코드 변환 
*/

function solution(array) {
  let result = '';
  for (item of array) {
    const trimedItem = item.replace(/ /g, '');
    const binary = trimedItem.replace(/\+/g, '1').replace(/-/g, '0');
    const decimal = parseInt(binary, 2);
    result += String.fromCharCode([decimal]);
  }
  return result;
}

console.log(solution(['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   ']))