import React from 'react'
import { useNavigate } from 'react-router-dom'
import FaCertificate from 'react-icons/fa'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full flex justify-evenly shadow-md sticky top-0 z-10 bg-white'>
    <div className='flex gap-9 items-center mr-16'>
        <img src="/images/swiggy-1.png" alt="" className='h-[52px] cursor-pointer hover:transform hover:scale-105 transition-all' onClick={e=>navigate('/home')}  />
        <div className='flex gap-2 items-center' >
            <div>
            <p className='font-bold cursor-pointer text-gray-700'>Other</p>
            <div className='w-[42px] h-[2px] bg-gray-700'></div>
            </div>
            <p className='text-gray-400 font-normal text-sm cursor-pointer'>Cuttack,Odisha,India</p>
             <span className='text-orange-500 text-xl mt-1 cursor-pointer'><ion-icon name="chevron-down-outline"></ion-icon></span>
        </div>
    </div>

    <div className='flex items-center gap-16 p-6'>
       
        <div className='flex gap-2 items-center hover:text-orange-500 font-semibold text-gray-700 cursor-pointer ' onClick={e=>navigate('/search')}>
            <span className='text-xl mt-1'><ion-icon name="search-outline"></ion-icon></span>
            <span className=''><p>Search</p></span>
        </div>

        <div className='flex gap-2 items-center hover:text-orange-500 font-semibold text-gray-700 cursor-pointer ' onClick={e=>navigate('/offer')}>
            <span className='text-xl mt-1'><ion-icon name="timer-outline"></ion-icon></span>
            <span className=''><p>Offers</p></span>
            
        </div>

        <div className='flex gap-2 items-center hover:text-orange-500 font-semibold text-gray-700  cursor-pointer' onClick={e=>navigate('/help')}>
            <span className='text-xl mt-1'><ion-icon name="help-buoy-outline"></ion-icon></span>
            <span className=''><p>Help</p></span>
        </div>

        <div className='flex gap-2 items-center hover:text-orange-500 font-semibold text-gray-700 cursor-pointer' onClick={e=>navigate('/')}>
            <span className='text-xl mt-1'><ion-icon name="person-outline"></ion-icon></span>
            <span className=''><p>Sign In</p></span>
        </div>

        <div className='flex gap-2 items-center hover:text-orange-500 font-semibold text-gray-700 cursor-pointer '>
            <span className='text-xl mt-1'><ion-icon name="cart-outline"></ion-icon></span>
            <span className=''><p>Cart</p></span>
        </div>
       
    </div>
    
</div>
  )
}

export default Navbar