// page.tsx をディレクトリ配下に置くことで、コイツが参照される！index.htmlっぽい働きだね
import Image from 'next/image'
import BgImg from 'app/image/background.jpg';


const Hoge: React.FC = () => {  // HogePropsで型指定した引数をここでかくよ
   /* React.FCは関数コンポーネント(Function Component) の略 tsでは 変数名:型 みたいな感じで指定する */
   return (

      <div className='relative h-screen grid place-content-center text-[#FFF] text-7xl bg-gradient-to-t'>
         <h1>23:05</h1>
         <div className='z-[-1] fixed top-0 left-0 w-full h-screen'>
            <Image src={BgImg} alt='background image of this clock app' layout='fill' objectFit='cover' />
         </div>
         <div className='z-[-1] fixed top-0 left-0 w-full h-screen bg-black opacity-25'>
         </div>
      </div>


   );
}

export default Hoge;  // こんな感じでエクスポート