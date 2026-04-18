import {Plus, Minus} from 'lucide-react'
export default function Hero (){
    return (
        <>
         <div className="w-full h-fit bg-surface/20 flex flex-col gap-y-12 justify-center items-center 
                        rounded mt-4 mb-8 py-16 border border-purple-600/30 shadow-[var(--glow-white-soft)]">
            <div className="text-xl"> Total Applications </div>
            <div className="text-9xl font-extrabold"> 14 </div>
            <div className="flex gap-x-12">
                <button className='h-12 w-12 flex justify-center items-center rounded-lg border hover:bg-purple-300/15 hover:cursor-pointer'> <Plus/> </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-lg border'> <Minus/> </button>
            </div>
        </div>
         {/* quick add section */}
        <div className='mb-4 text-lg'> Quick Add </div>
        <div className='w-full h-40 flex items-center gap-y-12 bg-background/50 rounded px-8 py-4 border border-purple-600/30
                        shadow-[var(--glow-white-soft)]'>
            <div className='flex-3 flex flex-col gap-y-2'>
                <div className='uppercase text-sm tracking-wide'> Job Title </div>
                <input type="text" placeholder='Enter job tilte' className='w-1/2 h-8 flex justify-start'/>
            </div>
            <div className='flex-3 flex flex-col gap-y-2'>
                <div className='uppercase text-sm tracking-wider'> Company Name </div>
                <input type="text" placeholder='Enter job tilte' className='w-1/2 h-8 flex justify-start'/>
            </div>
            <div className='flex-1 flex justify-end items-center'>
                <button className='h-12 w-12 flex items-center justify-center border rounded-lg'> <Plus /> </button>
            </div>
        </div>
        </>
       
       
    )
}