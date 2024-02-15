import PlayIcon from '../assets/playIcon.svg'
interface CardLibraryProps { 
    name: string;  
    img: string; 
}


export function CardLibrary (props: CardLibraryProps){
    return (
        <div className=""> 
            <a href='#' className="bg-white/10 hover:bg-white/20 transition-colors items-center rounded-lg flex w-86 h-14 gap-2 group "> 
                <img src={props.img}alt="album" className="w-15 h-14 object-cover rounded-l-lg "/>
                <h3 className="text-zinc-50 text-xs font-bold">{props.name}</h3> 
                <button className='w-8 h-8 shadow-xl flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                    <img src={PlayIcon} className='size-4'alt="" />
                </button>

            </a>
            
        </div>
    )
}