import React, { useState, } from "react";
import { onValue,ref, getDatabase } from 'firebase/database';

export default function Filter() {
  const [data,setData] = useState([]);

  function filterData(text){
    if (text) {
      onValue(ref(getDatabase(),`applications/`),(apps) => {
        let filteredArray = []
        apps.forEach((app) => {
          if (app.val().name.includes(text)) {
            filteredArray.push(app)
          }
        })
        setData(filteredArray)
      })
    } else {
      setData([])
    }
  }

  return <div>
    <div className="filter-box"> 

    <input onChange={(event) => filterData(event.target.value)}
    className="search-input" placeholder="Search..." />
  </div>

  {
      data?.map((d,i) => (
        <div key={i}>
          <h1>{d?.val().name}</h1>
          <p>{d?.val().email}</p>
          <p>{d?.val().message}</p>
        </div>
      ))
    }
  </div>
}
