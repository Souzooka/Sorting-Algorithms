var chai = require('chai');
var expect = chai.expect;
var sortingModule = require('../app.js')();

var sortedArray = [];
var reverseSortedArray = [];

for (let i = 0; i < 1000; ++i) {
  sortedArray.push(i);
}

for (let i = 0; i < 1000; ++i) {
  reverseSortedArray.unshift(i);
}

describe('Bubble Sort', () => {
  var bubbleSort = sortingModule.bubbleSort;

  it('should sort an array', () => {
    expect(bubbleSort(reverseSortedArray)).to.be.deep.equal(sortedArray);
  });

});

describe('Quick Sort', () => {
  var quickSort = sortingModule.quickSort;

  it('should sort an array', () => {
    expect(quickSort(reverseSortedArray)).to.be.deep.equal(sortedArray);
  });

});

describe('Merge Sort', () => {
  var mergeSort = sortingModule.mergeSort;

  it.skip('should sort an array', () => {
    expect(mergeSort(reverseSortedArray)).to.be.deep.equal(sortedArray);
  });

});

describe('Insertion Sort', () => {
  var insertionSort = sortingModule.insertionSort;

  it('should sort an array', () => {
    expect(insertionSort([23, 7, 10, 6])).to.be.deep.equal([6, 7, 10, 23]);
  });

});

describe('Selection Sort', () => {
  var selectionSort = sortingModule.selectionSort;

  it('should sort an array', () => {

    expect(selectionSort(reverseSortedArray)).to.be.deep.equal(sortedArray);
  });

});