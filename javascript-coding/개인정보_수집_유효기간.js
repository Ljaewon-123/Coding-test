function solution(today, terms, privacies) {
  var answer = [];
  
  
  const term = splitArr(terms)
  // const priva = splitArr(privacies)
  
  privacies.forEach((x, index) => {
      const spl = x.split(' ')
      const deadline = term[spl[1]]
      
      const res = addMonths(spl[0], deadline)
      
      // console.log(res, today)
      if(today > res) answer.push(index + 1)
      
  })
  
  
  
  return answer;
}

function addMonths(date, months) {
  
  const dateSplit = date.split('.')
  
  let getYear = Number(dateSplit[0])
  let getMonth = Number(dateSplit[1])
  
  const sumMonth = getMonth + Number(months)

  const { quotient, remainder } = divide(sumMonth)
  
  getYear += quotient
  getMonth = remainder
  
  return judgeDate(getYear, getMonth, dateSplit[2] - 1)
}

const divide = (dividend) => {

  const quotient = Math.floor(dividend / 12)

  const remainder = dividend % 12

  // console.log(`나눗셈 결과: 몫 = ${quotient}, 나머지 = ${remainder}`)
  return { quotient, remainder }
}

const judgeDate = (year, month, day) => {
  
  let newYear = year
  let newMonth = month
  let newDay = day
  
  if(!month) {
      newYear -= 1
      newMonth = 12
  }
  
  if(!day) {
      newMonth -= 1 
      newDay = 28
  }
  
  return `${newYear}.${String(newMonth).padStart(2,'0')}.${String(newDay).padStart(2,"0")}`
}


const splitArr = (array) => {
  const termObj = {}
  array.forEach(x => {
      const spl = x.split(' ')
      termObj[spl[0]] = spl[1]
  })
  
  return termObj
}