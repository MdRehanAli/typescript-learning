// Non Primitive typeof array 

let bazarList: string[] = ["eggs", "milk", "sugar", "rice", "curry"];

// bazarList.push(12) ; Cann't push number because of it's a number

let mixedArray: (string | number)[] = ["eggs", 20, 'Milk', 15];
mixedArray.push(100)

// Tupple 
let coordinates: [number, number] = [20, 30];
let couple: [string, string] = ['husband', 'wife'];

let nameAndRoll: [string, number] = ['Baker', 20];

let destination: [string, string, number] = ['Dhaka', 'Chittagong', 200]