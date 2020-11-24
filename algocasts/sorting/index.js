// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // increase i for each element sorted and pushed to the end of the array
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      // swap if current bigger than the next element
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  // Kep the record of the lowest element found and only swap at the end of the loop

  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i // Assume i is the lowest

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j
    }
    // swap currently assumed lowest and new found lowest
    if (arr[i] !== arr[indexOfMin]) {
      let tmp = arr[i]
      arr[i] = arr[indexOfMin]
      arr[indexOfMin] = tmp
    }
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
