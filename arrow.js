// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

// arrow function
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(5);
const sum = add(40, 30);
const result2 = give();
const result3 = doMath(10, 7);

console.log(result);
console.log(sum);
console.log(result2);
console.log(result3);