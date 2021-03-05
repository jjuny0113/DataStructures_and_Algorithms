const arr = [1, 7, 10, 2];

const selectedSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    let temp;
    temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

selectedSort(arr);
