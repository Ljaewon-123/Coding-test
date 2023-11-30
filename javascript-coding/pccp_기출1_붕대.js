function solution(bandage, health, attacks) {
  let answer = health;
  let cnt = 0;
  const obj = {}
  
  const totalTime = attacks.at(-1)[0]
  
  attacks.forEach( arr => {
      obj[arr[0]] = arr[1]
  })

  for(let i = 0 ; i <= totalTime ; i++){
      
      cnt++ 
      
      if(obj[i]){
          answer -= obj[i]
          cnt = 0
          
          // console.log(answer, '공격당함')
          
          if(answer <= 0) return -1
          continue
      } 

      answer = maxHealth(answer, bandage[1], health)
      
      if(cnt == bandage[0]) {
          cnt = 0 
          answer = maxHealth(answer, bandage[2], health)
      }   
      
      // console.log(answer, '순회 마지막')
  }
  
  return answer;
}

const maxHealth = (answer, plus, health) => {
  const sum = answer += plus
  
  if(sum >= health) return health
  
  else return sum
}
