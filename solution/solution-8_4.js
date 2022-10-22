let result = 3;
grading(result);


function grading(score) {
    if (score >= 90)
        console.log("grade A")
    else if (score >= 80)
        console.log("grade B")
    else if (score >= 70)
        console.log("grade C")
    else if (score >= 60)
        console.log("grade D")
    else if (score >= 50)
        console.log("grade E")
    else console.log("fail")
}