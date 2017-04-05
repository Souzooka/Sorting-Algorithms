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
      for (let j = newArr.length-1; j >= 0; --j) {
        if (j === 0) {
          if (arr[i] > newArr[j]) {
            newArr.splice(j+1, 0, arr[i]);
          } else {
            newArr.splice(j, 0, arr[i]);
          }
          break;
        }
        else if (arr[i] < newArr[j] && arr[i] > newArr[j]) {
          newArr.splice(j, 0, arr[i]);
          break;
        }
      }
    }

    return newArr;
  }

  function selectionSort(arr) {

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