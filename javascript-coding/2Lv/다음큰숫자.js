function solution(n) {
  var answer = 0;
  let count = 0
  let firstI
  const bin = ("0" + n.toString(2)).split('')
  // const anBin = n.toString(2).split('')
  
  // 1을 카운트 하면서 처음 1다음 0에다가 1을 넣고 지나온 수만큼 추가 
  for(let i = bin.length - 1 ; i >= 0 ; i-- ){
      if(bin[i] == '1'){
          firstI = i
          count++
          bin[i] = '0'
      }
      else if(bin[i] == '0'){
          if(!firstI) continue
          
          bin[i] = '1'
          break;
      }
  }
  
  for(let i = 1 ; i <= count - 1; i++){
      bin[bin.length - i] = '1'
  }
  
  // console.log(bin)
  
  // console.log(parseInt(bin.join(''), 2))
  
  return parseInt(bin.join(''), 2)
  
  // return answer;
}
