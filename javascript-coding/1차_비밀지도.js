function solution(n, arr1, arr2) {
  var answer = [];

  arr1.forEach( (element, index) => {
      const binary = element.toString('2').padStart(n,'0')
      const binary2 = arr2[index].toString('2').padStart(n,'0')
      let str = ''

      for(let i = 0; i < binary.length ; i++){
          if(binary[i] == 0 && binary2[i] == 0) str += ' '
          else str += '#'
      }

      answer.push(str)
  })

  return answer;
}