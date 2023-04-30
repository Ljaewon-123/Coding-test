// 가장 괜찮게 푼거같긴한데 로직만보면..
function solution(keymap, targets) {
  var answer = [];
  let obj = {}
  let array = []
  const keyObj = {};
  // keymap = ["BCEFD","ABACD"]
  // 	{ A: 0, B: 0, C: 1, D: 4, E: 2, F: 3 }
  for (const str of keymap) {
    // const keyObj = {};
    const set = new Set(str)
    for (const char of set) {
      if(!(char in keyObj)){
        keyObj[char] = str.indexOf(char)
      }
      else{
        if(keyObj[char] > str.indexOf(char)) {
          keyObj[char] = str.indexOf(char)
        }
      }
    }
  }
  // console.log(keyObj)
  
  targets.forEach(( element) => {
    for(let i= 0 ; i<element.length; i++ ){
      if(obj[element[i]]) obj[element[i]] += 1
      else obj[element[i]]=1
    }
    array.push(JSON.parse(JSON.stringify(obj)))
    obj = {}
  })
  // console.log(array)
  
  array.forEach((obj, index) => {
    let num = 0
    for (const [key, value] of Object.entries(obj)) {
      num += ((keyObj[key] + 1) * value)
    }
    if(isNaN(num)){
        answer.push(-1 ) 
    }
    else{
        answer.push(num)
    }
  })
  
  
  
  return answer;
}