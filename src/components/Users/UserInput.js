import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./UserInput.css";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [error, setError] = useState();

  const nameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const ageInputChangedHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidAge(true);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0).",
          });
      return;
    }
    console.log(enteredValue, enteredAge);
    setEnteredValue("");
    setEnteredAge("");

    props.onAddUser(enteredValue, enteredAge);
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredValue}
              onChange={nameInputChangeHandler}
            />

            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageInputChangedHandler}
            />
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
