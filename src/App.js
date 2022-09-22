import React, { useState, useEffect } from "react";
// import GetFirebase from "./GetFirebase";
import SnapshotFirebase from "./SnapshotFirebase";
import {db} from './firebase-config';
import {collection, get} from "firebase/firestore"



function App() {
  // const get = false;
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, users);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
    }
    getUsers()
  }, [])
  
  // return <Fragment>{get? <GetFirebase/> : <SnapshotFirebase/>}</Fragment>;
  return(
  <>
    {/* <SnapshotFirebase /> */}
    <div className="App">

    </div>
  </>
  )
}

export default App;
//DOCS: https://firebase.google.com/docs/firestore/
