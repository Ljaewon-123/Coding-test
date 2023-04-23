function solution(park, routes) {
  var answer = [];
  let block = []
  
  // park = ["OOXOO","OOOOO","XOSOX","OOOOO","OOXOO"]
  // routes = ["W 2","E 2","N 2","S 2"]
  
  const maxRow = park.length -1
  const maxColumn = park[0].length -1
  
  answer = setupAnswer(park)
  
  for(let i = 0 ; i<routes.length; i++){
    routes[i] = routes[i].split(' ')
    if(routes[i][0] == "E"){
      const add = parseInt(routes[i][1])
      const cal = answer[1] + add
      const condi = cal > maxColumn
      if(!condi){
          if(rowTest(park[answer[0]],answer[1], cal) ) {
              answer[1] = answer[1] + add 
          }
      }
      
    }
    else if(routes[i][0] == "W"){
      const add = parseInt(routes[i][1])
      const cal = answer[1] - add
      const condi = cal < 0
      if(!condi){
        if(rowTest(park[answer[0]],answer[1] ,cal)){
          answer[1] = answer[1] - add 
        }
      }
      
    }
    else if(routes[i][0] == "S"){
      const add = parseInt(routes[i][1])
      const cal = answer[0] + add
      const condi = cal > maxRow
      if(!condi){
        if(columnTest(park,answer ,cal)){
          answer[0] = answer[0] + add
        }
      }
    }
    else if(routes[i][0] == "N"){
      const add = parseInt(routes[i][1])
      const cal = answer[0] - add
      const condi = cal < 0
      if(!condi){
        if(columnTest(park, answer, cal)){
          answer[0] = answer[0] - add
        }
      }
    }
  }
  
  // console.log(answer)
  return answer;
}
// 움직이고 x를 만났어야됨 
function rowTest(currentPosition, current, moveRow) {
  let start = current, end = moveRow;
  if (current > moveRow) {
    start = moveRow;
    end = current;
  }
  for (let i = start; i <= end; i++) {
    if (currentPosition[i] == "X") {
      return false;
    }
  }
  return true;
}
function columnTest(park, answer, moveColumn) {
  let start = answer[0], end = moveColumn;
  if (answer[0] > moveColumn) {
    start = moveColumn;
    end = answer[0];
  }
  for (let i = start; i <= end; i++) {
    if (park[i][answer[1]] == "X") {
      return false;
    }
  }
  return true;
}

function setupAnswer(park){
  for(let i = 0; i < park.length; i++){
    for(let j=0 ; j<park[i].length; j++){
      if(park[i][j] == 'S'){
        answer = [i,j]
        return answer
      }
    }
  }
}