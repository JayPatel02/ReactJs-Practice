import { useCallback, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}"

    for(let i=1;i<=length ;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed])

  const copyToCLipBoard = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  })

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-center text-2xl text-white my-3">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-2"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToCLipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex text-center gap-x-1">
            <input 
            type="checkbox" 
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={()=>{
              setnumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex text-center gap-x-1">
            <input 
            type="checkbox" 
            id="charInput"
            defaultChecked={charAllowed}
            onChange={()=>{
              setcharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
        <div className="flex pt-4 ">
          <button
          className="outline-none bg-slate-400 text-black text-lg font-semibold px-3 py-3 mx-auto rounded-md"
          onClick={passwordGenerator}
          >
          Generate Password</button>
        </div>
      </div>
    </>
  );
}

export default App;
