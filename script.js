//central: There are too many users to store in a single database, 
//so the central database identifies which database the users are stored within. 


import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try {
    let returnedValue = await central(id);

      // let personal_info = await vault(id); + let db = dbs[returnedValue] (id); in promise.all
    const [db, personalInfo] = await Promise.all([dbs[returnedValue](id), vault(id)]);

    return {db, personalInfo};
    
  } catch (error) {
    return error;
  }
}


//use async/await syntax to create a function
//called getUserData that takes an id number 
//and return a Promise that resolves to an object 
//containing vault 

getUserData(2)
.then((user_info) => {
  const time = new Date().getTime();
      console.log(user_info);
      console.log("processed completed in:", new Date().getTime() - time, "ms");
  });

// import { central, db1, db2, db3, vault } from "./databases.js";
// async function getUserData(id) {
//   try {
//     const dbs = {
//       db1: db1,
//       db2: db2,
//       db3: db3,
//     };
//     const db = await central(id);
//     const [info, secure] = await Promise.all([dbs[db], vault(id)]);
//     return { id, ...info, ...secure };
//   } catch (error) {
//     return error;
//   }
// }
// (async () => {
//   const time = new Date().getTime();
//   console.log(await getUserData(1));
//   console.log("processed completed in:", new Date().getTime() - time, "ms");
// })();