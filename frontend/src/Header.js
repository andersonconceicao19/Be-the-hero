import React, {useState} from 'react'

function Header(){
    const [count, setCounter] = useState(0);

    function incremet(){
        setCounter(count + 1);
    }
    return(
        <header>
            <p>Contador: {count} </p>
            <button onClick={incremet}>incremet</button>
        </header>
    );
}

export default Header;