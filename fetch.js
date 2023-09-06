// 1.JSON => stringify and parse
const student = {
    name: 'jerin',
    id: 38,
    age: 23,
    movies: ['x', 'y'],
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. Fetch
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));


// keys, values
const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);


// for
const numbers = [23, 54, 67, 97, 111];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);


// for of array like object
// loop on an object using for in




// add or remove for an array
const products = [
    {
        name: 'laptop',
        price: 32000,
        brand: 'lenovo',
        color: 'silver',
    },
    {
        name: 'phone',
        price: 7000,
        brand: 'iphone',
        color: 'golden',
    },
    {
        name: 'watch',
        price: 3000,
        brand: 'casio',
        color: 'yellow',
    },
    {
        name: 'sunglass',
        price: 300,
        brand: 'ray',
        color: 'black',
    },
    {
        name: 'camera',
        price: 9000,
        brand: 'canon',
        color: 'gray',
    },
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal' }
// copy products array and then Add newProducts
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = product.filter(product => product.name !== 'phone');