import React, { useState } from 'react';
// import ControlView from '../ControlView';

function Domain() {
    const [formData, setFormData] = useState({
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ( {
            ...prevState,
            [name]:value
        }));
    }
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/save',{
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was an error:', error);
        }

    }
    return (
        <div>
            <div>
                <label for="">Name</label>
                <br/>
                <input className='input-text' name="input1" onChange={handleChange} value={formData.input1}/>

            </div>
           
            <div>
                <label>Control Name</label>
                <br/>
                <input className='input-text' name="input2" onChange={handleChange} value={formData.input2}/>

            </div>
            <input placeholder='Ref No' className='refno' name="input3" onChange={handleChange} value={formData.input3}/>
            <input placeholder='Control Text' className='input-text' name="input4" onChange={handleChange} value={formData.input4}/>
            <input placeholder='Rational' className='input-text' name="input5" onChange={handleChange} value={formData.input5}/>
            <input placeholder='Rational For Rating' className='input-text' name="input6" onChange={handleChange} value={formData.input6}/>
            <button onClick={handleSubmit}>submit</button>
        
        
        </div>
    )
}
export default Domain;