import React from 'react'
import { Review, reviews } from "../../assets/data/reviews";

interface ReviewCardProps {
    review: Review;
}

const ReviewCard = ({review}:ReviewCardProps) => {
  return <>
    <div className="flex gap-6">
        <div id="user__avatar" >
            <img src={review.avatar} alt="" className='rounded-full h-20 w-20'/>             
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex items-center">
                <h6 className='border-r pr-6'>{review.rating} {review.status}</h6>
                <h6 className='pl-6'>{review.username}</h6>
            </div>
            <p>{review.ratingText}</p>
        </div>
        <i className="ri-flag-fill"></i>        
    </div>
    <span className="block h-px overflow-hidden bg-black origin-top scale-y-20 my-8"/>
</>
}

export default ReviewCard