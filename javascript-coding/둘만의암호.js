function solution(s, skip, index) {

    
  var answer = '';
  let newSkip = []
  for(let i = 0; i < skip.length ; i++){
      newSkip.push(skip[i].charCodeAt()) 
  }
  
  const block = 'z'.charCodeAt()
  s.split("").map((str) => {
      let newIndex = index;
      let ascii = str.charCodeAt()
      for(let i = 0 ; i< newIndex; i++){
          if(ascii == block) ascii -=26
          
          ascii++;
          newSkip.includes(ascii) && newIndex++
      }
      
      answer += String.fromCharCode(ascii);
  })
  
  return answer;
}