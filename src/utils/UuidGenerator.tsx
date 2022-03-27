export const UuidGenerator = (num: number) => {
  return Math.random() + num + Math.random() + Math.floor(num + Math.random() / 8).toString() + Math.random().toString().substring(2);
};

//binary search
export const binarySearch = (arr: any[], value: any) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
