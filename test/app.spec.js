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