function solution(wallpaper) {
  var answer = [];
  
  for(let i= 0 ; i < wallpaper.length ; i++){
    for( let j= 0 ; j < wallpaper[i].length ; j++){
      if(wallpaper[i][j] == "#"){
        if(answer[0] == undefined){ // 첫조우
          answer.push(i)
          answer.push(j)
          answer.push(i+1)
          answer.push(j+1)
        }
          else{
            
            answer.splice(2, 1, i+1);
            // answer.splice(3, 1, j+1);
            
            if(j < answer[1]){ 
                answer.splice(1, 1, j);
            }
            else if(j >= answer[3]){
                answer.splice(3,1,j+1)
            }
          }
      }
    }
  }
  
  return answer;
}