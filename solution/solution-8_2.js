const scores = { chinese: 83, english: 60, math: 99 };

function highestMark(scores) {
	let marksArray = Object.values(scores);
	let highest = 0;
	for (let i = 0; i < marksArray.length; i++) {
		if (highest < marksArray[i])
			highest = marksArray[i]
	}
	console.log(highest);
}

highestMark(scores);
