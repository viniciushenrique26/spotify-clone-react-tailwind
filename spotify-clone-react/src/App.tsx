import { LibraryMain } from "./components/LibraryMain"
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
        <main className="flex-1 p-6 mt-3  bg-gradient-to-b from-indigo-500/30 via-zinc-925 to-zinc-925 rounded-lg h-[50em] overflow-hidden "> 
          <LibraryMain/>
        </main>
      </div> 
      <footer className="border-t border-zinc-700 bg-zinc-800 p-6 ">
        Footer
      </footer> 
      
    </div>
  )
}

export default App
