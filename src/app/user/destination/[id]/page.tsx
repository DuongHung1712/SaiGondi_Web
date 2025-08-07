import { destinations } from '@/app/assets/data/destinations';
import { notFound } from 'next/navigation';
import ReviewCard from '../ReviewCard';
import { Review, reviews } from "../../../assets/data/reviews";
import BackgroundBlur from "@/shared/BackgroundBlur";



interface Props {
  params: { id: string };
}

export default async function DestinationDetail({params}:Props) {

  const { id } = params;
  const destination = destinations.find((d) => d.id === params.id);  

  const filteredReviews: Review[] = reviews.filter(
    (review) => review.destinationId === id
  )
  
  if (!destination) return notFound();

  return <>  
    <div id='main__container' className=" relative flex flex-col h-full w-[90%] 2xl:w-[95%] mx-auto">
    <BackgroundBlur />
      <h4 className='mt-8'>Việt Nam<i className="ri-arrow-right-s-line"></i>Việt Nam<i className="ri-arrow-right-s-line"></i>Việt Nam</h4>
    
      <div id='des__title' className="flex justify-between mt-12 mb-8">
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row sm:gap-6 content-center" >
            <h1>{destination.name}</h1>
            <span className="flex items-center gap-1 text-red-500">
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
          </div>

          <span className='text-[var(--primary)]'><i className="ri-map-pin-fill"></i>{destination.location}</span>

          <div className="flex justify-between gap-6 mt-4">
              <div className="border flex justify-center items-center p-4 rounded-md h-4 w-6 text-[var(--primary)]">{destination.rating}</div>
              <div className='text-[var(--primary)] font-bold'>{destination.status}</div>
              <div className="text-[var(--primary)]">{destination.reviewCount} Đánh giá</div>
          </div>   
        </div>
        <div className="flex flex-col">
          <p className="text-right text-red-500 mb-2">{destination.distance}</p>
          <div className="flex gap-2">
            <i className="ri-heart-fill border border-[var(--primary)] rounded-sm h-10 w-10 items-center flex justify-center "></i>
            <i className="ri-share-fill border border-[var(--primary)] rounded-sm h-10 w-10 items-center flex justify-center "></i>
            <div className="bg-[var(--secondary)] text-white text-center items-center flex sm:p-2 text-xs sm:text-base">{destination.category}</div>
          </div>
        </div>    
      </div>

      <div id="gallery" className='grid md:grid-cols-2 gap-1'>
        <div className=" h-[504px]">
          <img src={destination.gallery[0]} alt="" className='w-full h-full object-cover rounded-tl-md rounded-bl-md'/>
        </div>
        <div className="grid grid-cols-2 gap-1  h-[500px] ">
          <div id="group__1" className='h-[500px]'>
            <img src={destination.gallery[1]} alt="" className='w-full h-1/2 object-cover mb-1' />
            <img src={destination.gallery[2]} alt="" className='w-full h-1/2 object-cover ' />
          </div>
          <div id="group__1 gap-1" className='h-[500px]'>
            <img src={destination.gallery[3]} alt=""className='w-full h-1/2 object-cover rounded-tr-md mb-1' />
            <img src={destination.gallery[4]} alt=""className='w-full h-1/2 object-cover rounded-br-md' />
          </div>
        </div>

      </div>

      <span className="block h-px overflow-hidden bg-gray-400 origin-top scale-y-20 my-8"/>
    
      <div id="intro">
          <h2 className='text-left'>GIỚI THIỆU</h2>
          <p>{destination.description}</p>
          <div className="flex mt-6 gap-2 sm:gap-6">
              <div tabIndex={0} className="flex flex-col focus:bg-[var(--primary)] cursor-pointer focus:text-white border border-(--primary) rounded-xl p-2">
                <h1 className='mb-2 sm:mb-4'>{destination.rating}</h1>
                <h4 className='hidden sm:block'>Đánh giá</h4>
                <h4 className='text-xs sm:text-base'>{destination.reviewCount} nhận xét</h4>
              </div>
              <div tabIndex={1} className="flex flex-col focus:bg-[var(--primary)] cursor-pointer focus:text-white border border-(--primary) rounded-xl p-2">
                <i className="ri-magic-fill mb-2 sm:mb-8"></i>               
                <h4 className='text-xs sm:text-base'>{destination.reviewCount} nhận xét</h4>
              </div>
              <div tabIndex={2} className="flex flex-col focus:bg-[var(--primary)] cursor-pointer focus:text-white border border-(--primary) rounded-xl p-2">
                <i className="ri-magic-fill mb-2 sm:mb-8"></i>               
                <h4 className='text-xs sm:text-base'>{destination.reviewCount} nhận xét</h4>
              </div>
              <div tabIndex={3} className="flex flex-col focus:bg-[var(--primary)] cursor-pointer focus:text-white border border-(--primary) rounded-xl p-2">
                <i className="ri-magic-fill mb-2 sm:mb-8"></i>               
                <h4 className='text-xs sm:text-base'>{destination.reviewCount} nhận xét</h4>
              </div>
              <div tabIndex={4} className="flex flex-col focus:bg-[var(--primary)] cursor-pointer focus:text-white border border-(--primary) rounded-xl p-2">
                <i className="ri-magic-fill mb-2 sm:mb-8"></i>               
                <h4 className='text-xs sm:text-base'>{destination.reviewCount} nhận xét</h4>
              </div>
          </div>
      </div>

      <span className="block h-px overflow-hidden bg-gray-400 origin-top scale-y-20 my-8"/>

      <div id="location">
        <div className="flex justify-between">
           <h1 className='mb-6'>Vị trí</h1>
           <button className='btn-primary text-sm rounded-3xl px-3'>Xem trên google map</button>
        </div>
 
        <h4 className='mb-4'>{destination.location}</h4>      
        {/* <LeafletMap position={[destination.lat, destination.lng]} /> */}
        <iframe
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${destination.lat},${destination.lng}&z=15&output=embed`}
        />
      </div>

      <span className="block h-px overflow-hidden bg-gray-400 origin-top scale-y-20 my-8"/>

      <div className="flex flex-col">
        <div className="flex justify-between ">
          <h2>ĐÁNH GIÁ</h2>
          <button className='btn-primary py-2 px-4 rounded-3xl'>Viết đánh giá</button>
        </div>
        <div className="flex gap-2">
          <h1 className='flex justify-center items-center'>{destination.rating}</h1>
          <div className="flex flex-col">
              <h2>{destination.status}</h2>
              <p>{destination.reviewCount} Lượt đánh giá</p>
          </div>
        </div>
      </div>
      <span className="block h-px overflow-hidden bg-gray-400 origin-top scale-y-20 my-8"/>

      <div id="review__container">
        {filteredReviews.map((review, index) => (
            <ReviewCard key={index} review={review}/>
        ))}
      </div>
    </div>



  </>
}
