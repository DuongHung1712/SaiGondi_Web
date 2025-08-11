import React from 'react'
import { PiIdentificationBadge } from "react-icons/pi";




const SideBar = () => {
  return (
    <div className="flex flex-col my-6 justify-center  w-[90%] mx-auto">
        <img src="/logo.svg" alt="" className='w-[70%] flex justify-center'/>
        
        <div id="card__group" className='mt-6'>

            <button className='flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl py-2 mb-2'>
              <i className="ri-pie-chart-line  h-8 w-8 mr-2"></i>
                Dashboard
            </button>

            <button className='flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl  py-2 mb-2'>
              <i className="ri-shopping-bag-4-line h-8 w-8 mr-2"></i>
                Địa điểm
            </button>
            
            <button className='flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl py-2 mb-2'>
              <i className="ri-folder-6-line h-8 w-8 mr-2"></i>
                Danh mục
            </button>

            <button className='flex flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl  py-2 mb-2'>
              {/* <i className="ri-pie-chart-fill h-8 w-8 mr-2"></i> */}
              <PiIdentificationBadge className="ri-pie-chart-fill h-6 w-6 text-left mr-2 p-0 m-0" />
              Đánh giá
            </button>

            <button className='flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl py-2 mb-2'>
              <i className="ri-id-card-line h-8 w-8 mr-2"></i>
              Người dùng
            </button>

            <button className='flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl py-2 mb-2'>
              <i className="ri-team-line h-8 w-8 mr-2"></i>
              Bài viết
            </button>

            <button className='flex-1 text-left w-full rounded-3xl focus:bg-[#0000000A] hover:bg-[#0000000A] pl-2 text-xl py-2 mb-2'>
              <i className="ri-news-line h-8 w-8 mr-2"></i>
              Blog
            </button>



            
        </div>
    </div>
  )
}

export default SideBar