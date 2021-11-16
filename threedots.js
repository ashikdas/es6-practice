const ages1 = [12, 14, 15];
const ages2 = [21, 24, 35];
const ages3 = [42, 44, 55];

const allAges = [...ages1, ...ages2, ...ages3];

const maximum = Math.max(...allAges);

console.log(allAges);
console.log(maximum);