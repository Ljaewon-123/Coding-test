function solution(t, p) {
  var answer = 0;
  const step = p.length
  for(let i = 0; i < t.length ; i++){
    let tmp = ''
    for(let j = 0; j< step ; j++){
      if(t[i+j] == undefined) return answer;
      tmp += t[i+j]
    }
    tmp = parseInt(tmp)
    if( tmp <= parseInt(p)) answer++
  }
  
  return answer;
}