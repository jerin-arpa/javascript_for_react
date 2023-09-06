// Array Destructuring
const numbers = [42, 65];
/* const x = numbers[0];
const y = numbers[1];
console.log(x, y); */

// const [x, y] = [42, 65];
const [x, y] = numbers;

function getValues(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34];
const [first, second] = getValues(90, 32);

// console.log(getValues(90, 32));

const student = {
    name: 'jerin',
    id: 38,
    age: 23,
    movies: ['x', 'y'],
}

const [firstMovie, secondMovie] = student.movies;


// Object destructuring
const { name, age } = { name: 'jerry', age: 23 };
const { names, ages } = { id: 12, names: 'jerry', ages: 23 };


const employee = {
    id: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'javaScript'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Sylhet',
        Drink: 'Water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin',
        }
    }
}


const { machine, id } = employee;
const { weight, address } = employee?.specification;
const { brand } = employee?.specification?.watch;