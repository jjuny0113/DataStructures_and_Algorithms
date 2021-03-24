//활동 선택 문제

const activity = [
  [1, 1, 3],
  [2, 2, 5],
  [3, 4, 7],
  [4, 1, 8],
  [5, 5, 9],
  [6, 8, 10],
  [7, 9, 11],
  [8, 11, 14],
  [9, 13, 16],
];

const activitySelection = (act) => {
  const result = [];
  const sorted = act.sort((a, b) => a[2] - b[2]);
  let last = 0;
  sorted.forEach((item) => {
    if (last < item[1]) {
      last = item[2];
      result.push(item);
    }
  });
  return result;
};

activitySelection(activity);


const text = [[1,60,10],[2,100,20],[3,120,30]]

function fractionalKnapsack(item,w){
  const sorted = item.sort((prev,cur)=> cur[1]/cur[2]- prev[1]/prev[2])
  console.log(sorted)
  let result = 0
  let limit = w
  for(let i = 0; i<sorted.length;i++){
    let cur = sorted[i]
    if(limit > 0 ){
      if(limit>cur[2]){
      limit -= cur[2]
      result += cur[1]
        } else{
          result += cur[1]/cur[2] * limit
          limit = 0
        }
    }else{
      break
    }
  }
  return result
}

fractionalKnapsack(text,50)
