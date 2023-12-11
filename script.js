//central: There are too many users to store in a single database, 
//so the central database identifies which database the users are stored within. 


import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  const returnedValue = await central(id);
  
  const personal_info = await vault(id);
  const db = dbs[returnedValue] (id);
  return (db, personal_info)
}

//use async/await syntax to create a function
//called getUserData that takes an id number 
//and return a Promise that resolves to an object 
//containing vault 

getUserData(2)
.then((user_info) => {
    console.log(user_info);
});