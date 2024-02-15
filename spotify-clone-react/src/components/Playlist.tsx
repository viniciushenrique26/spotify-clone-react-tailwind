import { Pin } from 'lucide-react';

interface PlaylistProps { 
    name: string;
    image: string;
    songs: number; 
    type: string;

}


export function Playlist(props: PlaylistProps) {
    return (
        <div> 
            <li className='flex gap-2 cursor-pointer'>
                <img className='w-11 h-11 rounded-sm'src={props.image} alt={props.name} /> 
                
                <div className='flex flex-col '> 
                    <h2 className='text-white text-base'>{props.name}</h2>   
                    <div className='text-xs flex items-center gap-2'>
                        <span><Pin className='text-lime-500 w-[12px]'/></span> 
                        <span>{props.type}</span>  
                        <div className='bg-zinc-500 p-[2px] rounded-full '></div>
                        <span>{props.songs} músicas</span>
                    </div> 
                </div>
            </li>
        </div>

    )
}