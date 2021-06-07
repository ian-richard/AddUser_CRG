import React, { useState, Fragment } from 'react';
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
    <Card></Card>
  );

  if (Users.length > 0){
    content = (
      <UserList items={Users} />
    );
  }

// <> & </> is a shorthand wrapper fragment for React.fragment 
  return (
    <Fragment>
      <UserInput onAddUser={addUserHandler}/>
        {content}
    </Fragment>
  );
}

export default App;
