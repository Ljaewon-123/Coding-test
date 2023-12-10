function solution(numbers) {
  let answer = []
  const stack = []
  

  numbers.reverse().forEach((x, i) => {
      if(i != 0){
          const header = stack.at(-1)

          if(header == x) answer.push(compare(stack, x))
          
          else if(header > x){
              answer.push(header)
              stack.push(x)
          }
          else if(header < x){
              while (stack.length > 0 && stack.at(-1) <= x) {
                  stack.pop()
              }
              const res = compare(stack, x)
              answer.push(res)
              stack.push(x)
          }
      }
      else {
          stack.push(x)
      }
  })
  
  // 마지막에 reverse하고 .push(-1)
  answer = answer.reverse()
  answer.push(-1)
  
  // console.log(`stack: ${stack}`)
  
  return answer;

}

function compare(stack, x){
  for(let i = stack.length - 1; i >= 0; i--){
      if(x < stack[i]) return stack[i];
      // else stack.pop()
  }
  
  return -1
}
