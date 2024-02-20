interface HighlightProps {
    name: string;
}


export function Highlights (props: HighlightProps){
    return (
        <div className='flex flex-col gap-2 mt-10'>
            <div className="flex items-center justify-between">
                <h4 className='font-semibold text-xl hover:underline'>{props.name}</h4>  
           
                <a href="" className="text-xs font-semibold text-zinc-500 hover:underline">Mostrar tudo</a>
           
            </div>
            <div className='flex gap-6'>
                
                
            </div>
        </div> 
    )
}