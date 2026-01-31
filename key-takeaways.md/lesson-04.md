# Javascript
## Phạm vi của biến

Phạm vi (scope) xác định nơi mà biến có thể truy cập 

Javascript có 3 loại phạm vi:
- Block scope (khối)
- Function scope (hàm)
- Toàn cục (global)

**Block scope (khối):** biến được khai báo trong cặp ngoặc nhọn {}
- **var**: không bị giới hạn bởi cặp ngoặc nhọn
- **let/const**: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị `undefined`

```javascript
if (true) {
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const có block scope";
}
console.log(varVariable); // OK, var không bị giới hạn
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined
```
**Function scope (hàm):** biến được khai báo trong 1 hàm
- Cả let/var/const ra ngoài hàm đều bị undefined
```javascript
function myFunction() {
    var functionScoped = "Chỉ có thể truy cập trong hàm này";
    let alsoFunctionScoped = "Tương tự";

    console.log(functionScoped); // OK
}
console.log(functionScoped); // Error: functionScoped is not defined 
```

**Toàn cục (global):** biến được khai báo ở 1 dòng code tự do, không nằm trong khối hay hàm
```javascript
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";

function testFunction() {
    console.log(globalVar); // Truy cập được
    console.log(globalLet); // Truy cập được
}
```
## break and continue

break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức
```javascript
for (let i = 10; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        break;
    }
}
```

continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo
```javascript
// Bỏ qua số chẵn
for (let i = 0; i < 10, i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua số chẵn
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```
 Ví dụ thực tế
 ```javascript
 const scores = [85, 79, 90, 66,80];
 console.log("Diem > 80");
 for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (score < 80) {
        continue; // Bỏ qua điểm < 80
    }
    console.log(score);
 }
 // output: 85, 90
 ```
 ## Câu điều kiện nâng cao
 **Câu điều kiện** If..else: thực thi code khác nhau theo điều kiện true, false
 ```javascript
 let score = 77;

if (score >= 60) {
    console.log("ban da qua mon");
} else {
    console.log("Ban can hoc lai");
}
```

 **Câu điều kiện** If..else..If: kiểm tra nhiều điều kiện theo thứ tự
 ```javascript
 let today = 777;

if (today === 1) {
    console.log('Chu nhat');
} else if (today === 2) {
    console.log('Thu 2');
} else if (today === 3) {
    console.log('Thu 3');
} else if (today === 4) {
    console.log('Thu 4');
} else if (today === 5) {
    console.log('Thu 5');
} else if (today === 6) {
    console.log('Thu 6');
} else if (today === 7){
    console.log('Thu 7');
} else {
    console.log('Ngay khong hop le');
}
```
**Ternary operator** (toán tử điều kiện): Cách viết ngắn gọn cho if..else đơn giản
```javascript
let age = 64;
let status1 = (age >= 65) ? 'Nghi huu' : 'Lao dong';
console.log(status1);

// Có thể lồng nhau (nên cẩn thận với độ phức tạp)
let score = 70;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" :
            (score >= 50) ? "E" : "F"
```
## Vòng lặp nâng cao
**for..in Loop**: dùng để duyệt qua các thuộc tính (properties) của 1 object
```javascript
const person = {
    name: "Mai",
    age: 18,
    city: "Hanoi"
}
for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
    console.log(`\n`)
}

// for i với mảng

const arr2 = ["Phong", "Lan", "Tien"];
for (let index in arr2) {
    console.log(index + ": " + arr2[index]);
}
// output
// 0: Phong
// 1: Lan
// 2: Tien
```
**forEach method**: Method của array để thực thi 1 function cho mỗi phần tử. **Không thể** dùng **break** hoặc **continue**
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value) {
    console.log(value);
});
```
## Utils function

**Utils** = tiện ích

Utils function là các hàm có sẵn của javascript, giúp việc code trở nên nhanh hơn, gọn hơn.

Bài này sẽ học 2 loại utils function thường sử dụng:
- **String utils**: các hàm xử lý chuỗi
- **Array utils**: các hàm xử lý mảng

## String utils
**Tổng quan các loại thao tác**
- Bỏ khoảng trắng
- Chuyển đổi chữ hoa -> thường và ngược lại
- Kiểm tra chuỗi có bao gồm chuỗi con không
- Tách chuỗi thành các phần
- Thay thế ký tự trong chuỗi

**Bỏ khoảng trắng**
- Hàm trim
    - trim() : bỏ khoảng trắng 2 đầu
    - trimStart() : bỏ khoảng trắng đầu
    - trimEnd() : bỏ khoảng trắng cuối
```javascript
let classname = "   K18 Playwright  "
console.log(classname); // output: "   K18 Playwright  "
console.log(classname.trim()); // output: "K18 Playwright"
```
**Chuyển đổi HOA <-> thường**
- toUpperCase()
- toLowerCase()
```javascript
let classname = "   K18 Playwright  "
console.log(classname.trim());
// //toLowerCase() va toUpperCase()
console.log(classname.toLowerCase()); // Output: "k18 playwright"
console.log(classname.toUpperCase()); // Output: "K18 PLAYWRIGHT"
```

**Kiểm tra chuỗi có bao gồm chuỗi con không**
- Dùng hàm includes (có phân biệt chữ hoa-thường)
```javascript
// includes(): tra ve Boolean, kiem tra chuoi co chua chuoi con nao khong
console.log(classname.includes("K18")); // true
```

**Cắt chuỗi**
- Dùng hàm split
```javascript
// split() chia chuoi thanh mang
let email = "abc@gmail.com, fgh@gmail.com, xyz@gmail.com";
const arrEmail = email.split(", ");
console.log(arrEmail);
//output: ["abc@gmail.com","fgh@gmail.com", "xyz@gmail.com"]
```
**Thay thế chuỗi con bằng chuỗi con khác**
- Dùng hang replace
```javascript
// replace("string cu", "string moi")
console.log(classname.replace("Playwright", "Selenium"));
// output: "K18 Selenium")
```
**Thêm các utils functin**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

## Array utils

**Tổng quan các loại thao tác với mảng**
- Thêm phần tử vào mảng (push, unshift, splice)
- Xóa phần tử khỏi mảng (pop, shift, splice)
- Tìm kiếm (find, filter)
- Biến đổi mảng (map)
- Sắp xếp mảng (sort)

**Thêm phần tử vào mảng**
- Thêm vào cuối: `push(<phần tử>)`
- Thêm vào đầu: `unshift(<phần tử>)`
- Thêm vào giữa: `splice(<vị trí>, <số phần tử cần xóa>, <phần tử cần thêm vào>)`
```javascript
let arr = [1, 2, 3];
// Thêm vào cuối
arr.push(4); 
//[1, 2, 3, 4]
// Thêm vào đầu
arr.unshift(0); 
//[0, 1, 2, 3, 4]
// Thêm vào giữa
arr.slice(2, 0, 1.5)
// [0, 1, 1.5, 2, 3, 4]
```
**Xóa phần tử khỏi mảng**
- Xóa ở cuối: `pop()`
- Xóa ở đầu: `shift()`
- Xóa ở giữa: `slice(<vị trí>, <số phần tử cần xóa>)`
```javascript
let arr = [1, 2, 3, 4, 5];
// Xóa phần tử cuối
arr.pop();
console.log(arr);
// [1, 2, 3, 4]
// Xóa phần tử ỏ đầu
arr.shift()
console.log(arr);
// [2, 3, 4]
// Xóa phần tử giữa
arr.slice(1, 1);
console.log(arr);
// [2, 4]
```
**Tìm kiếm phần tử**
- Trả về phần tử đầu tiên hợp lệ: `find()`
- Trả về tất cả các phần tử hợp lệ: `filter()`
```javascript
const numbers = [4, 32, 55, 1, 87];
// find() trả về phần tử đầu tiên > 10
let first = numbers.find(num => num > 10);
console.log(first);
// 32

// filter() trả về tất cả phần tử > 10
let all = numbers.filter(num => num > 10);
console.log(all);
// [32, 55, 87]
```
**Biến đổi mảng**
- `map()` tạo mảng mới bằng cách áp dụng 1 hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
```javascript
let numbers = [1, 2, 3, 4, 5];
// Nhân mỗi phần tử với 2
let doubled = numbers.map(num => num*2);
console.log(doubled);
//[2, 4, 6, 8, 10]
```
**Sắp xếp mảng**
- `sort((a, b) => a - b)`
    - So sánh từng cặp phần tử a và b
    - Trả về số âm: a đứng trước b
    - Trả về số dương: b đứng trước a
    - Trả về số 0: giữ nguyên thứ tự
```javascript
let numbers = [40, 100, 1, 5, 20];
// Sắp xếp tăng dần
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 5, 20, 40, 100]

// Sắp xếp giảm dần
numbers.sort((a, b) => b - a);
console.log(numbers);
// [100, 40, 20, 5, 1]
```

**Thêm các Array utils function:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array