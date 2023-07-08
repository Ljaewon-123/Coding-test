function solution(price, money, count) {
  var answer = 0;
  
  for(let i = 1; i <= count; i++){
      answer += price * i
  }
  
  
  const totalPrice = answer - money
  
  // console.log(totalPrice)
  
  if(totalPrice < 0) return 0

  return totalPrice
}