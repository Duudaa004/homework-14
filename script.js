// work 1

let numbers = [1, 2, 3, 4, 5];
let add = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(add);

// work 2

let info = [
    {
        name: "nugo",
        age: 23,
        adress: "Tbilisi",
    },
    {
        name: "saba",
        age: 24,
        adress: "Samtredia",
    },
    {
        name: "dato",
        age: 25,
        adress: "USA",
    },
];

// work 3

console.log(`My name is ${info[0].name}`);
console.log(`My age is ${info[0].age}`);
console.log(`my adress is ${info[0].adress}`);

// work 4

if (info[1].age < 19) {
    console.log("I am a teenager");
} else {
    console.log("I am an adult");
};

// work 5

let number = [11, 22, 12, 24, 30];
for(let i = 0; i < number.length; i++) 
{
    console.log(number[i]);
};

// work 6


switch ( new Date().getDay()) {
    case 0:
        currentDay = "Sunday";
        break;
    case 1: 
        currentDay = "Monday";
        break;
    case 2: 
        currentDay = "Tuesday";
        break;
    case 3: 
        currentDay = "Wednesday";
        break;
    case 4: 
        currentDay = "Thursday";
        break;
    case 5: 
        currentDay = "Friday";
        break;
    case 6: 
        currentDay = "Saturday";
        break;
};

console.log(currentDay)