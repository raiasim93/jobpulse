"use client"
import {Plus, Minus} from 'lucide-react';
import { useState } from 'react';
export default function Hero (){
    const [count, setCount] = useState(0);
    return (
        <>
        
         <div className="w-full h-fit bg-surface/20 flex flex-col gap-y-12 justify-center items-center 
                        rounded mt-4 mb-8 py-16 border border-purple-600/30 shadow-[var(--glow-white-soft)]">
            <div className="text-xl"> Total Applications </div>
            <div className="text-9xl font-extrabold"> {count} </div>
            <div className="flex gap-x-12">
                <button onClick={()=> setCount(prev => prev + 1)} className='h-12 w-12 flex justify-center items-center rounded-lg border hover:bg-purple-300/15 hover:cursor-pointer'> <Plus/> </button>
                <button onClick={()=> setCount(prev => prev - 1)} className='h-12 w-12 flex justify-center items-center rounded-lg border hover:bg-purple-300/15 hover:cursor-pointer'> <Minus/> </button>
            </div>
        </div>
         {/* quick add section */}
        <div className='mb-4 text-lg'> Quick Add </div>
        <div className='w-full h-40 flex items-center gap-y-12 gap-x-4 bg-background/50 rounded px-8 py-4 border border-purple-600/30
                        shadow-[var(--glow-white-soft)]'>
            <div className='flex-3 flex flex-col gap-y-2'>
                <div className='uppercase text-xs tracking-wide'> Job Title </div>
                <input type="text" placeholder='Enter job tilte' className='w-full lg:w-1/2 h-8 flex justify-start'/>
            </div>
            <div className='flex-3 flex flex-col gap-y-2'>
                <div className='uppercase text-xs tracking-wider'> Company Name </div>
                <input type="text" placeholder='Enter job tilte' className='w-full lg:w-1/2 h-8 flex justify-start'/>
            </div>
            <div className='flex-1 flex justify-end'>
                <button className='h-8 w-8 flex items-center justify-center border rounded-lg hover:bg-purple-300/15 hover:cursor-pointer'>
                 <Plus size={20}/> 
                </button>
            </div>
        </div>
        </>
       
       
    )
}