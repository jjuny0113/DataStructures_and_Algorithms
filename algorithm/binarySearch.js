const binarySearch = (arr, search) => {
  if (arr.length === 1 && search === arr[0]) return true;
  if (arr.length === 1 && search !== arr[0]) return false;
  if (arr.length === 0) return false;

  let medium = Math.floor(arr.length / 2);
  console.log(arr[medium]);
  if (arr[medium] === search) return true;

  if (arr[medium] !== search) {
    if (arr[medium] > search) {
      const firstCheck = arr.slice(0, medium);

      return binarySearch(firstCheck, search);
    } else {
      const middleCheck = arr.slice(medium + 1, arr.length);
      return binarySearch(middleCheck, search);
    }
  }
};

const arr = [69, 65, 18, 71, 11, 10, 42, 68, 36, 89];

binarySearch(arr, 89);
