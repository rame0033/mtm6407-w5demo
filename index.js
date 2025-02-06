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

const [student1, student2,,student3] = students;
//console.log(student1, student2, student3); // -> Jane Doe Ted - skipping the 3rd element

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