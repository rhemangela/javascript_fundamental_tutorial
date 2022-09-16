const scores = { chinese: 83, english: 60, math: 99 };

function averageMarks(scores) {
	let marksArray = Object.values(scores);
	let totalMark = marksArray.reduce((a, b) => a + b);
	let average = Math.round(totalMark / marksArray.length);
	console.log(average);
}

averageMarks(scores);
