// 날짜 객체

const now = new Date();
console.log(now);

const year = now.getFullYear();
const month = now.getMonth() + 1; // 0부터 시작
const date = String(now.getDate()).padStart(2, '0'); // 3:15:3 => 03:15:03
const day = now.getDay(); // 요일, 0 - 일요일, 1 - 월요일, 2 - 화요일, 3 - 수요일, 4 - 목요일, 5 - 금요일
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();


console.log(year, month, date, day);
console.log(`${hours} : ${minutes} : ${seconds}`);
console.log(Date.now);

console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString());

console.log(Date.now);
console.log(Date.now());

const a = 5;
const b = '5';

console.log(typeof a);
console.log(b);


