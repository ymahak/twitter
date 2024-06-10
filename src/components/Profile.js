import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
      <div>
        <div className='flex items-center py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <IoIosArrowRoundBack size="24px" />
          </Link>
          <div className='ml-2'>
            <h1 className='font-bold text-lg'>Mahak</h1>
            <p className='text-gray-500 text-sm'>10 posts </p>
          </div>
        </div>
        <img src='https://imgs.search.brave.com/lX5XOtiO-eCPmQgTambkHjGlcnHtJ29d5y-AY5YHqCo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTUwNjY5MzEtNDM2/NWQxNGJhYjhjP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tm54OFkyOWth/VzVuZkdWdWZEQjhm/REI4Zkh3dw.jpeg' alt='banner' />
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
          <Avatar src="https://imgs.search.brave.com/pMSfJNMCUq39FlPoimmEjP3Lw3Ks0hbbI07o4FLNu0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLWdp/cmwtaXMtc2l0dGlu/Zy1zY2hvb2wtZGVz/a183NDEwMi0zNDc3/LmpwZw" size="120" round={true} />
        </div>
        <div className='text-right m-4'>
          <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
        </div>
        <div className='m-4'>
          <h1 className='font-bold text-xl'>Mahak</h1>
          <p>@yadavmahak</p>
        </div>
        <div className='m-4 text-sm'>
          <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
