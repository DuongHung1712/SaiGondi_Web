import { useRouter } from 'next/navigation';
import React from 'react'

import { Destination, destinations } from "../../assets/data/destinations";


interface Props {
    destination: Destination
}

const DesnitationCard = ({destination}: Props) => {

    const router = useRouter()
    
    const handleClick = () => {
        router.push(`/user/destination/${destination.id}`)
    }


  return (
    
    <div className="grid grid-cols-[30%_70%] mb-6 shadow-[0px_4px_16px_0px_#1122110D]" >
        <img src="https://cms.intowild.travel/storage/2024-03-13/library-media/aCi8H6Q1xK6JqNwpB2Fn0EpD3wUVyhHgyIdaMNmC.jpg" alt=""
        
         className='rounded-tl-xl rounded-bl-xl w-full h-full object-cover' />
        <div className="flex flex-col ml-4">
            <div className="flex justify-between grid-cols-[70%_30%]">
                <div className="flex flex-col space-y-2">
                    <h2>{destination.name}</h2>
                    <span className='text-[var(--primary)]'><i className="ri-map-pin-fill"></i>{destination.location}</span>
                    <div className="lg:flex justify-between">
                        <span className="flex items-center gap-1 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <i
                            key={index}
                            className={
                                index + 1 <= Math.floor(destination.rating)
                                ? 'ri-star-fill'
                                : index + 0.5 <= destination.rating
                                ? 'ri-star-half-line'
                                : 'ri-star-line'
                            }
                            />
                            ))}
                        </span>    
                        <span className='text-[var(--primary)]'><i className="ri-cup-fill"></i>{destination.serviceCount} SERVICE</span>               
                       
                            
                    </div>
                    <div className="flex justify-between gap-6">
                        <div className="border flex justify-center items-center p-4 rounded-md h-4 w-6 text-[var(--primary)]">{destination.rating}</div>
                        <div className='text-[var(--primary)] font-bold'>{destination.status}</div>
                        <div className="text-[var(--primary)] hidden md:blokc">{destination.reviewCount} Đánh giá</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-[var(--secondary)] text-white p-2">{destination.category}</div>
                    <p className='text-right'>{destination.distance}</p>                    
                </div>
            </div>
            <span className="block h-px overflow-hidden bg-black origin-top scale-y-20 my-4 lg:my-8"/>
            <div className="flex justify-between w-full">
                <i className=" p-4 w-6 ri-heart-fill border border-[var(--primary)] rounded-sm h-10 flex justify-center items-center text-[var(--secondary)]"></i>
                <button onClick={handleClick} className='btn-primary w-[70%] sm:w-[80%] h-10 rounded-3xl text-white overflow-hidden text-sm'>XEM CHI TIẾT</button>
            </div>
        </div>
    </div>

  )
}

export default DesnitationCard

