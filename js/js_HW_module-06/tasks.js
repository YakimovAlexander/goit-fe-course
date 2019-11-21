import users from "./users.js";


/*
TASK1
*/

const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};

console.log(getUserNames(users));
//[ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



/*
TASK2
*/

const getUsersWithEyeColor = (users, color) => {
  const eyesColor = users.filter(user => user.eyeColor === color);
  return eyesColor;
};

console.log(getUsersWithEyeColor(users, 'blue'));
//[объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]



/*
TASK3
*/

const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter(user => user.gender === gender).map(user => user.name);
  return usersGender;
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]



/*
TASK4
*/

const getInactiveUsers = users => {
   const inactiveUsers = users.filter(user => !user.isActive);
   return inactiveUsers;
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



/*
TASK5
*/

const getUserWithEmail = (users, email) => {
  const usersEmail = users.find(user => user.email === email);
  return usersEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}

console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}



/*
TASK6
*/

const getUsersWithAge = (users, min, max) => {
  const usersAge = users.filter(user => user.age > min && user.age < max);
  return usersAge;
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*
TASK7
*/

const calculateTotalBalance = users => {
  const balanceUsers = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0
  );
  return balanceUsers;
};

console.log(calculateTotalBalance(users)); 
// 20916

/*
TASK8
*/

const getUsersWithFriend = (users, friendName) => {
  const userFriends = users.reduce((acc, { name, friends }) => {
    friends.includes(friendName) ? (acc = [...acc, name]) : acc;
    return acc;
  }, []);
  return userFriends;
};

console.log(getUsersWithFriend(users, "Briana Decker")); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, "Goldie Gentry"));
 // [ 'Elma Head', 'Sheree Anthony' ]


 
/*
TASK9
*/

const getNamesSortedByFriendsCount = users => {
 const sortedUsers = [...users].sort((userA, userB) => {
   userA.friends - userB.friends;
  }).map(user => user.name);
  return sortedUsers;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



/*
TASK10
*/

const getSortedUniqueSkills = users => {
  const userSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort();
  }, []);
  return [...new Set(userSkills)];
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
