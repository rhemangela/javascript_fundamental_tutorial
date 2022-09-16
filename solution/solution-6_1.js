var rows = 5;
var str = "";

for (var i = 1; i <= rows; i++) {
  for (var j = 1; j <= i; j++) {
    str = str + j;
  }
  console.log(str);
  str = "";
}
