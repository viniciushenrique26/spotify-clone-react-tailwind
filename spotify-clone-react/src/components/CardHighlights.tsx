import PlayIcon from '../assets/playIcon.svg'
export function CardHighlight(){
    return ( 
        <div className="p-4  bg-zinc-900 flex flex-col gap-2 h-64 rounded-lg group relative hover:bg-zinc-800 transition"> 
            
                <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="album" className="w-36 object-cover rounded-md "/>  
                <button className='absolute top-28 right-0 w-8 h-8 shadow-xl flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible group-hover:animate-fade'>
                    <img src={PlayIcon} className='size-4'alt="" />
                </button>
            
            <p className="text-sm font-semibold text-zinc-100">Title</p>  
            <p className="text-xs font-medium text-zinc-500">Artista</p> 
            
        </div>
    )
}