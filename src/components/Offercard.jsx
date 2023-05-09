import React from 'react'

const Offercard = ({bank,title,desc,image}) => {
  return (
    <div className='w-[380px] h-[280px] border border-gray-300 p-7 mt-5 gap-2'>
        <div className='w-[150px] h-[37px] border flex justify-around items-center px-1 bg-[#fffae6]'>
            <img src="images/bank.png" alt="" className='h-[25px]' />
            <p className='font-semibold'>KOTAK125</p>
        </div>
        <div className='text-left mt-3'>
            <h1 className='font-semibold'>Get 20% discount using Kotak Bank Cards</h1>
            <p className='text-[13px] text-gray-500 mt-2'>Maximum discount up to ₹125 on orders above ₹500</p>
        </div>

        <div className='text-blue-500 font-bold flex items-center mt-2 text-left g'>
            <span className='text-xl font-bold mt-1'><ion-icon name="add"></ion-icon></span>
            <span className='text-[13px]'><p>MORE</p></span>
        </div>

        <div className='mt-3 w-[120px] p-2 border border-orange-500 cursor-pointer hover:shadow-lg'>
          <p className='uppercase text-[14px] font-semibold text-orange-500'>copy code</p>
        </div>
    </div>
  )
}

export default Offercard