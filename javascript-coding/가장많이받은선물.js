function solution(friends, gifts) {
  var answer = 0;
  const firG = {};
  const take = {}
  const giftLog = {}
  
  friends.forEach(name => {
      firG[name] = {}
      friends.forEach(innerName => {
          firG[name][innerName] = 0
      })
      firG[name]['total'] = 0
      firG[name]['ans'] = 0
      take[name] = 0
  } )
      
  // console.table(firG)
  
  gifts.forEach(gift => {
      const res = gift.split(' ')
      const a = res[0]
      const b = res[1]
      firG[a][b] += 1
      firG[a]['total'] += 1
      take[b] += 1
  })
  
  // console.table(firG)
  // console.log(firG)
  // console.log(take)
  
  friends.forEach(name => {
      giftLog[name] = firG[name]['total'] - take[name]
  })
  
  // console.table(giftLog)
  
  friends.forEach(name => {
      const fst = name
      const obj = firG[fst]
      
      friends.forEach(key => {
          const giveCnt = obj[key]
          const receiveCnt = firG[key][name]
          if(giveCnt == receiveCnt){ // 선물지수로 
              if(giftLog[name] > giftLog[key]) { firG[name]['ans'] += 1}
          }
          else if(giveCnt > receiveCnt) { firG[name]['ans'] += 1}
      })
  })
  
  // console.log(firG)
  
  Object.values(firG).forEach(val => {
      if(val['ans'] > answer) answer = val['ans']
  })
  
  

  return answer;
}