import React, { useState } from 'react';
import './index.css'
import { BsFillTrash3Fill } from "react-icons/bs";






const ControlView  = () => {

    const [inputSets, setInputSets] = useState([{ field1: '', field2: '', field3: '', field4: '' }]);



    const handleInputChange = (index, field, event) => {
        const values = [...inputSets];
        values[index][field] = event.target.value;
      };

    
      const handleAddFields = () => {
        setInputSets([...inputSets, { field1: '', field2: '', field3: '', field4: '' }]);
      };

      const handleRemoveFields = (index) => {
        const values = [...inputSets];
        values.splice(index, 1);
        setInputSets(values);
      };
     
    return (
        <form type="submit">
                
                <label>Please Enter Control Name </label>
                <br/>
                <input name="conatrolname" className='input-1' type="text" />
                <div className='form-card'>
      {inputSets.map((inputSet, index) => (
        <div key={`input-set-${index}`}>

          <input className='refno'
            type="text" 
            name="refno"
            value={inputSet.field1} 
            onChange={event => handleInputChange(index, 'field1', event)}
            placeholder="1"
          />
          
          
          <input className='input-text'
            type="text" 
            name="controltext"
            placeholder='Enter Text'
            value={inputSet.field2} 
            onChange={event => handleInputChange(index, 'field2', event)}
            
          />
    
          <input className='input-text'
            type="text" 
            name="rational"
            value={inputSet.field3} 
            onChange={event => handleInputChange(index, 'field3', event)}
            placeholder="Fully Implemented"
          />
          
          
          <input className='input-text'
            type="text" 
            name="rationalrating"
            value={inputSet.field4} 
            onChange={event => handleInputChange(index, 'field4', event)}
            placeholder="Enter text"
          />
        <button type="button" onClick={() => handleRemoveFields(index)}>Delete</button>
        <div>
        </div>
          <div>
          </div>
        </div>
        
      ))}
       
      <button type="button" onClick={handleAddFields}>Add Row <BsFillTrash3Fill/> </button>
  </div>
    </form>
    
    )

}



export default ControlView