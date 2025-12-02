const users = [
    {name : 'David', point : 50},
    {name : 'Juliet', point : 150},
    {name : 'Mike', point : 250},
];


// VIP 회원에게 특별 이벤트
// VIP 회원 기준은 포인트가 100점 이상인 회원만 포인트 2배 적립 이벤트

//filter
const vips = users.filter((user) => user.point >= 100);
console.log('vips: ', vips);

const newVips = vips.map( vip => ({...vip, point : vip.point * 2}));


const obj1 = {name : 'ghost', age : 500};
const obj2 = {mbti : 'INTP'};
const friends = {...obj1, ...obj2};
console.log('friends :', friends);

//friedns를 가져오는데 age만 수정하고 싶다.
const newFriend = {...friends, age: 1000};
console.log(newFriend);