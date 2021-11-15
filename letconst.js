// const unchangeable
// let changeable but will not access outside block, means outside {}

const numbers = [12, 45];
numbers.push(100);
numbers[1] = "hello";

console.log(numbers);

// const object
const person = {name: "Hero Alom", phone: 12345};
console.log(person);

let sum = 0;
for(let i =0; i < 10; i++){
    sum = sum + i;
}

console.log(i);