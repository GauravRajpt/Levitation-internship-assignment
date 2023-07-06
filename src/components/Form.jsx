import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Form() {
 
  const navigate= useNavigate();
  useEffect(()=>{
const storage= localStorage.getItem("authToken");
if(storage==='' || storage===null){
  navigate("/");
  
  }const logout= document.getElementById('logout')
  logout.classList.remove('hidden');
},[])
  
  return (
    <div>Form</div>
  )
}

export default Form;