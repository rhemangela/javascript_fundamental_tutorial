var arr_1 = [2, 4, 6, 7, 8, 1];
var arr_2 = [3, 5, 1, 7, 4];

var new_arr = [];
var length = Math.max(arr_1.length, arr_2.length);

for (i = 0; i < length; i++) {
  new_arr[i] = (arr_1[i] || 0) + (arr_2[i] || 0);
}
console.log(new_arr);
