// page.tsx をディレクトリ配下に置くことで、コイツが参照される！index.htmlっぽい働きだね
import Image from 'next/image'
import BgImg from 'app/image/background.jpg';
import React from "react"; 
import Clock from './clockPage'; 
import ClockSeconds from './clockSecondsPage'; 



const Hoge: React.FC = () => {  // HogePropsで型指定した引数をここでかくよ
   /* React.FCは関数コンポーネント(Function Component) の略 tsでは 変数名:型 みたいな感じで指定する */
const now = new Date()
   return (
      <div className='flex h-screen grid place-content-center text-[#FFF] bg-gradient-to-t'>
         <div className='flex-row justify-between'>
         <Clock time = {now.getTime()}/> 
         <ClockSeconds time = {now.getTime()}/> 
         </div>
         <div className='z-[-1] fixed top-0 left-0 w-full h-screen'>
            <Image src={BgImg} alt='background image of this clock app' layout='fill' objectFit='cover' />
         </div>
         <div className='z-[-1] fixed top-0 left-0 w-full h-screen bg-black opacity-25'>
         </div>
      </div>
   );
}

export default Hoge;  // こんな感じでエクスポート