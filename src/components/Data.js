import React, {useState, useEffect} from "react";
import { onValue, ref, getDatabase } from 'firebase/database';
import { deleteItem } from '../firebase/myDatabase';

export default function Data() {
    const [apps,setApps] = useState([]);

    useEffect(() => {
        let db = getDatabase();
        onValue(ref(db,`applications/`),(dataArray) => {
            let myArray = [];
            dataArray.forEach((data) => {
                myArray.push(data)
            })
            setApps(myArray)
        })
    },[])

   

  return <div id="data-box">
    {
        apps?.map((a,index) => (
            <div key={index}>
                <h2>{a.val().name}</h2>
                <p>{a.val().email}</p>
                <p>{a.val().message}</p>
                <button onClick={() => deleteItem(a.key)} className="delete-btn">Delete</button>
                <hr/>
            </div>
        ))
    }
  </div>
}
