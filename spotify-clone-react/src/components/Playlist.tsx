
import { DrawingPinFilledIcon } from '@radix-ui/react-icons';

interface PlaylistProps { 
    name: string;
    image: string;
    artist: string; 
    type: string;

}


export function Playlist(props: PlaylistProps) {
    return (
        <div> 
            <li className='flex gap-2 cursor-pointer'>
                <img className='w-11 h-11 rounded-sm'src={props.image} alt={props.name} /> 
                
                <div className='flex flex-col '> 
                    <h2 className='text-white text-xs font-semibold'>{props.name}</h2>   
                    <div className='text-[10px] font-medium flex items-center gap-2'>
                        <span><DrawingPinFilledIcon className='text-lime-500 w-[12px]'/></span> 
                        <span>{props.type}</span>  
                        <div className='bg-zinc-500 p-[2px] rounded-full '></div>
                        <span>{props.artist}</span>
                    </div> 
                </div>
            </li>
        </div>

    )
}