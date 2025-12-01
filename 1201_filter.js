const numbers = [30, 25, 12, 3, 8];
const fruits = ["banana", "lemon", "apple mango", "lime", "melon"];


const banana = fruits.filter((fruit) => fruit === "banana"); //한 줄이 아니면 중괄호를 넣거나 화살표 옆 fruit 앞에 return을 넣어야 함.

console.log(banana);

const under10 = numbers.filter((number) => number <= 10);


//2. 아래 과일 중 5글자 이하만 출력하시오 -> lemon, lime, melon
const under5 =