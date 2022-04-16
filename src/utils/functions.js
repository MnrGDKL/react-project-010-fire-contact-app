//! push info to Database
//! add info to Database
//! delete info in the Database

import firebase from "./firebase";

import { getDatabase, push, ref, set } from "firebase/database";


export const addInfoToDatabase = (info) => {
  const db = getDatabase();
  const userRef = ref(db,"/ContactInfoDB");
  const newUserRef = push(userRef);
  // set(newUserRef,{
  //   username: info.username,
  //   phoneNumber: info.phoneNumber,
  //   gender:info.gender
  // })
  set(newUserRef,info)
}

