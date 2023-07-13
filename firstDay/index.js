const fs = require("fs");

let elfs = [0];

const readContent = () => {
	let currentElf = 0;
	fs.readFileSync("./firstDay/firstInput.txt", "utf8")
		.split("\n")
		.forEach((line) => {
			if (line === "") {
				currentElf++;
				elfs.push(0);
			} else {
				elfs[currentElf] += parseInt(line);
			}
		});

	elfs.sort((a, b) => b - a);

	return elfs.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
};

module.exports = {
	readContent,
};
