//Traditional function

function showMessage() {
//body or code block
}

//Arrow function

const showGreeting = (name) => {
//body or code block
console.log(`Hello ${name}`);
}

showGreeting('John');


// Destructuring

//Array

const students =[ 'Kevin', 'Jane', 'Doe', 'Ted', 'Kim'];
const grades = [90, 88, 78, 95, 85]; 

// const student1 = students[0]; // -> Accessing the first element
// console.log(student1);

//const [student1, student2,,student3] = students;
//console.log(student1, student2, student3); // -> Jane Doe Ted - skipping the 3rd element

const studentsWithGrades = students.map((name, index) => ({
    name, grade: grades[index] // -> Creating an object with name and grade
}))

console.log(studentsWithGrades);

//Object
const Player = {
stats: {
    health: 99,
    stamina: 55,
    magic: 67,
    inventory: {
        sword: true,
        bat: false,
        rope: false,
        pickaxe: true,
    }
},
name: 'John',
lives: 3,
}

//old way
//const playerHealth = stats.health;
//console.log(playerHealth);

//new way
//const {health, stamina, magic, inventory} = stats;
//console.log(health, stamina, magic, inventory);

//const {stats, lives} = Player;
//console.log(stats, lives);

// const player ={
//     newStats:{
//         health,
//         stamina,
//         magic,
//         inventory
//     }
// }

//Spread Operator

//old way
//console.log(students[0], grades[0], '-', students[1], grades[1]);

//new way
// const studentsAndGrades = [...students, ...grades];
// console.log(studentsAndGrades);

const player2 = {
    ...Player,
    lives: 5,
    stats: {
        ...Player.stats, // -> Copying the stats object
        health: 100,
    },
    name: 'Randy' // -> Overriding the name
    //Spread operator is necessary to avoid mutation
}

console.log(Player);
console.log(player2);

//Imperative programming - How to do something (Steps required)
//Declarative programming - What to do (What is required)

//which grades are even

//Declarative
// for (const grade of grades){
//     if (grade % 2 === 0){ // -> Checking if the grade is even
//         console.log(`${grade} is even`);
//     }
// }

/*
grades.map(grade => {
    if (grade % 2 === 0){ // -> If the remainder is 0, then it is even
        console.log(`${grade} is even`); 
    }
})
    */

//grades.map(grade => (grade % 2 === 0 ? console.log(`${grade} is even`): console.log(`${grade} is odd`)));

//Declarative
/*
grades.map(grade => {
    if (grade % 2 === 0){
        return console.log(`${grade} is even`);
    }
})
    */

//Filter - creates a new array with all elements that pass a condition that is provided by the function
const ratings = [3, 2, 5, 3, 4, 1];
const evenRatings = ratings.filter(rating => rating % 2 === 0); // When divided by 2 then remainder is 0, it is even.
// console.log(evenRatings);

//Find - returns the first element that passes a condition that is provided by the function
const highRating = ratings.find(rating => rating > 3); // -> Returns the first element that is greater than 3
console.log(highRating); // -> 5