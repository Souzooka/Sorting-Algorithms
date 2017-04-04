function sortingModule() {
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
    bubbleSort
  };
}

module.exports = sortingModule;