import React from 'react';
import './standard.css';
import { Button } from 'react-bootstrap';

import { useState } from 'react';
import ControlView from '../ControlView';



const Stanadard = () => {
const [components,setComponents] = useState([]);
    const compnent = <div>
        <ControlView/>
    </div>
  
    return (
        <div>
            <div className='background-container'>
            <Button className="btn-1" variant="info">Stanadard Based Domin</Button>
                <div className='container-3'>
                <div className='form-container'>
                <form type="submit">
                <div>
                <label>Please Enter your prefered stanadard </label>
                <br/>
                <input name="standard"  className='input-1' type="text" placeholder='Ransomeware' />
                </div>
                <div className="ControlContainer">
               <ControlView/>
               {components.map(component => compnent)}
              
        
               <div>
                <button onClick={() => setComponents([...components, compnent])} type='button' >Click me</button>
               </div>
                </div>
                <br/>

    </form>
    
    </div>
     </div>
     </div>
     
     <div>
     

     
    </div>
     </div>
    );
}

export default Stanadard;
