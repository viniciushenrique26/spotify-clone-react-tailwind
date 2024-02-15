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
                <CardHighlight 
                    img="https://i.scdn.co/image/ab67616d0000b273aeb17064160726ffe75cf999"
                    title="Sabiá Marrom"
                    artist="Alcione"
                />
            </div>
        </div> 
    )
}