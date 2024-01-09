// page.tsx
'use client'

import Image from 'next/image'
import BgImg from 'app/image/background.jpg';
import React from "react";
import Clock from './clockPage';
import ClockSeconds from './clockSecondsPage';
// import Slider from './Slider';
// import Setting from './setting';

import { useEffect, useState } from "react";
import CheckChange from "./CheckChange";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { FaBars } from 'react-icons/fa'; // Example using Font Awesome icon
import { MdClose } from 'react-icons/md'; // Material Design icon



const ClockApp: React.FC = (props) => {
   const now = new Date()
   const width = window.innerWidth;
   const initialValueSize = Math.round((width - 320) / 8 + 16)
   const [size, setSize] = useState(initialValueSize);
   const [maxSize, setMaxSize] = useState(initialValueSize);
   const [isShadow, setIsShadow] = useState(false);
   const [isSecond, setIsSecond] = useState(true);
   useEffect(() => {
      setSize(Math.round((width - 320) / 8 + 16));
   }, [width]);
   useEffect(() => {
      setMaxSize(Math.round((width - 320) / 2 - 16));
   }, [width]);
   // ↑親コンポーネントで使う：textの初期値とtextを更新する関数を宣言
   // ↓子コンポーネントから受け取った値で親コンポーネントのtextを更新する関数A
   const handleValueChange = (newValue: any) => {
      setSize(newValue);
   };

   const [value, setValue] = useState(size);
   const [min, setMin] = useState(20);

   const [isOpen, setIsOpen] = useState(false);


   const handleOpenModal = () => {
      setIsOpen(true);
   }

   const handleCloseModal = () => {
      setIsOpen(false);
   }


   return (
      <div className='h-screen w-screen place-content-center bg-gradient-to-t'>
         <div className='flex justify-center items-center h-screen'>
            {/* 変更点: 設定を右上に配置する */}
            <div>
               <button className='fixed m-4 top-0 right-0 text-3xl text-white' onClick={handleOpenModal} aria-label="Open Settings">
                  <FaBars />
               </button>
               {isOpen && (
                  <Modal show={true} onHide={handleCloseModal}>

                     <div className={`fixed m-4 top-0 right-0 w-1/4 max-w-xs h-auto  p-10 bg-[#6572AB] bg-opacity-75 z-10 border-solid border rounded-2xl`}>
                        <button className='fixed m-4 top-4 right-4 text-3xl text-white' onClick={handleCloseModal} aria-label="Open Settings">
                           <MdClose />
                        </button>
                        <h1 className='m-1 text-xl font-bold tabular-nums'>設定</h1>
                        <div>
                           <label>フォントサイズ: {size}</label>
                           <div className="App">
                              <div>
                                 <Form>
                                    <Form.Group>
                                       <Col>
                                          <RangeSlider
                                             value={size}
                                             onChange={(e) => setSize(Number(e.target.value))}
                                             max={maxSize}
                                             min={min}
                                             variant='warning'
                                          />
                                       </Col>
                                    </Form.Group>
                                 </Form>
                              </div>
                           </div>
                           <div className='flex my-1'>
                              <input type="checkbox" checked={isShadow} onChange={(e) => setIsShadow(e.target.checked)} />
                              <div className='mx-3'>
                                 <label>シャドー</label>
                              </div>
                           </div>
                           <div className='flex my-1'>
                              <input type="checkbox" checked={isSecond} onChange={(e) => setIsSecond(e.target.checked)} />
                              <div className='mx-3'>
                                 <label>秒</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Modal>
               )};

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

            <div className={`flex text-[#FFF] ${isShadow ? 'drop-shadow' : ''}`}>
               <div
                  style={{ fontSize: size }} className={`place-content-center object-center justify-between`}>
                  <Clock time={now.getTime()} />
                  <div style={{ fontSize: size / 2 }}>
                     {isSecond && <ClockSeconds time={now.getTime()} />}
                  </div>
               </div>
            </div>

            <div className='z-[-1] fixed top-0 left-0 w-full h-screen'>
               <Image src={BgImg} alt='background image of this clock app' layout='fill' objectFit='cover' />
            </div>
            <div className='z-[-1] fixed top-0 left-0 w-full h-screen bg-black opacity-25' />
         </div>
      </div>
   );
}

export default ClockApp;
