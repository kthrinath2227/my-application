import React from 'react';
import { useNavigate } from 'react-router';
const A = () => {
    const nav=useNavigate()
    return (
        <div>
        <h1>Login</h1>
        <input type="text" />
        <input type="number" />
<button onClick={()=>{nav("/state")}}>click</button>

        </div>
    );
}

export default A;
