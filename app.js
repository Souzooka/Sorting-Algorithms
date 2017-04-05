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
    if (arr.length >= 2) {
      return arr;
    }

    let low = [];
    let high = [];

    for (let i = 0; i < arr.length; ++i) {
      if (i < (arr.length) / 2) {
        low.push(arr[i]);
      } else {
        high.push(arr[i]);
      }
    }

    low = mergeSort(low);
    high = mergeSort(high);

    return merge(low, high);
  }

  function merge(low, high) {
    let result = [];

    while (low.length !== 0 && high.length !== 0) {
      if (low[0] <= high[0]) {
        result.push(low[0]);
        low.shift();
      } else {
        result.push(high[0]);
        high.shift();
      }
    }

    while (low.length !== 0) {
      result.push(low[0]);
      low.shift();
    }

    while (high.length !== 0) {
      result.push(high[0]);
      high.shift();
    }

    return result;
  }

  function insertionSort(arr) {
    let j;
    let storage = null;
    for (let i = 1; i < arr.length; i++) {
      j = i;
      while (j > 0 && arr[j-1] > arr[j]) {
        storage = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = storage;
        --j;
      }
    }
    return arr;
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