function solution(name, yearning, photo) {
    var answer = [];
    const score = createScore(name, yearning)
    
    for(let i=0; i < photo.length; i++){
        let num = 0
        for(let j = 0; j< photo[i].length; j++){ 
            for (const [key, value] of Object.entries(score)) {
                if(photo[i][j] == key){
                    num += value
                }
            }
        }
        answer.push(num)
    }
    return answer;
}

const createScore = (name, yearning) => {
    let score = {}
    for(let i = 0; i < name.length; i++){
        score[name[i]] = yearning[i]
    }
    return score
}