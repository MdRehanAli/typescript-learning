// Spread Operator 

const friends = ['Rahim', 'Karim'];
const schoolFriends = ['pintu', 'jhantu', 'bulbul'];
const collegeFriends = ['Moinul', 'Sabbir', 'Sishir'];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);

// Spread Operator in object

const user = {
    name: "Baker",
    phoneNumber: '+8801700210510'
}

const otherInfo = {
    hobby: 'PlayingCricket',
    favouriteColor: "Black"
}

const userInfo = { ...user, ...otherInfo }

console.log(userInfo)


// Rest Operator 
// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Send Invite to ${friend1}`);
//     console.log(`Send Invite to ${friend2}`);
//     console.log(`Send Invite to ${friend3}`);
// }

// sendInvite('Pintu', 'Chintu', 'Bulbul');

// Rest Operator 
const sendInvites = (...friends: string[]) => {
    friends.forEach((friend: string) =>
        console.log(`Send invitation to ${friend}`)
    )
};

sendInvites('Pintu', 'Chintu', 'Bulbul')