import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"
export default function Card({data, constraintsRef}){
    return <>
    <motion.div 
    drag 
    dragConstraints={constraintsRef} 
    whileTap={{ scale: 1.1 }}
    dragElastic={.1}
    dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }}
    className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white  px-8 py-10 overflow-hidden p-5'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0'>
            <div className="flex items-center justify-between px-8 py-3 mb-3 ">
            <h5>.4mb</h5>
            <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center">
            <LuDownload size=".7em" color='#000'/>
            </span>
            </div>
            <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
                <h3 className="text-sm font-semibold">{data.title}</h3>
            </div>
        </div>
    </motion.div>
   </>
}   