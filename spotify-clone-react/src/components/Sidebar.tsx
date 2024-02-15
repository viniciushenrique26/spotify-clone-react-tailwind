import {Home, Search, Library, Plus, ArrowRight} from 'lucide-react'; 

export function Sidebar() {
    return (
        <div className='flex flex-col gap-2 text-zinc-400'> 
            <ul className='space-y-5 bg-zinc-950 rounded-md p-6 font-bold text-xs'> 
                <li className='flex gap-4 items-center cursor-pointer text-md' >
                    <Home className='text-zinc-400 size-6 '/>
                    <span>Início</span>
                </li>
                <li className='flex gap-4 items-center cursor-pointer text-md'>
                    <Search className='text-zinc-400 size-6'/>
                    <span>Buscar</span>
                </li>
    
            </ul> 
            <div className='flex flex-col  items-center gap-2 mt-2 p-6 bg-zinc-950 rounded-md'> 
                    <div className='flex justify-between'>

                        <div className='flex gap-2 items-center'> 
                            <Library className='text-zinc-400 size-6'/>
                            <span className='text-xs font-bold'>Sua Biblioteca</span>  
                        </div> 
                        <div className='flex gap-2 items-center'> 
                            <Plus className='text-zinc-400 hover:text-zinc-50 bg-zinc-950 p-1 hover:bg-zinc-900 rounded-full size-7'/> 
                            <ArrowRight className='text-zinc-400 hover:text-zinc-50 size-7 p-1  bg-zinc-950  hover:bg-zinc-900 rounded-full'/>
                        </div>  
                    </div>

                    <div className='px-4'> 
                        <ul>
                            <li>
                                <a href='#' className='text-zinc-300 text-[11px] bg-zinc-900 p-2 rounded-full'>Playlists</a>
                            </li>
                        </ul>
                    </div>
            </div> 
            

        </div> 
    )

}


