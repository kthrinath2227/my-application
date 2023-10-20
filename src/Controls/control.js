import React from 'react';
import  './control.css';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Stanadard from '../standard/stanadard';
import Domain from '../domain/domain';



const Controls = () => {
    const [isShow, setIsShow] = useState(false);
    const handleClick = event => {
        setIsShow(current => !current);
        setIsDisplay(false)
    };
    const [isDisplay, setIsDisplay] = useState(false);
    const handleClicker = event => {
        setIsShow(false);
        setIsDisplay(current => !current);

    }

    return (
        // background-container 
       <div className='bgconatainer'>
       <div>
       {/* header-compnent */}
        <header className='header-1'>
        </header>

        {/* bottom -container  */}
        <div>

        {/* drop down container */}
        <div className='dropdown-container'>
        <Dropdown>
        <Dropdown.Toggle className='drop-down' variant="success" id="dropdown-basic">
        Select Standards
        </Dropdown.Toggle>
        <Dropdown.Menu className='drop-listitems'>
        <Dropdown.Item onClick={handleClick}  className='list-item'>Standard Based</Dropdown.Item>
        <Dropdown.Item onClick={handleClicker} className='list-item'>Domain Based</Dropdown.Item>
        <Dropdown.Item className='list-item'>Add New Standard..!</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
        {/* details - container  */}

        <div className='container-1'>
        <div>
        {isShow && (
            <div>
            <Stanadard/>
            
            </div>

        )}
        {isDisplay && (
            <div>
                <Domain/>
                
            </div>
        )}
            
        </div>

        </div>
       
       
       
       
        </div>
        </div>
       </div>
    );
}

export default Controls;
