const arr = [1, 20, 10, 2, 11];

const selectedSort = (arr) => {
  let i = 1,
    temp,
    j;
  for (i = 1; i < arr.length; i++) {
    temp = arr[i];

    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }

  return arr;
};

selectedSort(arr);
