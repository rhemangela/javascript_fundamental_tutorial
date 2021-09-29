let price = 100;
let isMember = false;

if (isMember) {
  if (price >= 500) {
    console.log("會員 滿$500 $", price * 0.9 * 0.85);
  } else {
    console.log("會員 未滿$500 $", price * 0.9);
  }
} else {
  if (price >= 500) {
    console.log("非會員 滿$500 $", price * 0.9);
  } else {
    console.log("非會員 未滿$500 $", price);
  }
}
