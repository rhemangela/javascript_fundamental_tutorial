var a = 0;
var b = 2;
var c = 6;

var diff_1 = a - b;
var diff_2 = b - c;

if (diff_1 == 0 && diff_2 == 0) {
  console.log("3個數字相同");
} else if (diff_1 >= 0 && diff_2 >= 0) {
  console.log("由大至小");
} else if (diff_1 <= 0 && diff_2 <= 0) {
  console.log("由小至大");
} else {
  console.log("不順序");
}
