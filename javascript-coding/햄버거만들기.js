const solution = (ingredient) => {  // 1, 2, 3, 1 이여야 +1
  var answer = 0;

  const reverse = ingredient.reverse()

  for(let i = reverse.length - 1  ; i >= 0 ; i--){

    if(reverse[i] == 1){
      // console.log(shallowCopy[i] , i )
      if(reverse[i - 1] == 2){
        if(reverse[i - 2] == 3){
          if(reverse[i - 3] == 1){
            answer++

            reverse.splice(i-3, 4)

            i = i + 4 >= reverse.length - 1 ? reverse.length  : i + 4;

            // break
          }
        }
      }
    }

    

  }
  return answer;
}