const person = {
    name: 'Jack',
    age: 17,
    job: 'facebooker',
    gfName: 'Ema Watson',
    address: 'Kocu khet',
    phone: '017739878',
    friends: ['tom', 'jerry', 'cruise']
}

const { phone, 
    gfName, 
    address 
} = person;

const complexObject = {
    name:'abc',
    info:{
        address: 'kola bagan',
        leader: 'tiger'
    }
}

const {leader} = complexObject.info;
console.log(leader)

// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName);
// console.log(phone);
// console.log(gfName);
// console.log(address);

const friends = [
    'sakib khan', 
    'arman khan', 
    'amir khan', 
    'salamn khan', 
    'salaman khan'
]

const [
    chotoFriend, 
    nextFriend, 
    ...restFriends
] = friends

// console.log(chotoFriend, nextFriend)
// console.log(restFriends)
