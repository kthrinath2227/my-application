import React from 'react';
import './standard.css';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Stanadard = () => {
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
                <input className='input-1' type="text" placeholder='Ransomeware' />
                </div>
                <label>Please Enter Control Name </label>
                <br/>
                <input className='input-1' type="text" />
                <div className='form-card'>
                <div className='m-2'>
                    <label>Ref No:</label>
                    <br/>
                    <input placeholder='1' className='refno' type="text"/>
                </div> 
                <div className="m-2">
                    <label>Control</label>
                    <br/>
                    <input className='input-text' type="text"/>
                </div>
                <div className="m-2">
                    <label>Rational</label>
                    <br/>
                    <Dropdown >
        <Dropdown.Toggle className='rational-toggle'>
        Select Rational
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item >Partially implemented</Dropdown.Item>
        <Dropdown.Item >Largely implemented</Dropdown.Item>
        <Dropdown.Item >Fully Implemented</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
                </div>
                <div className="m-2">
                    <label>Rational for rating</label>
                    <br/>
                    <input className='input-text' type="text"/>
                </div>
                <div className="m-2">
                    <label>Mitigation Suggestion </label>
                    <br/>
                    <input className='input-text' type="text"/>
                </div> 
                <div className="m-2">
                    <label>Action Taken</label>
                    <br/>
                    <input className='input-text' type="text"/>
                </div>                     
                </div>
                
                
                </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Stanadard;
