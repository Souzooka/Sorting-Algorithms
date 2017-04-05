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

  return {
    bubbleSort,
    quickSort
  };
}

module.exports = sortingModule;