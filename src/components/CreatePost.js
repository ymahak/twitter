import React from 'react';
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";


const CreatePost = () => {
    return (
        <div className='w-[100%] '>
            <div>
            <div className='flex items-center justify-evenly border-b border-gray-200'>
                <div className='cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3'>
                    <h1 className='font-semibold text-gray-600 text-lg chart'>For You</h1>
                </div>
                <div className='cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                </div>
            </div>
            <div>
                 <div className='flex items-center p-4'>
                    <div>
                    <Avatar src="https://imgs.search.brave.com/pMSfJNMCUq39FlPoimmEjP3Lw3Ks0hbbI07o4FLNu0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLWdp/cmwtaXMtc2l0dGlu/Zy1zY2hvb2wtZGVz/a183NDEwMi0zNDc3/LmpwZw" size="50" round={true} />
                    </div>
                    <input className='w-full outline-none border-none text-xl ml-2' type='text' placeholder='What is happening?!'/>
                 </div>
                 <div className='flex item-center justify-between p-4 border-b border-gray-200'>
                    <div>
                    <CiImageOn size="24px" />
                    </div>
                    <button className='bg-[#1098F8] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
                 </div>
            </div>
            </div>
           
        </div>
    )
}

export default CreatePost
