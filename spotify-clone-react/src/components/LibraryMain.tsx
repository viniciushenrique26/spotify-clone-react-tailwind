import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardLibrary } from "./CardLibrary";
import { CardHighlight } from "./CardHighlights";


export function LibraryMain () {
    return ( 
        <div className="flex flex-col  ">
        
            <div className="flex items-center gap-6 mb-10 ">
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
           
            <section className='flex flex-col gap-2 mt-20'> 
                <div className="flex items-center justify-between">
                    <h4 className='font-semibold text-xl hover:underline'>Parecido com Arlindo Cruz</h4>  
            
                    <a href="" className="text-xs font-semibold text-zinc-500 hover:underline">Mostrar tudo</a>
            
                </div>
                <div className='flex gap-6'> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2738989e0498a9c8cffd6a3bf23"
                    title="Zeca Pagodinho"
                    artist="Zeca Pagodinho"
                /> 
                <CardHighlight 
                    img="https://lastfm.freetls.fastly.net/i/u/ar0/7de19893cd31990d1f3555bc3503329b.jpg"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                />  
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2735748491aafe583ee5add4925"
                    title="Pericles"
                    artist="Pericles"
                /> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2736819a848cb1eee4578aa7f6b"
                    title="Cartola"
                    artist="Cartola"
                /> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2737d30b59914fd3fda7b59da7b"
                    title="Exaltasamba"
                    artist="Exaltasamba"
                /> 

                </div> 
            </section>
            <section className='flex flex-col gap-2 mt-10'> 
                <div className="flex items-center justify-between">
                    <h4 className='font-semibold text-xl hover:underline'>Parecido com Arlindo Cruz</h4>  
            
                    <a href="" className="text-xs font-semibold text-zinc-500 hover:underline">Mostrar tudo</a>
            
                </div>
                <div className='flex gap-6'> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2738989e0498a9c8cffd6a3bf23"
                    title="Zeca Pagodinho"
                    artist="Zeca Pagodinho"
                /> 
                <CardHighlight 
                    img="https://lastfm.freetls.fastly.net/i/u/ar0/7de19893cd31990d1f3555bc3503329b.jpg"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                />  
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2735748491aafe583ee5add4925"
                    title="Pericles"
                    artist="Pericles"
                /> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2736819a848cb1eee4578aa7f6b"
                    title="Cartola"
                    artist="Cartola"
                /> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2737d30b59914fd3fda7b59da7b"
                    title="Exaltasamba"
                    artist="Exaltasamba"
                /> 

                </div>
            </section> 
            <section className='flex flex-col gap-2 mt-10'> 
                <div className="flex items-center justify-between">
                    <h4 className='font-semibold text-xl hover:underline'>Parecido com Arlindo Cruz</h4>  
            
                    <a href="" className="text-xs font-semibold text-zinc-500 hover:underline">Mostrar tudo</a>
            
                </div>
                <div className='flex gap-6 '> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2738989e0498a9c8cffd6a3bf23"
                    title="Zeca Pagodinho"
                    artist="Zeca Pagodinho"
                /> 
                <CardHighlight 
                    img="https://lastfm.freetls.fastly.net/i/u/ar0/7de19893cd31990d1f3555bc3503329b.jpg"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                />  
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2735748491aafe583ee5add4925"
                    title="Pericles"
                    artist="Pericles"
                /> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2736819a848cb1eee4578aa7f6b"
                    title="Cartola"
                    artist="Cartola"
                /> 
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b2737d30b59914fd3fda7b59da7b"
                    title="Exaltasamba"
                    artist="Exaltasamba"
                /> 

                </div>
            </section>

            
                    
          
        </div> 
        
    )
}