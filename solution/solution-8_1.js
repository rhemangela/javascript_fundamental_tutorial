const scores = { chinese: 83, english: 60, math: 99 };

function averageMarks(scores) {
	let marksArray = Object.values(scores);
	let totalMark = 0;
	for (let i = 0; i < marksArray.length; i++) {
		totalMark += marksArray[i];
	}
	let average = Math.round(totalMark / marksArray.length);
	console.log(average);
}

averageMarks(scores);

//alternative solution
// function averageMarks(scores) {
// 	let marksArray = Object.values(scores);
// 	let totalMark = marksArray.reduce((a, b) => a + b);
// 	let average = Math.round(totalMark / marksArray.length);
// 	console.log(average);
// }

// averageMarks(scores);