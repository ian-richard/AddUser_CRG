import React, { useState } from 'react';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList/UserList';
import './App.css';

function App() {

  const [Users, setUsers] = useState([
    {text: 'James', age: '30', id: 'u1'},
    {text: 'Diana', age: '32', id: 'u2'}
  ]);

  const addUserHandler = (enteredText, enteredAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ text: enteredText, age: enteredAge, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  let content = (
    <p> No users found</p>
  );

  if (Users.length > 0){
    content = (
      <UserList items={Users} />
    );
  }


  return (
    <div className="App">
      <section id="goal-form">
      <UserInput onAddUser={addUserHandler}/>
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
