import React, { useState } from 'react';
import UserInput from './components/Users/UserInput/UserInput';
import UserList from './components/Users/UserList/UserList';

function App() {

  const [Users, setUsers] = useState([
    {text: 'James', id: 'u1'},
    {text: 'Diana', id: 'u2'}
  ]);

  const addUserHandler = enteredText => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ text: enteredText, id: Math.random().toString() });
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
      <section>
      <UserInput onAddUser={addUserHandler}/>
      </section>
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;
