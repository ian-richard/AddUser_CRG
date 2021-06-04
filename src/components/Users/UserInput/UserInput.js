import React, { useState } from 'react';
import Button from '../../UI/Button/Button';

const UserInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const nameInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0){
            setIsValid(true)
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddUser(enteredValue);
    };


    
    return (
          <form onSubmit={formSubmitHandler}>
            <div>
                <label>Username</label>
                <input type="text" onChange={nameInputChangeHandler}/> 
                
                <label>Age (Years)</label>
                <input type="text" />
                
            </div>
            <Button type="submit"></Button>
          </form>
          
    );
}


export default UserInput;