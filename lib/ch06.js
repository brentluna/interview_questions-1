// Chapter 6 Problems

// 6.1: Accept an array of ints and an index. Return an array with 3
// sections: all the numbers less than the number at the index (pivot),
// all numbers equal to the pivot, and then all the numbers greater
// than the pivot

export const dutchFlag = (array, index) => {
	if (array.length < 2) return array;
	let left = array.filter(el => el < array[index]);
	let right = array.filter(el => el > array[index]);
	let mid = array.filter(el => el === array[index]);

	return dutchFlag(left, 0).concat(mid).concat(dutchFlag(right, 0))

};

const dutchF = (array, index) => {
	let smaller = 0;
	let equal = 0;
	let larger = array.length - 1;
	let pivotVal = array[index];
	while (equal < larger) {
		if (array[equal] <  pivotVal) {
			//swap equal and less, then increase both
			let tmp = array[equal];
			array[equal] = array[smaller];
			array[smaller] = tmp;
			smaller++;
			equal++
		} else if (array[equal] === pivotVal) {
			equal++

		} else {
			//swap larger and qual and decrease larger
			let tmp = array[equal];
			array[equal] = array[larger];
			array[larger] = tmp;
			larger--;
		}
	}
	return array;
};

// 6.6: Accept an array of stock prices. Return a pair of days [buy, sell]
// that would yield the greatest return

export const stockPicker = arr => {
	let buy = 0;
	let sell = 0;
	let currBuy = 0
	let currSell = 0;

	for (let i = 1; i < arr.length; i++) {
		let currDiff = arr[i] - arr[currBuy];
		if (currDiff > (arr[currSell] - arr[currBuy])) {
			currSell = i;
			if (currDiff > (arr[sell] - arr[buy])) {
				buy = currBuy;
				sell = currSell;
			}
		} else if (currDiff < 0) {
			currBuy = i;
			currSell = i;
		}
	}
  return [buy, sell];
};

// 6.11 Accept an array and return a random subset from that array
// of length n

export const randomSubsets = (array, n) => {

};

// 6.17: Accept a matrix (2D array) and return a 1-D array with the
// elements in clockwise, spiral order

// Hint: You may want a helper method that returns something like the
// transpose of a rectangular matrix. 

export const spiralOrdering = matrix => {

};
