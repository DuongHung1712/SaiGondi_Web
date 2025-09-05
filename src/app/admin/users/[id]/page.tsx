"use client";
import useFetch from '../../hooks/useFetch';
import {User} from '@/types/user'
import { BASE_URL } from '../../utils/config';
import { useParams } from 'next/navigation';


interface UserResponse {
    success: boolean;
    user: User;
  }

export default function ProfilePage() {

    const params = useParams();
    const id = params?.id;

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') ?? undefined : undefined;
  
    const {data, loading, error} = useFetch<UserResponse>(`${BASE_URL}/admin/users/${id}`,token)
    const user = data?.user;

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return <>    
        <div className="flex flex-col">
            <div className="flex flex-col my-12 mx-6">
                <div id="title">
                <h1>Tài khoản Người dùng</h1>
                <div className="flex justify-between items-end ">
                    <div id="group__1" className='flex'>
                        <h4 className='text-(--primary)'>Admin</h4>
                        <i className="ri-arrow-right-s-line"></i>
                        <h4 className='text-(--primary)'>Quản lý tài khoản</h4>
                        <i className="ri-arrow-right-s-line"></i>
                        <h4 >Tài khoản người dùng</h4>
                    </div>   
                    <button className="flex btn-primary text-white gap-2 p-2 rounded-md">
                        <i className="ri-add-line"></i>
                        <h4>Khoá tài khoản</h4>
                    </button>           
                </div>
            </div>
            </div>

            <div id='bottom__section' className="grid grid-cols-1 md:grid-cols-[30%_70%] w-[92%] mx-auto items-start">        
                <div id='left__container' className='bg-white border border-[#E0E2E7] rounded-sm shadow-[0px_2px_2.67px_0px_#1018281A]'>
                    <div id="img__container" className="flex flex-col relative  m-1 rounded-sm">
                        <img src={user?.avatar || 'https://i.pinimg.com/1200x/e1/1e/07/e11e07774f7fc24da8e03e769a0f0573.jpg' } alt="" className='h-40 w-full object-cover' /> 
                        <img src={user?.avatar || 'https://i.pinimg.com/1200x/e1/1e/07/e11e07774f7fc24da8e03e769a0f0573.jpg'} alt="" className='rounded-full h-20 w-20 absolute left-1/2 -translate-x-1/2 -bottom-10 bg-gray-400 border-4 border-white z-10'/>   
                    </div>

                    <div className="flex mt-12 justify-center gap-2 items-center">
                            <h2>{user?.firstName +  ' ' + user?.lastName}</h2>
                            <span className='block p-1 bg-[#EFEFFD] text-(--primary) px-1 rounded-3xl'>{user?.badges}</span>
                    </div> 

                    <span className="block h-px overflow-hidden bg-gray-400 my-8 origin-top scale-y-20"/>

                    <div className="flex gap-4 items-center w-[95%] mx-auto mt-4">
                        <i className="ri-phone-line h-8 w-8 flex items-center justify-center text-[#667085] bg-[#E0E2E7] rounded-full text-lg border border-4 border-[#F0F1F3]"></i>
                        <div className='flex-1'>
                            <div className="flex justify-between">
                                <h4 className='text-[#4D5464]'>User-ID</h4>
                                <button className='bg-[#EFEFFD] text-[#00000033] rounded-3xl px-1'>Chỉnh sửa</button>
                            </div>                        
                            <span>{user?._id}</span>
                        </div>                 
                    </div>

                    <div className="flex gap-4 items-center w-[95%] mx-auto mt-4">
                        <i className="ri-mail-line h-8 w-8 flex items-center justify-center text-[#667085] bg-[#E0E2E7] rounded-full text-lg border border-4 border-[#F0F1F3]"></i>
                        <div className='flex-1'>
                            <div className="flex justify-between">
                                <h4 className='text-[#4D5464]'>Email</h4>
                                <button className='bg-[#EFEFFD] text-[#00000033] rounded-3xl px-1'>Chỉnh sửa</button>
                            </div>                        
                            <span>{user?.email}</span>
                        </div>                 
                    </div>

                    <div className="flex gap-4 items-center w-[95%] mx-auto mt-4">
                        <i className="ri-phone-line h-8 w-8 flex items-center justify-center text-[#667085] bg-[#E0E2E7] rounded-full text-lg border border-4 border-[#F0F1F3]"></i>
                        <div className='flex-1 mb-4'>
                            <div className="flex justify-between ">
                                <h4 className='text-[#4D5464]'>Phone</h4>
                                <button className='bg-[#EFEFFD] text-[#00000033] rounded-3xl px-1'>Chỉnh sửa</button>
                            </div>                        
                            <span>{user?.phone}</span>
                        </div>                 
                    </div>
                    
                </div>    

                <div id="info__container">
                    <div id="card__groud" className='grid grid-cols-3 w-full justify-between gap-3 lg:gap-6 p-4 mb-6'>
                        <div className="flex flex-col p-4 bg-white border border-[#E0E2E7] rounded-md shadow-[0px_2px_2.67px_0px_#1018281A] ">
                            <i className="ri-navigation-line rotate-90 h-8 w-8 flex items-center justify-center text-[#0D894F] bg-[#CFE7DC] rounded-full text-lg border border-4 border-[#E7F4EE]"></i>
                            <span className='text-[#667085] h-[72px] sm:h-[24px]'>Điểm đến</span>
                            <span>{user?.points}</span>
                        </div>
                        <div className="flex flex-col p-4 bg-white border border-[#E0E2E7] rounded-md shadow-[0px_2px_2.67px_0px_#1018281A]">
                            <i className="ri-file-text-fill h-8 w-8 flex items-center justify-center text-[#E46A11] bg-[#FAE1CF] rounded-full text-lg border border-4 border-[#FDF1E8]"></i>
                            <span className='text-[#667085] h-[72px] sm:h-[24px]'>Bài viết</span>
                            <span>{user?.points}</span>
                        </div>
                        <div className="flex flex-col p-4 bg-white border border-[#E0E2E7] rounded-md shadow-[0px_2px_2.67px_0px_#1018281A]">
                            <i className="ri-verified-badge-line h-8 w-8 flex items-center justify-center text-(--primary) bg-[#DEDEFA] rounded-full text-lg border border-4 border-[#EFEFFD]"></i>
                            <span className='text-[#667085] h-[72px] sm:h-[24px]'>Bài đánh giá</span>
                            <span>{user?.points}</span>
                        </div>
                    </div>

                    <div id="post__container" className='m-4 border border-[#E0E2E7] shadow-[0px_2px_2.67px_0px_#1018281A] p-4' >
                        <div className="flex justify-between w-[95%] mx-auto">
                            <h4>Bài đăng gần đây</h4>
                            <div className="flex justify-center items-center px-2 border border-[#E0E2E7] rounded-xl">
                                <i className="ri-sound-module-line"></i>
                            </div>
                        </div>
                        {/* Noi de gan bang post cua user */}
                        {/* <PostTable data={posts.filter(p => p.username === params.id)} /> */}
                        {/* <PostTable data={posts.filter(p => p.username === 'user_1')} currentUserId={params.id} /> */}

                    </div>
                </div>
            </div>
        </div>
    
    </>
}