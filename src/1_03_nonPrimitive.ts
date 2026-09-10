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


// Object 

// reference type : object 

const user: {
    organization: "TUUO Solutions"; //Value type of data types: Literal types
    readonly location: string // Access modifier
    firstName: string;
    middleName?: string;  //Optional Type
    lastName: string;
    isMarried: boolean;
} = {
    organization: "TUUO Solutions",
    location: "Dhaka",
    firstName: 'MD',
    middleName: 'Rehan',
    lastName: 'Ali',
    isMarried: true
}

// user.organization = "PH Solutions";

console.log(user);