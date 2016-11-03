// 7.1 Write a method that turns an int into a string, and another
// that turns a string into an int. ints will be below 100.
const ints = {
	0: '0',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5', 
	6: '6',
	7: '7',
	8: '8',
	9: '9'
}

const chars = {
	'0': 0,
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5, 
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9
}
export const intToString = num => {
	let result = '';
	let neg = false;
	if (num < 0) {
		neg = true;
		num = Math.abs(num);
	}

	while (num > 9) {
		let val = num % 10;
		result = ints[val] + result;
		num = Math.floor(num / 10)
	}
	result = ints[num] + result;
	return neg ? `-${result}` : result

};

export const stringToInt = str => {
	let result = 0;
	let isNeg = false;
	if (str[0] === '-') {
		isNeg = true;
		str = str.slice(1);
	}

	for (let i = 0; i < str.length; i++) {
		let val = chars[str[i]]
		val = val * Math.pow(10, str.length - 1 - i);
		isNeg ? result -= val : result += val
	}
	return result;
};

// 7.2: Accept a stringified integer, and two bases. Convert the strings
// from the first base to the second. You may want to write some helper
// methods.

export const baseConverter = (strNum, b1, b2) => {

};

// 7.4: Accept an array of characters. Replace every 'a' with 2 'd's,
// and remove every 'b'. You should mutate the array.

export const replaceAndRemove = chars => {
	let length = chars.length;
	for (let i = 0; i < length; i++) {
		if (chars[i] === 'b') {
			chars = chars.slice(0, i).concat(chars.slice(i + 1));
			i--;
			length--;
		} else if (chars[i] === 'a') {
			chars = chars.slice(0, i).concat(['d', 'd']).concat(chars.slice(i + 1));
			length++;
		}
	}
	return  chars;
};
