import React, { useState } from 'react'

const Login = () => {
  const [isLogin,setIsLogin] = useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  }


  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex itmes-center justify-evenly w-[80%]'>
        <div>
        <img className='ml-5' width={"500px"} src="https://imgs.search.brave.com/3o543MSiFgbAoXqJejs-28ygqNLh0FRKUksNLQuMesk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L1R3aXR0ZXItTG9n/JUQwJUJFLTUwMHgy/ODEucG5n " alt='twitter-logo' />
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now.</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "Sign up"}</h1>
          <form className='flex flex-col w-[55%]'>
            {
              !isLogin && (<>
              <input type='text' placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1' />
              <input type='text' placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1' />
              
              </>)
            }
            
            <input type='text' placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1' />
            <input type='text' placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1' />
            <button className='bg-[#1098F8] border-none py-2 my-4 rounded-full text-lg text-white'>{isLogin ? "Login" : "Create Account"}</button>
            <h1>{isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'> {isLogin ? "Sign in" : "Login"}</span> </h1>       
            </form> 
        </div>
      </div>
    </div>
  )
}

export default Login
