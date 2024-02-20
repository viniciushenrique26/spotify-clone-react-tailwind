import {Home, Search, Library, Plus, ArrowRight, ChevronRight, List} from 'lucide-react'; 
import { Playlist } from './Playlist';

export function Sidebar() {
    return (
        <div className='flex flex-col gap-2 text-zinc-400 '> 
            <div className='space-y-5 bg-zinc-925 rounded-md p-6 font-bold text-sm'> 
                <a className='flex gap-4 items-center cursor-pointer text-md' >
                    <Home className='text-zinc-400 size-6 '/>
                    <span>Início</span>
                </a>
                <a className='flex gap-4 items-center cursor-pointer text-md'>
                    <Search className='text-zinc-400 size-6'/>
                    <span>Buscar</span>
                </a>
    
            </div> 
            <div className='flex flex-col   gap-2 mt-2  p-6 bg-zinc-925 rounded-md h-auto'> 
                    <div className='flex justify-between items-center '>
                        <div className='flex gap-2 items-center'> 
                            <Library className='text-zinc-400 size-6'/>
                            <span className='text-sm font-bold'>Sua Biblioteca</span>  
                        </div> 
                        <div className='flex gap-2 '> 
                            <Plus className='text-zinc-400 hover:text-zinc-50 bg-zinc-950 p-1 hover:bg-zinc-900 rounded-full size-7'/> 
                            <ArrowRight className='text-zinc-400 hover:text-zinc-50 size-7 p-1  bg-zinc-950  hover:bg-zinc-900 rounded-full'/>
                        </div>  
                    </div>

                    <div className='mt-3 items-center '> 
                        <ul className='flex  relative items-center gap-2 '>
                            <li>
                                <a href='#' className='text-zinc-300 text-xs bg-zinc-900 p-2 rounded-full '>Playlists</a>
                            </li> 
                            <li>
                                <a href='#' className='text-zinc-300 text-xs bg-zinc-900 p-2 rounded-full'>Artistas</a>
                            </li>
                            <li>
                                <a href='#' className='text-zinc-300 text-xs bg-zinc-900 p-2 rounded-full'>Álbuns</a>
                            </li>
                            {/* <li >
                                <a href='#' className='text-zinc-300 text-xs bg-gradient-to-r from-zinc-900 to-zinc-950/10 p-2 rounded-full'>Pod</a>
                            </li> */}
                            {/* <ChevronLeft className='absolute left-0 text-zinc-400 hover:text-zinc-50 size-8 p-1  bg-zinc-800  hover:bg-zinc-900 rounded-full'/>  */}
                            <ChevronRight className='absolute right-0 text-zinc-400 hover:text-zinc-50 size-8 p-1  bg-zinc-900  hover:bg-zinc-800 rounded-full'/>
                        </ul>
                    </div> 
                    <div className='flex items-center justify-between mt-1'>
                        <Search className=' text-zinc-400 hover:text-zinc-50 size-6 p-1  bg-zinc-925  hover:bg-zinc-800 rounded-full'/>  

                        <div className='flex items-center gap-px text-zinc-400 hover:text-zinc-50 mt-3'>
                            <span className='text-xs'>Recentes</span>
                            <List className='    size-7 p-1 '/> 
                        </div>

                    </div>  

                
                
                    <div className='flex flex-col gap-4  '> 
                        <Playlist 
                            name='Músicas Curtidas' 
                            image='https://misc.scdn.co/liked-songs/liked-songs-64.png' 
                            artist='Vários artistas'
                            type='Playlist'
                        /> 
                        <Playlist 
                            name='Lalaia' 
                            image='https://i.scdn.co/image/ab67616d0000b273c9c68c9c90f266a0f000bca1' 
                            artist='Arlindo Cruz' 
                            type='Álbum'
                        /> 
                        <Playlist 
                            name='Mistureba' 
                            image='https://lastfm.freetls.fastly.net/i/u/ar0/7de19893cd31990d1f3555bc3503329b.jpg' 
                            artist='Vários artistas' 
                            type='Playlist'
                        />
                        <Playlist 
                            name='Toca o coração' 
                            image='https://i.scdn.co/image/ab67616d0000b2738989e0498a9c8cffd6a3bf23' 
                            artist='Vários artistas'
                            type='Playlist'
                        />
                        <Playlist 
                            name='Perdas & Ganhos' 
                            image='https://i.scdn.co/image/ab67616d00001e0264cd3f5ee97cd49ea5768c5e' 
                            artist='Vulgo FK'
                            type='Álbum'
                        />
                        <Playlist 
                            name='Papo de UX' 
                            image='https://i.scdn.co/image/ab67656300005f1f41e6fdb39dd6cbda1db0f609' 
                            artist='Luan Mateus'
                            type='Podcast'
                        /> 
                        <Playlist 
                            name='Toca o coração' 
                            image='https://i.scdn.co/image/ab67616d0000b2738989e0498a9c8cffd6a3bf23' 
                            artist='Vários artistas'
                            type='Playlist'
                        />
                        <Playlist 
                            name='Perdas & Ganhos' 
                            image='https://i.scdn.co/image/ab67616d00001e0264cd3f5ee97cd49ea5768c5e' 
                            artist='Vulgo FK'
                            type='Álbum'
                        />
                        
                    </div>  

               
            </div> 
            

        </div> 
    )

}


