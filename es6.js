const numbers = [2, 45, 65, 43, 2, 1, 9];

const student = {
    name: 'jerin',
    id: 38,
    age: 23,
}
// template string
const about = `My name is ${student.name}`;
console.log(about);


// 2 arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// spread Operator
const newNumbers = [...numbers];
// Create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);