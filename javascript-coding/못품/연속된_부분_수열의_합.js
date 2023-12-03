function solution(sequence, k) {
  let answer = []
  let start = 0; 
  let end = 0; 
  let cnt = sequence[0]; 
  let infinity = Infinity; 

  while (start < sequence.length) { 
    if (cnt == k) { 
      if (end - start < infinity) { 
        infinity = end - start; 
        answer = [start, end]; 
      }
      cnt -= sequence[start++]; 
    } 
    else if (cnt < k) { 
      if (++end == sequence.length) break; 
      cnt += sequence[end]; 
    } 
    else { 
      cnt -= sequence[start++]; 
    }
  }

  return answer;
}

// 누적합은 다른문제를 한번 풀어보는게 좋겠다 지금은 봐도 잘 모르겠넹 
// 보통 배열에 시간초과 문제는 obj로 바꿔서 해결하긴 하는데 아예 이중으로 풀지않고 누적으로 푼다라.... 완전 새로워서 기존 지식으로는 못푸는 문제였음
