// rfc
import React, { useState } from 'react'

export default function Componet() {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount((prevCount)=> prevCount + 1);
    }
    const dicrement = () =>{
        setCount((prevCount) => prevCount - 1);
    }
  return (
    <div>
        <div class="bg-white py-11 content-center  my-5 text-white   items-center justify-center shadow mt-4">
          <p id="counter" class="text-bold text-black text-xl">
            {" "}
            {count}
            {" "}
          </p>
          <button
         onClick={increment}
            id="increment"
            class="  my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
          <button
          onClick={dicrement}
            id="decrement"
            class=" ml-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
        </div>
    </div>
  )
}
