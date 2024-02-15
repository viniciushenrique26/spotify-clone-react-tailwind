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
                    img="https://i.scdn.co/image/ab67616d0000b273c9c68c9c90f266a0f000bca1"
                /> 
                <CardLibrary 
                    name="Samba" 
                    img="https://lastfm.freetls.fastly.net/i/u/ar0/7de19893cd31990d1f3555bc3503329b.jpg" 
                /> 
                <CardLibrary 
                    name="Mistureba" 
                    img="https://i.scdn.co/image/ab67616d0000b2738989e0498a9c8cffd6a3bf23" 
                /> 
                <CardLibrary 
                    name="Marrom" 
                    img="https://i.scdn.co/image/ab67616d00001e0264cd3f5ee97cd49ea5768c5e" 
                /> 
                <CardLibrary 
                    name="Zecão" 
                    img="https://i.scdn.co/image/ab67656300005f1f41e6fdb39dd6cbda1db0f609" 
                />
            </div> 
            <div className=""> 
                <Highlights/>
            </div> 

        </div>
    )
}