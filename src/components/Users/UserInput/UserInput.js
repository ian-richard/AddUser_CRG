import React, { useState } from 'react';
import Button from '../../UI/Button/Button';

const UserInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);

    const nameInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0){
            setIsValid(true)
        }
        setEnteredValue(event.target.value);
    };

    const ageInputChangedHandler = (event) => {
        if (event.target.value.trim().length > 0){
            setIsValidAge(true)
        }
        setEnteredAge(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0 && enteredAge.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddUser(enteredValue, enteredAge);
    };


    
    return (
          <form onSubmit={formSubmitHandler}>
            <div>
                <label>Username</label>
                <input type="text" onChange={nameInputChangeHandler}/> 
                
                <label>Age (Years)</label>
                <input type="text" onChange={ageInputChangedHandler} />
                
            </div>
            <Button type="submit"></Button>
          </form>
          
    );
}


export default UserInput;