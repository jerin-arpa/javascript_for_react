// How to declare a variable using let const
const name = 'jerry';
let season = 'rainy';
season = 'winter';



// 6 basic condition >,<,===,!==,<=,>=
// multiple condition: &&, ||
if (name === 'Jerry' || season === 'rainy') {

}
else if (name === 'jerry') {

}
else {

}


// 3. Array
// Index
// length, push
const numbers = [2, 45, 65, 43, 2, 1, 9];
numbers[0] = 56;

// loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(2, 3);
console.log(output);


// object
const student = {
    name: 'jerin',
    id: 38,
    age: 23,
}

const myVariable = 'age';

console.log(student.age);
console.log(student['age']); /* access via property name string */
console.log(student[myVariable]); /* Access via property name in a variable */