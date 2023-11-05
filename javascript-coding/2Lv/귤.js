function solution(k, tangerine) {
  var answer = 0;
  let cnt = 0;
  
  const fruit = {}
  tangerine.forEach( x => {
      if(!fruit[x]) fruit[x] = 1
      else fruit[x] += 1
  })
  
  const res = [...Object.values(fruit)].sort((a,b) => b-a)
  
  // console.log(res)
  
  for(let i = 0 ; i< res.length ; i++){
      cnt += res[i]
      if(cnt >= k){
          answer += 1 
          return answer;
      }
      else if( cnt < k) answer += 1
  }
  
  return answer;
}