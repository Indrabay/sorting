# SORTING ALGORITHM

This project containt of sorting algorithm mostly talked in university or any programming school when talking about basic programming.

In this project all of the algorithm and code will be written in javascript.

## Table of Contents
- [SORTING ALGORITHM](#sorting-algorithm)
- [List of Algorithm](#list-of-sorting-algorithm)
	- [Selection Sort](#selection-sort-rockethttpsgithubcomindrabaysortingblobmasterselectionsortjs)
	- [Bubble Sort](#bubble-sort-rockethttpsgithubcomindrabaysortingblobmasterbubblesortjs)


## List of sorting algorithm

### **Selection Sort** [:rocket:](https://github.com/Indrabay/sorting/blob/master/selection_sort.js)

Selection sort is simple sorting algorithm, but not efficient. It has complexity of O(n<sup>2</sup>). Point of this sorting is to find most minimum value (in ascending order) and then place the value replacing the active checking index, continue until all index in array is visited, see table below for more detail explanation.

array = [ 5, 2, 4, 3, 1 ]
| **step** | **resulted array** | **unvisited** | **minimum** |
|:--------:|:------------------:|--------------:|:-----------:|
|     0    |    5, 2, 4, 3, 1   | 5, 2, 4, 3, 1 |     none    |
|     1    |    1, 2, 4, 3, 5   |    2, 4, 3, 5 |      1      |
|     2    |    1, 2, 4, 3, 5   |       4, 3, 5 |      2      |
|     3    |    1, 2, 3, 4, 5   |          4, 5 |      3      |
|     4    |    1, 2, 3, 4, 5   |             5 |      4      |
|     5    |    1, 2, 3, 4, 5   |          none |      5      |

Many implementation of this algorithm, but I think above algorithm is using minimum memory than the other implementation. Other implementation I know is using sorted list and unsorted list. Those two list will be kept in memory, so in term of memory usage it will use more than the first implementation

## **Bubble Sort** [:rocket:](https://github.com/Indrabay/sorting/blob/master/bubble_sort.js)