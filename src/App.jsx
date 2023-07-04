import { useState } from 'react'

import './App.css'

function App() {
  const [email, setemail]= useState("");
  const [password, setPassword]= useState("");

function login(){
  console.log(email,password)
  fetch('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "email": `${email}`,
    "password": `${password}`,
  })
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

}

  return (
    <>
      <div>
      <h1>Login</h1>
      <div>
      <input type='text' placeholder='email'onChange={(e)=>setemail(e.target.value)}/><br></br>
      <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/><br></br>
      <button onClick={(e)=>login()}>login</button>
      </div>
      </div>
    </>
  )
}

export default App
