import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='flex h-16 bg-purple-300 w-full'>
            <div className='mt-2 absolute right-5'>
            <button class=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 z-10">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    My Issues
                </span>
            </button>   
            </div>
        </div>
    )
}

export default Navbar
