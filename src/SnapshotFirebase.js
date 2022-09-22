import React, { useState, useEffect, Fragment } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

function SnapshotFirebase() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const arr1 = {
  //   id: "1",
  //   title: "sid",
  // };
  // console.log(arr);
  // console.log(arr[title]);
  // console.log(arr1.title);
  const ref = firebase.firestore().collection("schools");

  //REALTIME GET FUNCTION
  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        // console.log(doc.title);
      });
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
  function addSchool(newSchool) {
    for (let i = 0; i <= schools.length; i++) {
      if (title === schools[i].title) {
        alert("Asdded"); 
        break;
      }
      else{
        ref
        //.doc() use if for some reason you want that firestore generates the id
        .doc(newSchool.id)
        .set(newSchool)
        .catch((err) => {
          console.error(err);
        });
      }
    }

  }

  //DELETE FUNCTION
  function deleteSchool(school) {
    ref
      .doc(school.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editSchool(updatedSchool) {
    setLoading();
    ref
      .doc(updatedSchool.id)
      .update(updatedSchool)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Fragment>
      <h1>Schools (SNAPSHOT)</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addSchool({ title, desc, id: uuidv4() })}>
          Submit
        </button>
      </div>
      <hr />
      {loading ? <h1>Loading...</h1> : null}
      {schools.map((school) => (
        <div className="school" key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
          <div>
            <button onClick={() => deleteSchool(school)}>X</button>
            <button
              onClick={() =>
                editSchool({ title: school.title, desc, id: school.id })
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default SnapshotFirebase;
