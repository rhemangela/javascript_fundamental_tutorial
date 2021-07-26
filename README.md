# 1. 安裝軟件
VSCode
(https://code.visualstudio.com/download)

NodeJS
(https://nodejs.org/en/download/)



# 2. VSCode基礎操作
* 插件 （extension) 
* command box
* terminal box
* `console.log()`使用法
* 給代碼加註譯 `//`

​
# 3. 變數與常數 (variable and constant)

在電腦程式裡面，變數是電腦記憶體中可以存放資料的地方，Javascript會在變數宣告與使用的時候動態配置記憶體。而在變數所存放的內容，則有可能在程式執行時被改變。
若以其值是否可以在程式運作中被改變，可以分為**變數**與**常數**。在程式的運作過程中變數的值可以被改變，而常數的值一經宣告之後就不可以改變。


* 宣告 （declaration)
```javascript
//變數宣告
let a; 
var b;
//常數宣告
const A = 1;
```
每個變數只須被宣告一次。

* 未初始化 （initialization)
 ```javascript
//不帶初始數值。 a 及 b 沒有數值。
let a; 
var b;
```
* 賦值 (assign value to variable)
```javascript
//a 及 b 內含數值。
let a = 1;
var b = "hello";
```
* 命名的規則
  * 名字不可以以數字起首
  * 名字不可有空格
  * 名字不可使用`! @ # $ % ^ & * ()`等符號
  * 名字可以有底線 `_`
  * 名字有大細階之分 (case-sensitive)

```javascript
//良好的命名方式
let userId; 
var user_id;
var user01;
const PI = 22/7;
```

* 保留名字 (reserved words)


# 4. 基本數值型態 （typings)
* 數值 (number)
* 字串 (string)
* 布林 (boolean)
* `null` 和 `underfined`的概念
​
```javascript
//number
let weekdays = 7;
const PI = 3.1415;

//string
let name = "Angela";
let greeting = " 8^_^8 你好嗎???"

//boolean
let isValid = true;
let isCorrect = 2 > 3; //false

//undefined
let a;

//null
let b = null;
```

* `console.log()`使用法
```javascript
let weekdays = 7;
console.log(weekdays); //output: 7
console.log("一星期共有", weekdays, "天") //output: 一星期共有7天
```

# 5. 運算子
* 數學運算子 （Arithmrtic Operator)
```javascript
let a = 100;
a  = a +10; //a現在是100 + 10 = 110
a = a - 60; //a現在是110 - 60 = 50
a = a * 4; //a現在是50 * 4 = 200
a = a / 5; //a現在是200 / 5  = 40
a = a % 7 //a現在是40 / 7  = 5
```

  * 複合指定運算子
```javascript
let a = 1;
a += 3; // 相當於 a = a + 3;
a -= 3; // 相當於 a = a - 3;
a *= 3; // 相當於 a = a * 3;
a /= 3; // 相當於 a = a / 3;
a++; // 相當於 a = a + 1;
a--; // 相當於 a = a - 1;
```  
* 數學函數的常用方法
```javascript
a = Math.round(3.1415);  // 四捨五入
a = Math.ceil(3.1415); // 向下調整 roundup
a = Math.floor(3.1415); // 向下調整 rounddown
a = Math.abs(-273); // 絕對數值
a = 3.1415.toFixed(2); // 保留兩個小數點
```    
其他javascript內置數學算式參考：

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

* 關係運算子 (Relation Operator)
```javascript
3 > 3;  // false
3 < 3; // false
3 >= 3; //true
3 <= 3; //true
3 == "3"; //true
3 === "3"; // false
3 != 3; //false
3 !== "3"; //true
```  
* 邏輯運算子 (Logical Operator)
  
  and: `&&`  兩者為true，結果才會是true

  or: `||` 兩者為false，結果才會是false

  not: `!` true變false, false變true
```javascript
//例子
3 > 2 && 1 < 2 // true
3 > 2 || 1 > 2  //true
!true //false
```  
* 運算子先後次序
  1. 括號內`( )` 最優先處理
  2. 先乘除，後加減
  3. 關係運算子
  4. 邏輯運算子
```javascript
//例子
3 + 4 * 0 // 3
(3 + 4) * 0 // 0
3 < 2 || 1 > 2 || 3 + 1 > 2 // true
```  
  
# 5. if ... else 條件指令
當程式流程在進行時，需要根據某個條件來決定是否執行接下來的動作時，就需要用到 if ... else 敘述。
* `if...`
* `if...else...`
* `if...else...if...`
```javascript
//if 例子

let isSunnyDay = true;

if (isSunnyDay){
  console.log("外出")
} 
//結果： 外出
```  
```javascript
//if ... else 例子

let isSunnyDay = false;

if (isSunnyDay){
  console.log("外出")
} else {
  console.log("留在室內")
}
//結果： 留在室內
```  
```javascript
//if ... else ... if 例子

let isSunnyDay = false;
let hasMoney = false;

if (isSunnyDay){
  console.log("行山")
} else if (hasMoney){
  console.log("行街銷費")
} else {
  console.log("圖書館看書")
//結果： 圖書館看書
```  
* 配合運算子使用條件指令
  
```javascript
let num = 5;
if (num%2 == 0) {
  console.log(num,"是雙數")
} else {
  console.log(num,"是單數")  
}
```  
* * 例題1：
  
    判斷數字是雙數或單數。
   
* * 例題2：
  
    判斷歲數的年齡層：

    1. 0-2 歲：嬰兒
    2. 3-10 歲：兒童
    3. 11-20 歲：少年
    4. 21-40 歲： 青年
    5. 41-64 歲： 中年
    6. 65歲或以上： 長者 
   
* * 例題3：
  
    計算年份是否為閏年。條件：

    1. 公元年非4的倍數，為平年。
    2. 公元年為4的倍數但非100的倍數，為閏年。
    3. 公元年為100的倍數但非400的倍數，為平年。
    4. 公元年為400的倍數為閏年。
    5. 
    （測試年份： 1984、1988、1992、1996、2000、2004、2008、2012、2016為閏年）

* * 例題4：
  
    計算可獲得的折購金額：
    1. 會員消費有9折
    2. 會員消費滿$500元可享有額外85折
    3. 非會員消費滿$500元有9折

# 6. 迴圈
  在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴圈 (loop) 的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行，是程式設計中很重要的一種控制結構。我們可以利用迴圈來進行重覆性的資料輸入、處理與輸出。

*  for loop: `for...while`
*  while loop: `while...`
*  do-while loop: `do...while `
  
```javascript
//for loop 例子

for (let i = 0; i < 10; i++) {
  console.log(i)
}
//結果： 0123456789
``` 
*  巢狀迴圈 nested for-loop
  
    巢狀迴圈的特性是在迴圈裡面又包覆著其他的迴圈。
    從外層迴圈來看，內層迴圈只是外層迴圈內所要執行的一段程式敘述而已；因此外層迴圈每動作一次，內層迴圈就會把整個迴圈執行一遍，執行完畢後才跳回到外層迴圈準備下一次的動作。

```javascript
//nested for loop 例子
//製作乘數表

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i, "*", j, "=", i * j);
  }
}
```  
* * 例題6.1：
  
    找出所有100以內的質數。
    質數（Prime number）指在大於1的自然數中，除了1和該數自身外，無法被其他自然數整除的數。
    （答案： 2	3	5	7	11	13	17	19	23	29	31	37	41	43
    73	79	83	89	97）

* * 例題6.2：
  
    試用nested loop寫出以下數字
    1
    12
    123
    1234
    12345
    123456
    ...