var age = 65;

if (age < 0) {
  console.log("歲數不能是負值");
} else if (age <= 2) {
  console.log("嬰兒");
} else if (age <= 10) {
  console.log("兒童");
} else if (age <= 20) {
  console.log("少年");
} else if (age <= 40) {
  console.log("青年");
} else if (age <= 64) {
  console.log("中年");
} else {
  console.log("長者");
}
