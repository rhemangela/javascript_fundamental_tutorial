# 0. 前言

這編程教學會以 javascript 語言，去教導編程的基礎概念。

- 我為何要選擇 Javascript 作為教學語言？
  答： 編程世界裡有各式各樣的語言，但其原理也是萬變不離其中。初學者不必執著於該由哪一種語言入手。只要學懂一門語言，將來學另一種語言也會事半功倍。
  並且，javascript 暫時仍是全世界最多人使用的程式語言，並且廣泛地應用在網頁前後端、手機程式開發。 建議初學者學習熱門語言，往後學習更容易尋找到相關的網上教學資源。

* 這教程的內容是編程必學的基礎嗎？
  答： 是的。這教程內容猶如電腦編程的「加減乘除」，是屬於入門技術。 就好比無論你想學習會計、還是學習微積分，其根基都必定是加減乘除。

# 1. 安裝軟件

VSCode
- 編寫程式碼的工具
(https://code.visualstudio.com/download)

NodeJS
- Javascript需要一個可執行Javascript的環境。瀏覽器（Chrome, Safari，firefox等等）內置Javascript引擎，可以直接執行Javascript。而除了瀏覽器外，另一個選擇是安裝Node軟件,可以為電腦提供一個可以運行Javascript的環境。
(https://nodejs.org/en/download/)


[點擊此處下載網頁範本（以瀏覽器運行javascript)](index.html)

# 2. VSCode 基礎操作

- 插件 （extension)
- command box
- terminal box
- `console.log()`使用法
- 給代碼加註譯 `//`

​

# 3. 變數與常數 (variable and constant)

影片教學：
https://www.youtube.com/watch?v=bib3ueAjRQg

在電腦程式裡面，變數是電腦記憶體中可以存放資料的地方，Javascript 會在變數宣告與使用的時候動態配置記憶體。而在變數所存放的內容，則有可能在程式執行時被改變。
若以其值是否可以在程式運作中被改變，可以分為**變數**與**常數**。在程式的運作過程中變數的值可以被改變，而常數的值一經宣告之後就不可以改變。

- 宣告 （declaration)

```javascript
//變數宣告
let a;
var b;
//常數宣告
const A = 1;
```

每個變數只須被宣告一次。

- 未初始化 （initialization)
  變數可以在宣告的時候不賦值（value)。
  但常數則必須在宣告的時候同時賦值。

```javascript
//不帶初始數值。 a 及 b 沒有數值。
let a;
var b;
```

- 賦值 (assign value to variable)

```javascript
//a 及 b 內含數值。
let a = 1;
var b = "hello";
```

- 命名的規則
  - 名字不可以以數字起首
  - 名字不可有空格
  - 名字不可使用`! @ # $ % ^ & * ()`等符號
  - 名字可以有底線 `_`
  - 名字有大細階之分 (case-sensitive)

```javascript
//良好的命名方式
let userId;
let user_id;
let user01;
const PI = 22 / 7;
```

- 保留名字 (reserved words)

# 4. 基本數值型態 （typings)

資料可以分為2類別：**primitive type**以及**reference type**
兩者其中最大的差別，是前者是儲存數值（pass by value),而後者則是儲存記憶體位置（pass by reference). 這一點比較抽象，於後面介紹到object type的資料型態時，會再以例子作解釋。

![alt text](img/data_types.png "Data Types")

此處首先介紹primitive type類別：
- 數值 (number)
- 字串 (string)
- 布林 (boolean)
- `null` 和 `underfined`的概念
  ​

```javascript
//number
let weekdays = 7;
const PI = 3.1415;

//string
let name = "Angela";
let greeting = " 8^_^8 你好嗎???";

//boolean
let isValid = true;
let isCorrect = 2 > 3; //false

//undefined
let a;

//null
let b = null;
```
 ## 4.1 弱型別的概念
 Javascript是弱型別（weak typing)的電腦語言，意即，對於資料型別系統(Type System)的檢查並不嚴格，以下為例子：
```javascript
let a = 123; //number
let b = "1"; //string
let c = a+b; //

console.log(c)//答案： 1231
console.log(typeof(c))//string
```
在上述例子可以看到，2個不同的類別（number以及string）相加，javascript將其答案自動歸類為string類別。這種寬鬆的類別處理，也會導致日後容易造成各種bugs的根源。也因此，強型別**Typescript**電腦語言的出現，就是補足了javascript的弊處。
```typescript
//typescript是強型別的javascript

//每個資料於宣告時，都必須同時宣告其類別
//如果類別與數際數值的型態不相附，便會出現警告
//程式也會無法繼續運行
let a : number = 123; 
let b : number = "1"; //出現警告
```

- `console.log()`使用法

```javascript
let weekdays = 7;
console.log(weekdays); //output: 7
console.log("一星期共有", weekdays, "天"); //output: 一星期共有7天
```

# 5. 運算子 Operator

- 數學運算子 （Arithmrtic Operator)

```javascript
let a = 100;
a = a + 10; //a現在是100 + 10 = 110
a = a - 60; //a現在是110 - 60 = 50
a = a * 4; //a現在是50 * 4 = 200
a = a / 5; //a現在是200 / 5  = 40
a = a % 7; //a現在是40 / 7  = 5
```

- 複合指定運算子

```javascript
let a = 1;
a += 3; // 相當於 a = a + 3;
a -= 3; // 相當於 a = a - 3;
a *= 3; // 相當於 a = a * 3;
a /= 3; // 相當於 a = a / 3;
a++; // 相當於 a = a + 1;
a--; // 相當於 a = a - 1;
```

- 數學函數的常用方法

```javascript
a = Math.round(3.1415); // 四捨五入
a = Math.ceil(3.1415); // 向下調整 roundup
a = Math.floor(3.1415); // 向下調整 rounddown
a = Math.abs(-273); // 絕對數值
a = (3.1415).toFixed(2); // 保留兩個小數點
```

其他 javascript 內置數學算式參考：

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

- 關係運算子 (Relation Operator)

```javascript
3 > 3; // false
3 < 3; // false
3 >= 3; //true
3 <= 3; //true
3 == "3"; //true
3 === "3"; // false
3 != 3; //false
3 !== "3"; //true
```

- 邏輯運算子 (Logical Operator)

  and: `&&` 兩者為 true，結果才會是 true

  or: `||` 兩者為 false，結果才會是 false

  not: `!` true 變 false, false 變 true

```javascript
//例子
3 > 2 && 1 < 2; // true
3 > 2 || 1 > 2; //true
!true; //false
```

- 運算子先後次序
  1. 括號內`( )` 最優先處理
  2. 先乘除，後加減
  3. 關係運算子
  4. 邏輯運算子

```javascript
//例子
3 + 4 * 0; // 3
(3 + 4) * 0; // 0
3 < 2 || 1 > 2 || 3 + 1 > 2; // true
```

# 5. if ... else 條件指令

當程式流程在進行時，需要根據某個條件來決定是否執行接下來的動作時，就需要用到 `if ... else` 敘述。

影片教學:
https://www.youtube.com/watch?v=_2BFEHB-PSA

- `if...`
- `if...else...`
- `if...else...if...`

```javascript
//if 例子

let isSunnyDay = true;

if (isSunnyDay) {
  console.log("外出");
}
//結果： 外出
```

```javascript
//if ... else 例子

let isSunnyDay = false;

if (isSunnyDay) {
  console.log("外出");
} else {
  console.log("留在室內");
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

- 配合運算子使用條件指令

```javascript
let num = 5;
if (num % 2 == 0) {
  console.log(num, "是雙數");
} else {
  console.log(num, "是單數");
}
```

- - 例題 1：

    判斷數字是雙數或單數。

- - 例題 2：

    判斷歲數的年齡層：

    1. 0-2 歲：嬰兒
    2. 3-10 歲：兒童
    3. 11-20 歲：少年
    4. 21-40 歲： 青年
    5. 41-64 歲： 中年
    6. 65 歲或以上： 長者

- - 例題 3：

    計算年份是否為閏年。條件：

    1. 公元年非 4 的倍數，為平年。
    2. 公元年為 4 的倍數但非 100 的倍數，為閏年。
    3. 公元年為 100 的倍數但非 400 的倍數，為平年。
    4. 公元年為 400 的倍數為閏年。
    5.

    （測試年份： 1984、1988、1992、1996、2000、2004、2008、2012、2016 為閏年）

- - 例題 4：

    計算可獲得的折購金額：

    1. 會員消費有 9 折
    2. 會員消費滿\$500 元可享有額外 85 折
    3. 非會員消費滿\$500 元有 9 折

- - 例題 5：
    將輸入的分鐘，變成「小時、分鐘」的格式。

```javascript
let minutes = 130;
//預期結果： 2小時10分鐘
```

- - 例題 6：
    判斷 3 個變數的數字，是否順序排列。

```javascript
//例子一 ：
let a = 1;
let b = 2;
let c = 5;
//預期結果 ： 小至大順序

//例子二 ：
let a = 50;
let b = 21;
let c = 0;
//預期結果 ： 大至小順序

//例子三 ：
let a = 6;
let b = 10;
let c = 2;
//預期結果 ： 不順序

//例子四 ：
let a = 88;
let b = 88;
let c = 88;
//預期結果 ： 三個數字相同
```

`if...else`在每一次判斷只限於兩樣事物之間二選一。如果需要在多樣事物之間選一，可以考慮使用`switch...case`。

```javascript
//switch...case 例子
let trafficLight = "dark";

switch (trafficLight) {
  case "red":
    console.log("紅燈，要停車");
    break;
  case "yellow":
    console.log("黃燈，準備開車");
    break;
  case "green":
    console.log("綠燈，可以行車");
    break;
  default:
    console.log("不是交通燈顏色！");
    break;
}
```

# 6. 迴圈 Looping

在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴圈 (loop) 的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行，是程式設計中很重要的一種控制結構。我們可以利用迴圈來進行重覆性的資料輸入、處理與輸出。

- for loop: `for...`
- while loop: `while...`
- do-while loop: `do...while`

```javascript
//for loop 例子

for (let i = 0; i < 10; i++) {
  console.log(i);
}
//結果： 0123456789
```

- 巢狀迴圈 nested for-loop

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
//現實編程裡，nested for loop 一般最多用到2層
//若果要用到3層,就不是一個好的程式設計
```

- - 例題 6.1：

    找出所有 100 以內的質數。
    質數（Prime number）指在大於 1 的自然數中，除了 1 和該數自身外，無法被其他自然數整除的數。
    （答案： 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97）

- - 例題 6.2：

    試用 nested loop 寫出以下數字
    1
    12
    123
    1234
    12345
    123456
    ...

- - 例題 6.3：

  運算變數的階乘。

```javascript
let factorial = 5;
//結果： 5*4*3*2*1 ＝ 120
```

- while loop 例子：-

```javascript
let i = 9;
while (i >= 0) {
  console.log(i);
  i--;
}
//結果： 9876543210
```

- do while 例子：-

```javascript
let i = 9;
do {
  console.log(i);
  i--;
} while (i >= 0);

//結果： 9876543210
```

# 7. 陣列 Array

<em>第7-9課的陣列Array、物件Object、函式Function，都是屬於參考型別（reference type)。</em>

陣列是指一串的資料。
如果我們視「變數」是一格櫃桶，那麼陣列就是一排的櫃桶。

![alt text](img/array_drawer.png "drawer")


```javascript
let a = []; //空陣列
let b = [10, 20, 30, 40, 50]; //只儲存數字的陣列
let d = [1, 2, [3, 4, 5], 6]; //陣列中的陣列

//index 陣列的索引
console.log(b[0]); //10
console.log(b[4]); //50

//陣列的長度
console.log(b.length); //5
```

- 一般而言，一個陣列中，只會放置同類型的資料。
- 陣列 配合 for loop 的使用 的例子 1：

```javascript
let userName = ["陳大文", "王小明", "Chris Wong"];
for (i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}
//結果： 陳大文 王小明 Chris Wong
```

- 陣列 配合 for loop 的使用 的例子 2：

```javascript
//運算數列裡的平方數
let b = [1, 2, 3, 4, 5];
for (i = 0; i < b.length; i++) {
  console.log(b[i] * b[i]);
}
//結果： 1 4 9 16 25
```

- 陣列的常用方法和功能
  https://twitter.com/profulsadangi/status/1288053880010334208

![alt text](img/array_cheatsheet.png "Title")

- 陣列 配合 ``push`` 的使用 的例子：
```javascript
let a = [];
a.push(91);
a.push(923);
console.log(a);
//結果：[91, 923]
```

- 陣列 配合 ``map`` 的使用 的例子：
```javascript
//運算數列裡的平方數
let b = [1, 2, 3, 4, 5];
let c = b.map((x) => x * x);
console.log(c);
//結果： 1 4 9 16 25
```

```javascript
let testing = ["a", "b", "c"];

// 顯示第1個元素（element)
console.log(testing[0]); //"a"
// 顯示元素的數量
console.log(testing.length); //3
//增加元素
testing.push("d"); //["a", "b", "c", "d"]
```

- - 例題 7.1：

試將兩組陣列相對應的值相加。

```javascript
//例子1 ：
let arr_1 = [1, 0, 2, 3, 4];
let arr_2 = [3, 5, 6, 7, 8];
//預期結果 ： [4, 5, 8, 10, 12]

//例子2 ：
let arr_1 = [];
let arr_2 = [3, 5, 6, 7, 8];
//預期結果 ： [4, 5, 6, 7, 8]

//例子3 ：
let arr_1 = [];
let arr_2 = [];
//預期結果 ： []

//例子4 ：
let arr_1 = [1, 0, 2];
let arr_2 = [3, 5, 1, 7, 4];
//預期結果 ： [4, 5, 3, 7, 4]
```

- - 例題 7.2：

試找出陣列中最大的值。

```javascript
//例子 ：
let arr = [5, 7, -6, 0, -1];
//預期結果 ： 7
```

# 8. 物件 Object 

物件是以用一個大括號 {} 的方式來建立。
```javascript
//物件例子：

let Angela = {
  age: 20,
  genda: "female",
  married: true,
  familyMembers:["Sam","飛飛"]
}
```
以上的物件例子裡，共包含4個屬性（properties)： ```age, genda, married, familyMembers```

要提取個別的屬性資料，方法如下：
```javascript
console.log(Angela.age); //會得到 20 這個結果
console.log(Angela.familyMembers[1]); //會得到 飛飛 這個結果
```
##### 新增物件屬性

如果要在物件外，直接新增屬性到物件內的話，可以這樣寫：
```javascript
Angela.dog = "BB";
console.log(Angela.dog); //存取值就會得到 BB
```

前述提到，物件是reference type (參考型別），其所記載是記憶體的位置reference，而非實際的資料value.
```javascript
let object1= {animal:"dog"};
let object2 = object1;
object1.name = "cat";
console.log(object2.name);//結果是 cat
```
以上結果是因為object本身是記載記憶體地址(pass by reference) ，所以```let object2 = object1```實際操作的將`object1`的所在記憶體位置存放在```object2```裡。
當電腦執行```object1.name = "cat";```時，就是在修改object1的地址所指向的物件的屬性。亦因為```object2```本來就是指向與```object1```相同地址的物件，所以修改```object1```就等如修改```object2```

![alt text](img/passByReference.png "pass by reference")


- Object 實際使用例子：
  常用於網站上的資料呈現、傳輸。例如傳送一個whatsapp 訊息的資料格式如下：

```javascript
{
  "messages": [
    {
      "messageNumber": 1,
      "id": "gBEGNRkQlzApAgkmn4pjmXQ0XrU",
      "body": "Test message",
      "fromMe": true,
      "self": 1,
      "isForwarded": 0,
      "author": "78005553535@c.us",
      "time": 946684800,
      "chatId": "78005553535@c.us",
      "type": "chat",
      "senderName": "780005553535@c.us",
      "caption": null,
      "quotedMsgId": null,
      "metadata": {},
      "chatName": "78005553535"
    }
  ]
}
```
- - 例題 8.1： //todo

# 9. 函式 Function

「函式」指的是將一或多段程式指令包裝起來，可以重複使用，也方便維護。
函式只會在被呼叫的時候才執行，函式本身並不會主動執行。
![alt text](img/function.png "Title")

- 函式基本寫法
  - 函式語法結構:-
  ![alt text](img/function_syntax_1.png "Title")
  - 呼叫函式:-
  ![alt text](img/function_syntax_2.png "Title")


- 不帶參數函式
```javascript
function number() {
  //定義函式內容
  console.log("我是一個function");
}

number(); //呼叫number函式
number(); //呼叫number函式
//函式可被無限次呼叫
```

- 帶入參數 (parameters) 函式
```javascript
function addition(num1, num2) {
  let total = num1 + num2;
  console.log("總和是" + total);
}

//呼叫參數
addition(1, 2); //總和是3
addition(3, 3); //總和是6

```

- 回傳值（return value) 函式
```javascript
function subtraction(num1, num2) {
  return num1 - num2
}
console.log(subtraction(4,3));//1
```
若函式不回傳值，則可省略 return。但要注意，當 return 執行時，解譯器會跳出該函式，所以如果 return 後面還有程式碼，則不會被執行。因此，用 return 回傳空值也具有「中止」程式碼的功能。
所以，一般情況下，return應該會寫在函式內的最後一行。


##### 區域變數 (Local variable) 與 全堿變數(global variable)
  區域變數 (Local variable)：當變數在一個函數內宣告，就只能在該函式中使用；
  全域變數 (Global variable)：當變數在函數範圍之外宣告，就能在程式各處使用

```javascript
// 此處 不 可呼叫carName

function myFunction() {
  let carName = "Volvo";
  // carName是區堿變數
  // 此處可呼叫carName
}

// 此處 不 可呼叫carName
```

- - 例題 9.1：

試設計一個可以計算圓周的函式。

```javascript
//例子 ：
let r = 3;
findCircumstance(r);
//預期結果 ： 18.84
```


- - 例題 9.2：

試設計一個可以運算出陣列裡最小數值的函式。

```javascript
//例子 ：
let arr = [-5, 7, -6, 0, -1]
findMin(arr);
//預期結果 ： -6
```

- - 例題 9.3：

試設計一個可以回傳平方數的函式。
```javascript

let a = square(4);
// a = 16;
let a = square(10);
//a = 100;
```

- - 例題 9.4： //todo

試設計一個可以列印2個參之間所有數值的函式。
```javascript

square(1,5);
// 預期結果： [1,2,3,4,5]
square(-4,1);
// 預期結果： [-4,-3,-2,-1,0,1]
```

- - 例題 9.5： //todo

試設計一個計算某數值出現的次數的函式。
```javascript

countOccurance([1,2,2,0,5],5);
// 預期結果： 出現次數是 1 次
countOccurance([0,2,2],5);
// 預期結果： 出現次數是 0 次
```