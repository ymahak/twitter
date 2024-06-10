import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { IoBookmarks } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';


const LeftSidebar = () => {
  return (
    <div className='w-[20%] '>
      <div>
        <div>
            <img className='ml-3' width={"50px"} src="https://imgs.search.brave.com/3o543MSiFgbAoXqJejs-28ygqNLh0FRKUksNLQuMesk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L1R3aXR0ZXItTG9n/JUQwJUJFLTUwMHgy/ODEucG5n " alt='twitter-logo' />
        </div>
        <div className='my-10'>
            <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
            <FaHome size="25px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
            </Link>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
            <FaSearch size="25px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
            <IoMdNotifications size="25px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Notifications</h1>
            </div>
            <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
            <IoPersonCircle size="25px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </Link>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 w-full hover:cursor-pointer rounded-full'>
            <div>
            <IoBookmarks size="25px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
            <IoMdLogOut size="25px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </div>
           <button className='px-4 py-2 border-none text-md bg-[#1098F8] w-full rounded-full text-white font-bold' >Post</button>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
