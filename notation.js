const person = {
    name: 'Lal Nil Holud',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'summer',
    'son-name': 'sunny',
    address: 'Sylhet',
}

// dot notation
const prof1 = person.profession;
console.log(prof1);

// bracket notation
const prof2 = person["profession"];
console.log(prof2);

const pName = 'profession';
const prof3 = person[pName];

const season = person["25"];
console.log(season);

const son = person["son-name"];