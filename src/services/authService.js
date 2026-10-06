import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import{ auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { CreateStudentProfile } from "./studentService"; 


export async function signUp(userData) {
  try {
    const { fullName, email, password } =  userData;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: fullName });

    await CreateStudentProfile(userCredential.user);
    console.log("Account created:", userCredential.user)
    
    return userCredential.user
  } catch (error) { 
    console.error(error.message);
    throw error;
  }
}

export async function LoginAuth(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password) 
    console.log('Logged in:', userCredential)
    return userCredential.user
    
  } catch (error) {
    console.error(error.message)
  }
}
 

export async function LogOutUser() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error.message)
  }
}













// import { get, post } from "./api";

// export async function signUp(userData) {
//   const users = await get("/users")
//   const emailExists = users.some( (user)=> user.email === userData.email );
//   if(emailExists){
//     throw new Error("Email already registered. PLease try a new email adddress");
//   };
  
//   const newUser = {
//     ...userData,
//     role: "student"
//   }

//   const response = await post(newUser)

//   return response
   
// }

// export async function LoginAuth(email, password) {
//  const users = await getUsers();
//  const user = users.find((user) => user.email === email && user.password === password);

//  if (!user) {
//   throw new Error("Invalid Email or Password")
//  }

//  return user
// }

// export async function getUsers() {
//     return get()
// }

