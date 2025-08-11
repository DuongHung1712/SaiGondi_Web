'use client';
import BackgroundBlur from "@/shared/BackgroundBlur";
import { useState } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import DestinationCard from "./DestinationCard";
import SearchBox from '@/components/ui/SearchBox';
import { Destination, destinations } from "../../assets/data/destinations";

export default function DestinationPage() {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);

    const [isOpen, setIsOpen] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    
    const checkboxChangeHandle = (option:string) => {
        setSelectedOptions((prev) => (
            prev.includes(option)
            ? prev.filter((item)=>item !== option)
            : [...prev, option]
        ))
    }

    return <>
    <div className="relative bg-white z-10 w-full mx-auto">
    <BackgroundBlur />
    <SearchBox />
    <div className="flex w-[20px] justify-start lg:hidden mb-4 ml-4">
         
         <button
         onClick={() => setIsOpen(!isOpen)}
         className="p-2 rounded-md border border-gray-300 hover:bg-gray-100"
         >
         <i className="ri-filter-3-line text-xl"></i>
         </button>
     </div>
      <div className="md:flex mb-12 ">
        {/* Header filter cho mobile */}


        {/* <div id='filter'className="flex hidden lg:block flex-col w-0 lg:w-[30%]"> */}
            <div
            id="filter"
            className={`px-8 md:w-[30%] flex-col gap-6 ${isOpen ? "flex w-full sm:w-[70vh] ml-auto" : "hidden w-0"} lg:flex`}
        >
            <h2>BỘ LỌC</h2>
            <div className="flex justify-between">
                <h6>Giá</h6>
                <i className="ri-arrow-down-wide-line"></i>
            </div>
        
            <Slider
                range
                min={0}
                max={10000000}
                value={[minPrice, maxPrice]}            
                onChange={(value) => {
                    const [min, max] = value as number[];
                    setMinPrice(min);
                    setMaxPrice(max);
                  }}
                trackStyle={{ backgroundColor: 'var(--primary)', height: 12 }}                
                handleStyle={{
                    borderColor: 'var(--primary)',
                    backgroundColor: '#fff',
                    borderWidth: 2,
                    height: 20,
                    width: 20,
                    marginTop: -4,
                  }}
                  railStyle={{ backgroundColor: '#e5e5e5', height: 12 }}

                  handleRender={(node, handleProps) => (
                    <Tooltip
                    //   overlay={`${handleProps.value.toLocaleString()} VND`}
                    // overlay={`${Math.round(handleProps.value / 10000) * 10000} VND`}
                    overlay={`${(Math.round(handleProps.value / 10000) * 10000).toLocaleString('vi-VN')} VND`}

                      visible={handleProps.dragging}
                      placement="top"
                      overlayInnerStyle={{
                        fontSize: 12,
                        padding: '4px 8px',
                        color: '#000',
                        background: "#fff",
                      }}
                      overlayClassName="!z-50"
                    >
                      {node}
                    </Tooltip>
                  )}
            />

            <span className="block h-px overflow-hidden bg-gray-400 origin-top scale-y-20 lg:my-8"/>

            <h4>Xếp hạng</h4>
            <div className="flex gap-2 lg:gap-4 lg:mt-4">
                <div className="border h-6 w-6 p-4 flex items-center justify-center rounded-[4px] border-[#8DD3BB]">0+</div>
                <div className="border h-6 w-6 p-4 flex items-center justify-center rounded-[4px] border-[#8DD3BB]">1+</div>
                <div className="border h-6 w-6 p-4 flex items-center justify-center rounded-[4px] border-[#8DD3BB]">2+</div>
                <div className="border h-6 w-6 p-4 flex items-center justify-center rounded-[4px] border-[#8DD3BB]">3+</div>
                <div className="border h-6 w-6 p-4 flex items-center justify-center rounded-[4px] border-[#8DD3BB]">4+</div>
            </div>
            <span className="block h-px overflow-hidden bg-gray-400 lg:my-8 origin-top scale-y-20"/>


            <h4>Dịch vụ nổi bật</h4>
            <div className="flex flex-col">
                {['Free breakfast',  'Free parking',  'Wi-Fi',  'Swimming Pool',  'Gym',].map((option)=> (
                    <label key={option}>
                        <input type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={()=>checkboxChangeHandle(option)}/>
                        {option}
                    </label>
                ))}
            </div>
            
            <span className="block h-px overflow-hidden bg-gray-400 lg:my-8 origin-top scale-y-20"/>
            <h4>Tiện ích</h4>
            <div className="flex flex-col">
                {['Free breakfast',  'Free parking',  'Wi-Fi',  'Swimming Pool',  'Gym',].map((option)=> (
                    <label key={option}>
                        <input type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={()=>checkboxChangeHandle(option)}/>
                        {option}
                    </label>
                ))}
                <button className="text-red-500 text-left mb-8">+24 more</button>
            </div>     

        </div>

        {/* <div className="flex flex-col w-full md:w-[70%] px-4"> */}
        <div className={`flex flex-col w-full  px-4  ${isOpen? "md:w-[70%]":"md: w-full"}`}>

            <div className="grid grid-cols-3 w-[90%] mx-auto md:w-full border rounded-2xl border-white shadow-[0_4px_16px_0_rgba(17,34,17,0.05) bg-white">
                <div className="flex flex-col border-r pl-4 !bg-white rounded-tl-2xl rounded-bl-2xl py-3">
                    <h4>Tất cả</h4>
                    <p>257 điểm đến</p>
                </div>
                <div className="flex flex-col border-r pl-4 !bg-white py-3 z-30">
                    <h4>Tất cả</h4>
                    <p>257 điểm đến</p>
                </div>
                <div className="flex flex-col pl-4 !bg-white py-3 rounded-tr-2xl rounded-br-2xl">
                    <h4>Tất cả</h4>
                    <p>257 điểm đến</p>
                </div>

            </div>
            <div>
                <div className="flex justify-between mt-8">
                    <h4>Hiện thị 4/257 điểm đến</h4>
                    <div className="flex">
                        <h4 className="hidden lg:block">Sắp xếp theo:</h4>
                        <select
                            className="rounded-md focus:outline-none text-sm lg:text-base"
                            defaultValue="">                    
                            <option value="" disabled>Pho bien nhat </option>
                        </select>
                    </div>   
                                
                </div>
                <div className="flex flex-col mt-8">
                    {destinations.map((destination, index)=>(
                        <div key={destination.id || index}>
                            <DestinationCard destination={destination}/>

                        </div>
                    ))}
                    
                </div>
            </div>
          
        </div>
      </div>
    </div>  
    </>
  }
  