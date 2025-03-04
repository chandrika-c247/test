const test = [14,10,12,19,20,21]
const find = 16

const findClosest = (arr, num) => {
  let closest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - num) < Math.abs(closest - num)) {
      closest = arr[i]
    }
  }
  return closest
}

const findClosestGreaterThan = (arr, num) => {
  let closest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num && Math.abs(arr[i] - num) < Math.abs(closest - num)) {
      closest = arr[i]
    }
  }
  return closest
}
console.log(findClosest(test, find)); // 14
console.log(findClosestGreaterThan(test, find)); // 14