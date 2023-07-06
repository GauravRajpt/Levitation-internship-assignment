import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  document.getElementById('logout').classList.add('hidden')

  useEffect(()=>{
    localStorage.clear();
  },[])

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isauthenticate, setisauthenticate]= useState(false);

  function proceedtoLogin(e) {
    e.preventDefault();
    if (validation() === true) {
      fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })  
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.authToken){
            localStorage.setItem("authToken",data.authToken);
            setisauthenticate(true);
      
            navigate("/form")
            
          }
          if(!data.authtoken){
            if(data.message==='Unable to locate var: users.password'){
              toast.warning('invalid credential');
            }
            else{
              toast.warning(data.message);
            }
          }
          
        })
        .catch((err) => {
          console.log(err);
        
        });
    }
  }
  if(isauthenticate){
    navigate("/form")
  }
  function validation() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("please enter email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("please enter password");
    }
    if(!emailRegex.test(email) && email){
      result= false;
      toast.warning("please enter valid email")
    }
    return result;
  }

  

  return (
    <form onSubmit={(e) => proceedtoLogin(e)}>
      <div className="flex flex-col items-center h-[40%]  mt-2">
        <div className="bg-gray-100 rounded-md h-full w-[90%] sm:w-96 flex flex-col justify-center p-4 items-center">
          <div className="p-2 w-full">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              className=" w-[inherit] p-2 focus:outline-none"
              id="email"
              type="text"
              placeholder="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              className="w-[inherit] p-2 focus:outline-none"
              id="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button
              className="bg-teal-500 hover:bg-teal-400 text-xl rounded-md w-[inherit] h-8 mt-4"
              
            >
              Log In
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
