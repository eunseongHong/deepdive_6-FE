const a = 4.7

console.log(Math.round(a));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.ceil(-4.1));

console.log(Math.max(1, 7, 2)) // 최대 값 찾기
console.log(Math.min(1, 7, 2)) // 최소 값 찾기


const talls = [178, 152, 143, 190]

// 가장 큰 키는 190입니다.

const bestTall = Math.max(...talls);

console.log(`가장 큰 키는 ${bestTall}입니다.`);

// 난수 구하기 (0~1 미만의 수)
const randomNumber = Math.floor(Math.random() * 10 + 1); // Math.floor로 소수점 버리기, +1로 10까지 가능한 숫자 만들기
console.log('Lucky Number is : ', randomNumber);



// 제곱 수 구하기
console.log(Math.pow(2,3)) // 2**3 2의 3제곱

//절대 값 얻기
console.log(Math.abs(-5));
console.log(Math.abs(5));