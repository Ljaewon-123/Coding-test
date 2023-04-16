function solution(players, callings) {
  var answer = [];
  // answer = players
  
  let objPlayer = {};
  let objCalling = {}
  for (let i = 0; i < players.length; i++) {
    objPlayer[players[i]] = i
  }

  
  for (let i = 0; i < callings.length; i++) {
    
    const index = objPlayer[callings[i]]
    
    const tmp = players[index]
    const tmpIndex = objPlayer[players[index]]
    objPlayer[players[index]] = objPlayer[players[index-1]]
    objPlayer[players[index-1]] = tmpIndex
    players[index] = players[index-1]
    players[index-1] = tmp
      
  }

  answer = players
  
  
  return answer;
}