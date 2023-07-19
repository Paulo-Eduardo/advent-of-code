const fs = require("fs");

const readContent = () => {
	const listItem = [];
	const fileList = fs.readFileSync("./third/input.txt", "utf8").split("\n");

	for (let i = 0; i < fileList.length - 1; i += 3) {
		listItem.push(getItemFrom3Lines(fileList.slice(i, i + 3)));
	}

	return listItem.reduce((total, item) => {
		const itemValue =
			item.charCodeAt(0) > 90
				? item.charCodeAt(0) - 96
				: item.charCodeAt(0) - 38;
		return total + itemValue;
	}, 0);
};

const getItemFrom3Lines = (list) => {
	const [one, two, three] = list;
	for (let i = 0; i < one.length; i++) {
		for (let j = 0; j < two.length; j++) {
			for (let k = 0; k < three.length; k++) {
				if (one[i] === two[j] && one[i] === three[k]) return one[i];
			}
		}
	}
};

const getItemFromStack = (stack) => {
	const size = stack.length - 1;
	for (let i = 0; i < size / 2; i++) {
		for (let j = size; j >= size / 2; j--) {
			if (stack[i] === stack[j]) return stack[i];
		}
	}
};

module.exports = { readContent };
