export function CardLibrary (){
    return (
        <div className="bg-white/10 items-center rounded-lg flex w-86 h-16 gap-3"> 
            <div className=" rounded-l-lg"> 
                <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="album" className="w-full h-full object-cover rounded-l-lg "/>
            </div>
            <div className="mt-3"> 
                <h3 className="text-zinc-50 text-sm font-bold">Album Name</h3>
                
            </div> 
            
        </div>
    )
}