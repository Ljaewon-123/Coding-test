function solution(survey, choices) {
  var answer = '';
  
  // const sur = [...survey]
  const indicator = createIndicators()
  
  survey.forEach( (indi, index) => {
      const score = choices[index]
      if( score < 4) indicator[indi[0]] += getScore(score)
      else if( score == 4 ) indicator[indi[0]] += 0 , indicator[indi[1]] += 0
      else indicator[indi[1]] += getScore(score)
  })
  
  // console.log(indicator)
  answer += final(indicator["R"], indicator["T"], "R", "T")
  answer += final(indicator["C"], indicator["F"], "C", "F")
  answer += final(indicator["J"], indicator["M"], "J", "M")
  answer += final(indicator["A"], indicator["N"], "A", "N")
  
  return answer;
}

function getScore(num){
  const score = {
      1: 3,
      2: 2,
      3: 1,
      4: 0,
      5: 1,
      6: 2,
      7: 3,
  }
  return score[num]
}
  
function createIndicators(){
  const indi = {
      "R": 0,
      "T": 0 ,
      "C": 0 ,
      "F": 0 ,
      "J": 0 ,
      "M": 0 ,
      "A": 0 ,
      "N": 0 ,
  }
  return indi
}

function final(indicatorsOne,indicatorsTwo, one, two){
  if(indicatorsOne < indicatorsTwo) return two
  else if(indicatorsOne == indicatorsTwo) return one
  return one
}

