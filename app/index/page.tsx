// page.tsx
'use client'

import Image from 'next/image'
import BgImg from 'app/image/background.jpg';
import React from "react";
import Clock from './clockPage';
import ClockSeconds from './clockSecondsPage';
import Slider from './Slider';
// import Setting from './setting';
import { useEffect, useState } from "react";

const ClockApp: React.FC = (props) => {
   const now = new Date()
   const width = window.innerWidth;
   const initialValueSize = Math.round((width - 320) / 8 + 16)
   const [size, setSize] = useState(initialValueSize);
   const [isShadow, setIsShadow] = useState(false);
   const [isSecond, setIsSecond] = useState(false);
   useEffect(() => {
      setSize(Math.round((width - 320) / 8 + 16));
   }, [width]);




   return (
      <div className='h-screen w-screen place-content-center bg-gradient-to-t'>
         <div className='flex'>
            <div className='fixed object-left-bottom w-fit h-auto min-w-1/3 p-10 bg-[#6572AB] bg-opacity-75 z-10 border-solid border rounded-2xl' >
               <div>
                  <h1 className='m-1 text-xl font-bold'>設定</h1>
                  <div>
                     <label>フォントサイズ: {size}</label>
                     <div className="App">
                        <div>
                           <Slider />
                        </div>
                     </div>
                  </div>
                  <div className='flex m-1'>
                     <input type="checkbox" checked={isShadow} onChange={(e) => setIsShadow(e.target.checked)} />
                     <div className='mx-3'>
                        <label>シャドー</label>
                     </div>
                  </div>
                  <div className='flex m-1'>
                     <input type="checkbox" checked={isSecond} onChange={(e) => setIsSecond(e.target.checked)} />
                     <div className='mx-3'>
                        <label>秒</label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className='flex itms-center justify-center gap-4 mt-10'>
            <li>
               <button onClick={() => setSize(size - 4)} className='py-2 px-6 rounded shadow bg-[#333333] text-white hover:bg-[#222222]'>
                  Decrease Font Size
               </button>
            </li>
            <li>
               <button onClick={() => setSize(size + 4)} className='py-2 px-6 rounded shadow bg-[#333333] text-white hover:bg-[#222222]'>
                  Increase Font Size
               </button>
            </li>
         </div> */}

         <div className='flex place-content-center object-center mt-5 text-[#FFF]'>
            <div style={{ fontSize: size }} className='flex-row justify-between drop-shadow'>
               <Clock time={now.getTime()} />
               <div style={{ fontSize: size / 2 }}>
                  <ClockSeconds time={now.getTime()} />
               </div>
            </div>
         </div>

         <div className='z-[-1] fixed top-0 left-0 w-full h-screen'>
            <Image src={BgImg} alt='background image of this clock app' layout='fill' objectFit='cover' />
         </div>
         <div className='z-[-1] fixed top-0 left-0 w-full h-screen bg-black opacity-25' />
      </div>
   );
}

export default ClockApp;
