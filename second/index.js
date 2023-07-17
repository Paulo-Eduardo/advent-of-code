const fs = require("fs");

const valuesHand = { A: 1, B: 2, C: 3 };
const valuesResult = { X: 0, Y: 3, Z: 6 };

const readContent = () => {
	let totalScore = 0;
	fs.readFileSync("./second/input.txt", "utf8")
		.split("\n")
		.forEach((line) => {
			const [his, mine] = line.split(" ");
			totalScore += getMyHandValue(his, mine);
			totalScore += valuesResult[mine];
		});

	return totalScore;
};

const getMyHandValue = (his, mine) => {
	const win = { A: "B", B: "C", C: "A" };
	const lose = { A: "C", B: "A", C: "B" };

	switch (mine) {
		case "X":
			return valuesHand[lose[his]];
		case "Z":
			return valuesHand[win[his]];
		default:
			return valuesHand[his];
	}
};

module.exports = {
	readContent,
};

// Second elf pass the wrong info on the first part
const readContentV1 = () => {
	let totalScore = 0;
	fs.readFileSync("./second/input.txt", "utf8")
		.split("\n")
		.forEach((line) => {
			const [his, mine] = line.split(" ");
			totalScore += compareV1(his, mine);
			totalScore += mine === "X" ? 1 : mine === "Y" ? 2 : 3;
		});

	return totalScore;
};

const compareV1 = (his, mine) => {
	const choices = { A: "X", B: "Y", C: "Z" };

	if (choices[his] === mine) {
		return 3;
	}

	if (
		[
			["A", "Y"],
			["B", "Z"],
			["C", "X"],
		].findIndex((x) => x[0] == his && x[1] == mine) > -1
	) {
		return 6;
	} else {
		return 0;
	}
};
