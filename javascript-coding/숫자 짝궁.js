function solution(X, Y) {
  var answer = '';
  
  const yobj = createObject(Y)
  
  for (const iter of X.split('').sort((a,b) => b-a)) {
    
    if(!yobj[iter]) continue
        
    if(yobj[iter] == 0) continue

    answer += iter
    yobj[iter] -= 1
  }

  if(answer == '') return "-1"

  if(testOnlyZeor(answer)) return "0"
  
  return answer;
}

function createObject(Y) {
const yobj = {}

for (const element of Y) {
  yobj[element] = (yobj[element] || 0) + 1;
}

return yobj
}

function testOnlyZeor(answer){
const set = new Set(answer)

if(set.size == 1 && set.has('0')) return true

return false
}