import './config';
import { push, ref, getDatabase, remove } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword,
signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
let db = getDatabase();

export function displayData(data){
    console.log(data)
    push(ref(db,`applications/`),data)
}

export function deleteItem(key){
    remove(ref(db,`applications/${key}`))
}

// login, signup va forget password
export async function RegisterUser(username,email,password){
    try {
        createUserWithEmailAndPassword(getAuth(),email,password)
        .then(() => {
            console.log('user registered successfully')
            push(ref(getDatabase(),`users/`),{
                username,
                email,
                date:new Date().toString()
            })
        })
        .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export function LogUserIn(email,password){
    signInWithEmailAndPassword(getAuth(),email,password)
    .then(() => console.log('login success'))
    .catch((err) => console.log(err))
}

export function logOut(){
    signOut(getAuth())
}