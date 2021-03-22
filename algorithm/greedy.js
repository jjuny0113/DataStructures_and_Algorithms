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
