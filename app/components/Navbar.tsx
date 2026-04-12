import {Settings, History} from 'lucide-react'
export default function Navbar (){
    return (
    <div className="h-16 -mx-8 -my-4 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-glow"> Jobpulse </h1>
        <div className="flex gap-x-4">
            <button className='cursor-pointer'> <History /> </button>
            <button className='cursor-pointer'> <Settings/> </button>
        </div>
    </div>
    )
}