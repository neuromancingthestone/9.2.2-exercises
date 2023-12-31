/* 
Write a function called `findUserByUsername` which 
accepts an array of objects, each with a key of 
username, and a string. The function should return the 
first object with the key of username that matches the 
string passed to the function. If the object is not 
found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(v){
    return v.username === username;
  });
}

/*
Write a function called `removeUser` which accepts 
an array of objects, each with a key of username, 
and a string. The function should remove the object from the array. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const ind = usersArray.findIndex(function(v){
//    console.log(v.username);
    return v.username === username;
  });
  if(ind === -1) return;
//  console.log(ind);
  return usersArray.splice(ind,1)[0];
}

//  return usersArray.splice(usersArray.findIndex(function(v){
//    return v.username === username;
//  }), 1);