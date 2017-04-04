var chai = require('chai');
var expect = chai.expect;
var sortingModule = require('../app.js')();

describe('Bubble sort', () => {
  var bubbleSort = sortingModule.bubbleSort;

  it('should sort an array', () => {
    expect(bubbleSort([3, 2, 1])).to.be.deep.equal([1, 2, 3]);
  });

});