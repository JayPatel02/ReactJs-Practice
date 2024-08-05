import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className='fixed flex justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap bg-white gap-3 justify-center px-3 py-2 rounded-2xl'>
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "red",color:'white'}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'green',color:'white'}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "blue",color:'white'}}
          >Blue</button>
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "olive",color:'white'}}
          >Olive</button>
          <button
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "gray",color:'white'}}
          >Gray</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "yellow",color:'black'}}
          >Yellow</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "purple",color:'white'}}
          >Purple</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "pink",color:'black'}}
          >Pink</button>
          <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "lavender",color:'black'}}
          >Lavender</button>
          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "white",color:'black'}}
          >White</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "black",color:'white'}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
