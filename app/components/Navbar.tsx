import {Settings, History} from 'lucide-react'
export default function Navbar (){
    return (
    <div className="h-20  flex justify-between items-center">
        <h1 className="text-2xl text-glow"> Jobpulse </h1>
        <ul className='flex gap-x-4'>
            <li className='underline underline-offset-8 decoration-white decoration-2'> Counter </li>
            <li> Insights </li>
            <li> Profile </li>
        </ul>
        <div className="flex gap-x-4">
            <button className='cursor-pointer'> <History /> </button>
            <button className='cursor-pointer'> <Settings/> </button>
        </div>
    </div>
    )
}