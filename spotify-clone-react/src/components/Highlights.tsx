import { CardHighlight } from "./CardHighlights";


export function Highlights (){
    return (
        <div className='flex flex-col gap-2'> 
            <div className="flex items-center justify-between">
                <h4 className='font-semibold text-xl hover:underline'>Parecido com Arlindo Cruz</h4>  
           
                <a href="" className="text-xs font-semibold text-zinc-500 hover:underline">Mostrar tudo</a>
           
            </div>
            <div className='flex gap-6'>
                <CardHighlight 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    title="Zeca Pagodinho"
                    artist="Zeca Pagodinho"
                /> 
                <CardHighlight 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                />  
                <CardHighlight 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                /> 
                <CardHighlight 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                /> 
                <CardHighlight 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                /> 
                <CardHighlight 
                    img="https://misc.scdn.co/liked-songs/liked-songs-64.png"
                    title="Pagode das antigas"
                    artist="Vários artistas"
                />
            </div>
        </div> 
    )
}