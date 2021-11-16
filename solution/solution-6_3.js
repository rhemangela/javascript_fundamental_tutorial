var factorial = 5;
var result_num = 1;
var result_str = "";
for (var i = factorial; i > 0; i--) {
  result_num = result_num * i;
  result_str = result_str + i + "*";
}
console.log(result_str, "=", result_num);
