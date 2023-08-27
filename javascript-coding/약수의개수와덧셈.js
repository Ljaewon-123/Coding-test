function solution(left, right) {
  var answer = 0;
  
  const obj = {}
  
  for(let i = left ; i <= right ; i++ ){
    obj[i] = []
    
    for(let j = 1 ; j <= right; j++){
        
      const pInt = parseInt( i / j )
      const remainder = i % j
      
      if(remainder == 0  ) obj[i].push(pInt, j)
    }
    obj[i] = new Set(obj[i]).size
    
  }
  
  Object.keys(obj).forEach( key => {
    obj[key] % 2 === 0 ? answer += Number(key) : answer -= Number(key)
  })
  
  return answer;
}
  