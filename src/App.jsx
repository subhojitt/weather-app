import WeatherApp from "./WeatherApp"

function App() {
  return (
    
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:pg-white-950 selection text-white-950">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    </div>
    <div className="container mx-auto px-8">
   <WeatherApp/>
   
    </div>
      </div>
    
  
  )
}

export default App
