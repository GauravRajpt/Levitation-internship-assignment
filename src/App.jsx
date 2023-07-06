import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

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
    <div className='h-[90vh]'>
    <nav className='bg-teal-500 justify-between flex'>
    <div className='flex justify-between w-full'>
    <h1 className='text-3xl m-2 font-bold'>Levitation</h1>
    <Link  to="/"><button className='hidden rounded-md bg-gray-100 ' id="logout" >Logout</button></Link>
    </div>
    </nav>
    
    <Outlet/>
    
    
    </div>
  )
}

export default App
