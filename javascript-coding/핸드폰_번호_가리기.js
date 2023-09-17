function solution(phone_number) {
  var answer = '';
  const strLen = phone_number.length
  
  const phNum = phone_number.slice(-4)
  
  for(let i = 0; i < strLen - 4 ; i++){
    answer += "*"
  }
  answer += phNum
  return answer;
}