// 5,true, {},[]

//  ',0,false,null,undefined


// Check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}



let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}


const money = 80;
let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha';
}


// ternary
let food1 = money > 100 ? 'biriyani' : 'cha';
console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';
console.log(drink);


// Number to string conversion
const num1 = 52;
console.log(num1);
const numString = num1 + '';
console.log(numString);

// string to number
const input = '560';
const inputNumber = +input;
console.log(inputNumber);


// 
let isActive = true;
const showUser = () => console.log('Display user');
const hideUser = () => console.log('Hide user');

isActive ? showUser() : hideUser();
isActive && showUser();

// toggle boolean
isActive = !isActive;