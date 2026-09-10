//Object Destructuring


//Array Destructuring 


const user = {
    id: 212,
    name: {
        firstName: 'Baker',
        lastName: 'Vai',
        fullName: 'Baker Vai'
    },
    gender: 'Male',
    favoriteColor: 'Black',
}

const { gender } = user
console.log(gender);
const { name: {lastName} } = user
console.log(lastName);

const { favoriteColor: myFavoriteColor } = user  //Naming Alias
console.log(myFavoriteColor);

const { name: {fullName : myFullName} } = user
console.log(myFullName);


const friends = ['Rahim', 'Karim', 'Jadu', 'Madu', "kadu"]

const [, , myBestFriend]= friends

console.log(myBestFriend)