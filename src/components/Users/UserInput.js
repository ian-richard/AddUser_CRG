import React, { useState } from 'react';
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import './UserInput.css';


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
        <Card className={classes.input}>
          <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={nameInputChangeHandler}/> 
                
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageInputChangedHandler} />
                <button type="submit">Add User</button>
            </div>
            
          </form>
          </Card>
          
    );
}


export default UserInput;