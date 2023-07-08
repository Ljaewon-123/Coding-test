function solution(n) {
  var answer = 0;
  let newString = ''
  const a = n.toString(3)
  
  for (var i = a.length - 1; i >= 0; i--) { 
      newString += a[i]; 
  }
  
  answer = parseInt(newString,3)
  
  return answer;
}