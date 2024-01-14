import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
export default function Card(){
    return <>
    <div className='w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white p5 px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, perferendis. Eaque nostrum cupiditate atque mollitia doloremque officia asperiores repellat, voluptas modi, veritatis recusandae consequatur sint. Illo corporis distinctio nobis ut.</p>
        <div className='footer absolute bottom-0  w-full px-8 py-2 h-20 '>
            <h5>.4mb</h5>
            <LuDownload />
        </div>
    </div>
   </>
}   