import { CardHighlight } from "./CardHighlights";

export function Highlights (){
    return (
        <div className='flex flex-col gap-2'>
           <h4 className='font-semibold text-xl hover:underline'>Parecido com Arlindo Cruz</h4> 
            <div className='flex gap-4'>
                <CardHighlight/> 
                <CardHighlight/>
                <CardHighlight/> 
                <CardHighlight/>
            </div>
        </div> 
    )
}