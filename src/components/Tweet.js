import React from 'react';
import Avatar from 'react-avatar';
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";


const Tweet = () => {
  return (
    <div className='border-b border-gray-200' >
      <div>
        <div className='flex p-4'>
        <Avatar src="https://imgs.search.brave.com/pMSfJNMCUq39FlPoimmEjP3Lw3Ks0hbbI07o4FLNu0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLWdp/cmwtaXMtc2l0dGlu/Zy1zY2hvb2wtZGVz/a183NDEwMi0zNDc3/LmpwZw" size="50" round={true} /> 
        <div className='ml-2 w-full'>
        <div className='flex items-center'>
            <h1 className='font-bold'>Mahak</h1>
            <p className='text-gray-500 text-sm ml-1'>@yadavmahak  .1m</p>
        </div>
        <div>
            <p>Hello developers lets connect and grow together.</p>
        </div>
        <div className='flex justify-between my-3'>
          <div className='flex  items-center'>
            <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
            <GoComment size="18px" />
            </div>
          <p>0</p>
          </div>
          <div className='flex items-center'>
            <div className='p-2 hover:bg-red-200 rounded-full cursor-pointer'>
            <CiHeart size="20px" />
            </div>
            <p>0</p>
          </div>
          <div className='flex items-center'>
            <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer' >
            <CiBookmark size="20px" />
            </div>
            <p>0</p>
          </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Tweet
