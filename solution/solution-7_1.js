var arr_1 = [1, 0, 2];
var arr_2 = [3, 5, 1, 7, 4];

var new_arr = [];
var length;

if (arr_1.length == 0) {
  new_arr = arr_2;
} else if (arr_2.length == 0) {
  new_arr = arr_1;
} else {
  if (arr_1.length >= arr_2.length) {
    //如果arr_1 更長
    new_arr = arr_1;
    for (i = 0; arr_2.length > i; i++) {
      new_arr[i] = new_arr[i] + arr_2[i];
    }
  } else {
    //如果arr_2 更長
    new_arr = arr_2;
    for (i = 0; arr_1.length > i; i++) {
      new_arr[i] = new_arr[i] + arr_1[i];
    }
  }
}
console.log(new_arr);
