function solution(numbers) {
  var answer = [];
  let array = []
  
  for(let i = 0; i < numbers.length ; i++){
      for(let j = 0; j < numbers.length ; j++){
          if(i != j) array.push(numbers[i] + numbers[j])
      }   
  }
  const set = new Set(array)
  
  answer = Array.from(set)
  // console.log(answer)
  
  return answer.sort((a,b) => a - b)
}