import { useState } from "react";
import { displayData } from '../firebase/myDatabase';

export default function Application(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [checkbox,setCheckbox] = useState(false);

    function getAppData(event){
       event.preventDefault();
       let date = new Date().toString();
       
       displayData({name,email,message,checkbox,date})
        
       setName('')
        setEmail('')
        setMessage('')

    }

    return (
        <div id="form-container">
            <h1>Application form</h1>
            <form onSubmit={getAppData}>
            <p>Enter name</p>
           <input className="input"
           value={name}
           onChange={(event) => setName(event.target.value)}
           type={'text'} placeholder="Enter name" required/>

           <p>Enter email</p>
           <input className="input"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           type={'text'} placeholder="Enter email" required/>

           <p>Type message</p>
           <textarea className="input"
           value={message}
           onChange={(event) => setMessage(event.target.value)}
            placeholder="Type message..."
            required
           ></textarea>

           <div className="checkbox-dev">
           <p>Private</p>
           <input checked={checkbox}
           onChange={(event) =>{
             setCheckbox(event.currentTarget.checked);
             console.log(event.currentTarget.checked)
            }}
           type="checkbox" name="checkbox" id="checkbox" />
           </div>
            <br/>
            <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}