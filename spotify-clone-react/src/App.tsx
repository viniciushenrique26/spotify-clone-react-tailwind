import { LibraryMain } from "./components/LibraryMain"
import { Playlist } from "./components/Playlist"
import {Sidebar} from "./components/Sidebar"




function App() {

  return ( 
    <div className="h-screen flex flex-col overflow-hidden"> 
    
      <div className="flex flex-1">
        <aside className="w-80 h-[50em] bg-black p-3 "> 
          <nav className="space-y-5">
           <Sidebar/>  

          </nav>
        </aside> 
        <main className="flex-1 p-6 mt-3  bg-gradient-to-b from-indigo-500/30 via-zinc-925 to-zinc-925 rounded-lg h-[50em] overflow-auto "> 
          <LibraryMain/>
        </main>
      </div> 
      <footer className=" bg-zinc-950 p-6">
        <Playlist  
          name='Perdas & Ganhos' 
          image='https://i.scdn.co/image/ab67616d00001e0264cd3f5ee97cd49ea5768c5e' 
          artist='Vulgo FK'
          type=''
        />
      </footer> 
      
    </div>
  )
}

export default App
