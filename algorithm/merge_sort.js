const arr = [9, 53, 12, 5, 26, 7, 45, 14, 13, 62, 41];

const merge = (left, right) => {
  const mergedArr = [];

  //왼쪽 오른쪽 다 데이터가 있는경우
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  //왼쪽만 데이터가 있는경우
  while (left.length) mergedArr.push(left.shift());
  //오른쪽만 데이터가 있는경우
  while (right.length) mergedArr.push(right.shift());
  return mergedArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

mergeSort(arr);
