function solution(N, stages) {
  var answer = [];
  let cnt = stages.length

  const lst = []
  const obj = createObj(stages)
  const allSame = checkAllSame(stages) 

  for(let i = 1 ; i <= N ; i++){

      if(allSame) { // answer...뭐야 너무 꼬였다 성공은함 
          if(i != stages[0]) answer.push(i)
          else  answer.unshift(stages[0]) 

          continue
      }

      if(!obj[i]){
          lst.push({"fault": 0, "stage": i })
          continue
      }

      let ero = obj[i] / cnt

      cnt -= obj[i] || 1

      lst.push({"fault": ero, "stage": i })
  }

  lst.sort((a,b) => b.fault - a.fault)

  // console.log(lst)

  lst.forEach(sta => answer.push(sta.stage))
  // lst.map(sta => sta.stage)

  // console.log(answer)

  return answer;
}

function createObj(stages){
  const obj = {}
  stages.forEach(sta => {
      obj[sta] = (obj[sta] || 0) + 1
  })
  return obj
}

function checkAllSame(stages){
return stages.every(element => element == stages[0])
}
