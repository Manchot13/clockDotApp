// page.tsx をディレクトリ配下に置くことで、コイツが参照される！index.htmlっぽい働きだね
'use client'

import Image from 'next/image'
import BgImg from 'app/image/background.jpg';
import React from "react";
import Clock from './clockPage';
import ClockSeconds from './clockSecondsPage';
import Setting from './setting';
import { useState } from "react";

const ClockApp: React.FC = () => {  // HogePropsで型指定した引数をここでかくよ
   /* React.FCは関数コンポーネント(Function Component) の略 tsでは 変数名:型 みたいな感じで指定する */
   const now = new Date()
   const [size, setSize] = useState(16)
   return (
      <div className='h-screen place-content-center bg-gradient-to-t'>

      <div className='flex'>
        <Setting />
      </div>



         <div className='flex itms-center justify-center gap-4 mt-10'>
            <li>
               <button onClick={() => setSize(size + 4)} className='py-2 px-6 rounded shadow bg-[#333333] text-white hover:bg-[#222222]'>
                  Decrease Font Size
               </button>
            </li>
            <li>
               <button className='py-2 px-6 rounded shadow bg-[#333333] text-white hover:bg-[#222222]'>
                  Increase Font Size
               </button>
            </li>
         </div>

         <div className='flex place-content-center mt-5 text-[#FFF]'>
            <div className='flex-row justify-between'>
               <Clock time={now.getTime()} /> {/* 時刻の場所 */}
               <ClockSeconds time={now.getTime()} /> {/* 秒の場所 */}
            </div>
         </div>

         <div className='z-[-1] fixed top-0 left-0 w-full h-screen'>
            <Image src={BgImg} alt='background image of this clock app' layout='fill' objectFit='cover' />
         </div>
         <div className='z-[-1] fixed top-0 left-0 w-full h-screen bg-black opacity-25'>
         </div>
      </div>
   );
}

export default ClockApp;  // こんな感じでエクスポート