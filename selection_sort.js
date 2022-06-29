// Here we have bunch of sorting algorithm

// selectionSort takes two parameters
// first param is an array
// second param is order type: 'asd' / 'desc'
// return of this function is sorted array
function selectionSort1(arrayToSort, order = '') {
	let sortedList = [];
	let unsortedList = [...arrayToSort]

	if (order == '' || order == 'asc') {
		for (let i = 0; i < arrayToSort.length; i++) {
			let min = unsortedList[0]
			let index = 0
			for (let j = 1; j < unsortedList.length; j++) {
				if (min > unsortedList[j]) {
					min = unsortedList[j]
					index = j
				}
			}
			sortedList.push(min)
			unsortedList.splice(index, 1)
		}
	} else {
		for (let i = 0; i < arrayToSort.length; i++) {
			let max = unsortedList[0]
			let index = 0
			for (let j = 1; j < unsortedList.length; j++) {
				if (max < unsortedList[j]) {
					max = unsortedList[j]
					index = j
				}
			}
			sortedList.push(max)
			unsortedList.splice(index, 1)
		}
	}

	return sortedList
}

function selectionSort2(arrayToSort, order = '') {
	let resultArray = [...arrayToSort];
	const ARRAYLENGTH = arrayToSort.length;

	if (order == '' || order == 'asc') {
		for (let i = 0; i < ARRAYLENGTH; i++) {
			let min = resultArray[i]
			let index = i;
			for (let j = i + 1; j < ARRAYLENGTH; j++) {
				if (min > resultArray[j]) {
					min = resultArray[j]
					index = j
				}
			}
			let temp = resultArray[i]
			resultArray[i] = resultArray[index]
			resultArray[index] = temp
		}
	} else {
		for (let i = 0; i < ARRAYLENGTH; i++) {
			let max = resultArray[i]
			let index = i;
			for (let j = i + 1; j < ARRAYLENGTH; j++) {
				if (max < resultArray[j]) {
					max = resultArray[j]
					index = j
				}
			}
			let temp = resultArray[i]
			resultArray[i] = resultArray[index]
			resultArray[index] = temp
		}
	}

	return resultArray
}

let someArray = [1, 2, 5, 8, 19, 3, 4, 10]