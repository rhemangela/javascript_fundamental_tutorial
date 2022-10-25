const scores = { chinese: 83, english: 60, math: 99 };

function highestMark(scores) {
	let marksArray = Object.values(scores);
	let subjectArray = Object.keys(scores);

	let highestMark = 0;
	let highestSubject;

	for (let i = 0; i < marksArray.length; i++) {
		if (highestMark < marksArray[i]) {
			highestMark = marksArray[i];
			highestSubject = subjectArray[i]
		}
	}
	console.log(highestSubject);
}

highestMark(scores);
