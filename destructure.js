const person = { name: 'Jack William', age: 18, job: 'facebook', gfName: "Ema Watson", phone: "0182184645"};

const { phone, gfName } = person;
// const phone = person.phone;
// const gfName = person.gfName;

// console.log(gfName);

const complexObject = {
    name : 'abx',
    info: {
        address : 'Dhanmondi',
        leader : 'Mofiz Uddin'
    }
}
const {leader} = complexObject.info;

const friends = ['Sakib', 'Rakib', 'Makib', 'Fuckib', 'Mokib'];
const [chotoFriend, ...olderF] = friends;

console.log(leader);