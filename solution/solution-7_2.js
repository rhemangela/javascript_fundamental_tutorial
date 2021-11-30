var arr = [-5, 7, -6, 0, -1];
let answer;

answer = arr[0];
for (i = 1; arr.length > i; i++) {
  if (arr[i] > answer) {
    answer = arr[i];
  }
}
console.log(answer);
