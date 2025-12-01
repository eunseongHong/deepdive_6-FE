const animals = ['lion', 'cat', 'octopus', 'racoon', 'whale']


console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);

animals.pop();
console.log(animals);
animals.pop();
console.log(animals);
animals.push('cat');
console.log(animals);
animals.shift();
console.log(animals);
animals.unshift('lion');
console.log(animals);
animals.push('octopus', 'racoon');
console.log(animals);

// for문으로 1 + 10 더한 값을 출력
let total = 0;
for (let i = 1; i <= 10; i++) {
    total = total + i;
}

console.log(total);

for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

for (const animal of animals){
    console.log(animals);
}

animals.forEach( (animal, index) => {
    console.log(`${index + 1}. ${animal}`);
});