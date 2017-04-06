## Sorting Algorithms

For this assignment you will be responsible for the following:

1. Create a module that implements each of the folowing sorting algorithms:
  1. [Quick sort](https://en.wikipedia.org/wiki/Quicksort)
  1. [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
  1. [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
  1. [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
  1. [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)

Each module should be able to sort a randomized array of numbers.

1. Create a README.md file and for each algorithm include the following:
  1. Explain to a five year old how the algorithm works (3-4 sentences max)
  1. Psuedo code for each sorting implementation
  1. In your own words, describe the performance of the alogirthm for the following cases:
    1. Best case scenario
    1. Worst case scenario
    
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

#### Algorithim efficiency

The efficiency of this algorithim in the best case is O(n log n), due to each element being iterated over so they can be partitioned into lower and higher arrays.

The worst case is O(n ^ 2) which is caused when the pivot is the lowest or highest element in the array, causing the algorithim to inefficiently partition the array. This is caused with arrays that are nearly sorted, sorted, or reverse sorted.
