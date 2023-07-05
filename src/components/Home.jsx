import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function validation() {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("please enter email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("please enter password");
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

export default Home;
