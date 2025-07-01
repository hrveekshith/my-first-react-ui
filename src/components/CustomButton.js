import { useState } from "react";
function CustomButton(){
    const [count,setCount] = useState(0)
    return (
        <>
          <p>Count:{count}</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg mt-4" onClick={()=>setCount(count+1)}>Click Me</button>
        </>
    )
}

export default CustomButton;