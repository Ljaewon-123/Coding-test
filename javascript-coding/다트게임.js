function solution(dartResult) {
  var answer = 0;
  const lst = []
  const star = []
  const score = { "S": 1 ,"D": 2 , "T": 3 }
  const trophy = {"*" : 2, "#": -1}
  
  const map = dartResult.split('')
  
  map.forEach( (str, i , arr) => {
      const toNum = Number(str)
      
      if( !isNaN(toNum) ){
          if(!isNaN(Number(arr[i-1])) )  lst[lst.length - 1] = 10
          else lst.push(toNum )
      }
      if(score[str]) star.push(str)
      if(trophy[str]) star[star.length - 1] += str
    
  })
  
  star.forEach( (x, index) => {
      lst[index] = lst[index] ** score[x[0]]
      
      if(x[1] == "*"){
          if(index == 0) lst[index] = lst[index] * 2
          else {
              lst[index-1] = lst[index-1] * 2
              lst[index] = lst[index] * 2
          }
      }
      else if(x[1] == "#"){
          lst[index] = lst[index] * -1
      }
  })
  
  
  answer = lst[0] + lst[1] + lst[2]
  return answer;
}