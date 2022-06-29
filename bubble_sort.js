function bubbleSort(arrayToSort, order = '') {
	if (order == '' || order == 'asc') {
		for (let i = 0; i < arrayToSort.length; i++) {
			for (let j = 0; j < arrayToSort.length - i; j++) {
				if (j + 1 == arrayToSort.length) {
					continue;
				}

				if (arrayToSort[j] > arrayToSort[j + 1]) {
					temp = arrayToSort[j]
					arrayToSort[j] = arrayToSort[j + 1]
					arrayToSort[j + 1] = temp
				}
			}
		}
	} else {
		for (let i = 0; i < arrayToSort.length; i++) {
			for (let j = 0; j < arrayToSort.length - i; j++) {
				if (j + 1 == arrayToSort.length) {
					continue;
				}

				if (arrayToSort[j] < arrayToSort[j + 1]) {
					temp = arrayToSort[j]
					arrayToSort[j] = arrayToSort[j + 1]
					arrayToSort[j + 1] = temp
				}
			}
		}
	}

	return arrayToSort
}

let someArray = [1, 2, 5, 8, 19, 3, 4, 10]
console.log(bubbleSort(someArray));
console.log(bubbleSort(someArray, 'desc'));