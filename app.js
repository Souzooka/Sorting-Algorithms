function sortingModule() {

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let pivot = arr[0];
    let lowArr = [];
    let highArr = [];

    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] < pivot) {
        lowArr.push(arr[i]);
      } else {
        highArr.push(arr[i]);
      }
    }

    return quickSort(lowArr).concat(pivot, quickSort(highArr));
  }

  function bubbleSort(arr) {
    let isSorted = false;
    let storage = null;

    while (!isSorted) {
      isSorted = true;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
          storage = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = storage;
          isSorted = false;
        }
      }
    }
    return arr;
  }

  function mergeSort(arr) {
    let workArr = [];

  }

  function insertionSort(arr) {
    let newArr = [arr[0]];
    arr.shift();

    for (let i = 0; i < arr.length; ++i) {

      for (let j = 0; j < newArr.length; ++j) {

        if (arr[i] > newArr[j]) {

        }
      }
    }

    return newArr;
  }

  function selectionSort(arr) {
    let newArr = [];
    let lowestNum = -Infinity;
    let lowestNumIndex = 0;
    let originalLength = arr.length;

    for (let i = 0; i < originalLength; ++i) {
      for (let j = 0; j < arr.length; ++j) {
        if (lowestNum > arr[j]) {
          lowestNum = arr[j];
          lowestNumIndex = j;
        }
      }
      newArr.push(arr[lowestNumIndex]);
      arr.splice(lowestNumIndex, 1);
    }
    return newArr;
  }

  return {
    bubbleSort,
    quickSort,
    mergeSort,
    insertionSort,
    selectionSort
  };
}

module.exports = sortingModule;