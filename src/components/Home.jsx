import React from 'react'

function Home() {
  return (
    <form>
    <div className='flex flex-col items-center h-[40%]  mt-2'>
    <div className='bg-gray-100 rounded-md h-full w-[90%] sm:w-96 flex flex-col justify-center p-4 items-center'>
    
    <div className='p-2 w-full'>
    <label htmlFor='email'>Email</label>
    <br></br>
    <input className=' w-[inherit]' id="email" type='text' placeholder='email'onChange={(e)=>setemail(e.target.value)}/><br></br>
    <label htmlFor='password'>Password</label><br></br>
    <input className='w-[inherit]' id='password' type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/><br></br>
    <button className='bg-teal-500  rounded-md w-[inherit] h-8' onClick={()=>login()}>Log In</button>
    </div>
    </div>
    </div>
    </form>
  )
}

export default Home