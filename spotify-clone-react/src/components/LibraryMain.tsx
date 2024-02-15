import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardLibrary } from "./CardLibrary";
import { Highlights } from "./Highlights";

export function LibraryMain () {
    return ( 
        <div className="flex flex-col gap-10 ">

            <div className="flex items-center gap-6 ">
                <button className="size-6">
                    <ChevronLeft className='text-zinc-400 hover:text-zinc-50 size-8 p-1  bg-black/40 cursor-not-allowed  rounded-full'/> 
                </button> 
                <button className="size-6"> 
                    <ChevronRight className='text-zinc-400 hover:text-zinc-50 size-8 p-1  bg-black/40 cursor-not-allowed  rounded-full'/>
                </button>
            </div> 
            <div className="grid grid-cols-3 gap-6">
                <CardLibrary 
                    name="Músicas Curtidas" 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                />
                <CardLibrary 
                    name="Lalaia" 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                /> 
                <CardLibrary 
                    name="Samba" 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png" 
                /> 
                <CardLibrary 
                    name="Mistureba" 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png" 
                /> 
                <CardLibrary 
                    name="Marrom" 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png" 
                /> 
                <CardLibrary 
                    name="Zecão" 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png" 
                />
            </div> 
            <div className=""> 
                <Highlights/>
            </div> 

        </div>
    )
}