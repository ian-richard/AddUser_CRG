import React, { useState } from 'react';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';
import Card from './components/UI/Card';


function App() {

  const [Users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ text: uName, age: uAge, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  let content = (
    <Card><p> No users found</p></Card>
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
