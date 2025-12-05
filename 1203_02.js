const person = {
    name : 'ghost',
    age : 500,
    mbti : null,
};



console.log(Object.keys(person).length);

// person에 있는 값(value)들 중에, null이 있는지 확인해 보자.
// 있으면 true, 없으면 false
// inculudes() 에서도 사용.



const hasNull = Object.values(person).includes(null);
console.log(hasNull);



const tasks = [
    {id:1, text:'walk'},
    {id:2, text:'running'},
];

const newTasks={id:3, text:'programing'};

const finalTasks = [...tasks, newTasks];
console.log(finalTasks);


const tasks2 = [1, 2, 5];
const newTasks2 = 3;
const finalTasks2 = [...tasks2, newTasks2]; // 배열이 그대로 들어오기 때문에 ...을 붙임


console.log(finalTasks2);