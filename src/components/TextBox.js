import { useState } from 'react';
function TextBox(){
    const [textContent,setText] = useState("");
    const handleChange = (e) => setText(e.target.value);
    return(
        <>
            <input type="text" onChange={handleChange} />
            <p>you typed: {textContent}</p>
        </>

    )
}

export default TextBox;