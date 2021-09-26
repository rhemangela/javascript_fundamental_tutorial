var year = "800";

if ((year % 4 == 0 && year % 100 != 0) || year % 100 == 0) {
  console.log(year + "是閏年");
} else {
  console.log(year + "是平年");
}
