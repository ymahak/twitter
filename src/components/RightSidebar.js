import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

const RightSidebar = () => {
  return (
    <div className='w-[25%]  '>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none '>
        <CiSearch size="20px" />
        <input type='text' className='bg-transparent outline-none px-2' placeholder='Search'/>
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to Follow</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
            <Avatar src="https://imgs.search.brave.com/pMSfJNMCUq39FlPoimmEjP3Lw3Ks0hbbI07o4FLNu0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLWdp/cmwtaXMtc2l0dGlu/Zy1zY2hvb2wtZGVz/a183NDEwMi0zNDc3/LmpwZw" size="50" round={true} />
            </div>
          <div className='ml-2'>
            <h1 className='font-bold'>Mahak</h1>
            <p className='text-sm'>@yadavmahak</p>
          </div>
          </div>
          <div>
          <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
