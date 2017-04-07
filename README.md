## Sorting Algorithms

This is an implementation of several different sorting algorithms in JavaScript. These sorting algorithms return a sorted array of numbers when passed in an unsorted array, although some are more efficient than others.

### Quick Sort

This sorting method works by recursively partitioning lower numbers and higher numbers around a pivot (in this case, the pivot is the first element of the array). When the arrays become one element or less (which are sorted by defintion), the arrays are then added to eachother and the pivot, creating one final sorted array.

#### Psuedo-Code

The following is a psuedo-code implementation of quick-sort:

```
quickSort(arr)
  if arr is 1 element long or less (when it is sorted)
    return arr

  pivot = first element of arr
  low = elements in arr that are less than pivot
  high = elements in arr that are more or equal to pivot

  return quickSort(low) + pivot + quickSort(high)
```

#### Algorithm efficiency

The efficiency of this algorithim in the best case is O(n log n), due to each element being iterated over so they can be partitioned into lower and higher arrays.

The worst case is O(n ^ 2) which is caused when the pivot is the lowest or highest element in the array, causing the algorithim to inefficiently partition the array. This is caused with arrays that are nearly sorted, sorted, or reverse sorted.

### Bubble Sort

This simplistic sorting algorithim works by iterating over each element in the array and checking if the next element is less than the previous element. If so, it then swaps the two elements. This is one of the slowest but easiest sorting algorithims to implement.

#### Psuedo-Code

```
bubbleSort(arr)
  while not sorted
    for each element in the array
      if previous element is greater than the next element
        swap the two elements
  return sorted array
```

#### Algorithm efficiency

The best case for this algorithm is O(n), assuming an already sorted array.

The worst and average case for this algorithm is O(n^2), with the very worst array that can be passed into this sort being a reverse-sorted array.

As a special note, an alternate version of this algorithm, Cocktail Shaker Sort, works by doing a reverse loop and sort after the forward loop. In most cases, this variant is faster than the vanilla Bubble Sort.

### Insertion Sort

Insertion Sort is an algorithm that sorts an array by iterating over each element in the array and inserting them into their correct positions in a new array according to their size.

#### Psuedo-Code

```
for i = 1 until the end of the array
  j = i
  while j > 0 and array[j-1] > array[j]
    swap array[j] and array[j-1]
    j = j-1
return sorted array
```
#### Algorithm efficiency

The best case for this algorithm is O(n), assuming an already sorted array.

The worst and average case for this algorithm is O(n^2), with the very worst array that can be passed into this sort being a reverse-sorted array.

However, this algorithm has benefits over other algorithms. For example, it has a constant space requirement, only requiring space for the element being sorted. It also allows new elements to easily be inserted into an already sorted array, making it beneficial if all of the data to be sorted is not available yet.
