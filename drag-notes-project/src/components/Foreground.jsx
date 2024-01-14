import { useRef } from 'react';
import Card from './Card'


export default function Foreground(){
    const data = [{
        desc: "hii i am REACT",
        title: "Download"
    },{
        desc: "hiii I am TAILWIND",
        title: "Upload"
    }]
    const  ref = useRef(null);
    return <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=> (
            <Card data ={item} constraintsRef={ref} />
        ))}
    </div>
}