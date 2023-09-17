function solution(strings, n) {
  var answer = [];
  
  answer = strings.map(str => str).sort((a,b) => {
      if(a[n] == b[n]) return compareString(a,b)
      return a[n].charCodeAt() - b[n].charCodeAt()
  })
  
  return answer;
}

function compareString(a,b){
  let cnt = 0
  
  while(a[cnt] == b[cnt])  cnt += 1
  
  return (a[cnt]?.charCodeAt() || 0) - (b[cnt]?.charCodeAt() || 0)
}