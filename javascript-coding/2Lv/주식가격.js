function solution(prices) {
  var answer = [];
  
  prices.forEach( (x, index) => {
      let cnt = 0

      for(let i = index+1 ; i < prices.length ; i++){
          
          cnt++
          
          if(x > prices[i]) break
          
          
      }
      answer.push(cnt)
  })
  
  return answer;
}