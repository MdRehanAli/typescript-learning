//Object Destructuring


//Array Destructuring 


const user = {
    id: 212,
    name: {
        firstName: 'Baker',
        middleName: 'Vai'
    },
    gender: 'Male',
    favoriteColor: 'Black',
}

const { favoriteColor } = user
console.log(favoriteColor);