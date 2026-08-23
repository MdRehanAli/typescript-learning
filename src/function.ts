// Functions 

// Normal Function and Arrow Function 

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

addNormal(4, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(2, 3);


// object => function => method 
const user = {
    name: 'Ali',
    balance: 0,

    addBalance(value: number) {
        const totalBalance = this.balance + value

        return totalBalance;
    }
}

user.addBalance(1111000);

// CallBack Function 
const arr: number[] = [1, 4, 6]
const squareArray = arr.map((element: number): number => element * element);