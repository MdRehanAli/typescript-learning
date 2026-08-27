// Type Aliasing 

type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string;
        city: string
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: 'Mr.',
        lastName: 'Baker'
    },
    gender: 'male',
    contactNo: '01764545454',
    address: {
        division: 'Dhaka',
        city: 'Mirpur'
    }
}


const user2: User = {
    id: 1234,
    name: {
        firstName: 'Mr.',
        lastName: 'Baker'
    },
    gender: 'male',
    contactNo: '01764545454',
    address: {
        division: 'Dhaka',
        city: 'Uttara'
    }
}