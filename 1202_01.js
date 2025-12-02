const price = [1000, 2000, 3000]
//이 가격을 2배로 인상해서 새로운 가격표를 만들어야 한다.
//map
const newPrice = price.map( (data) => data * 2);
console.log(newPrice);

const ages = [15, 22, 19, 30, 12];
//20세 이상인 성인만 필터링



const adult = ages.filter((age) => age >= 20);
console.log(adult);

const str = ["a", "b", "c", "d", "e", "c"]
console.log(str.indexOf("c")); // 맨 처음 거를 찾음
console.log(str.lastIndexOf("c")); // 맨 마지막 거를 찾음
console.log(str.indexOf("f")); // 없으니까 -1
console.log(str.includes("c")); // true/false 를 구별
console.log(str.includes("C")); // 대문자라서 찾지 못하기 때문에 flase



str.reverse();
console.log(str);

const numbers = [1, 5, 3, 8, 2, 13, 32];

numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);



const myfruits = 'apple,banana,mango';
const myArray = myfruits.split(','); // 문자를 배열로 만드는 방법. ('')
console.log(myArray);

console.log(myArray.join('-')); // 배열을 문자로 바꾸는 방법