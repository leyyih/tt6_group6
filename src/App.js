import './App.css';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

async function loginUser(credentials) {
  console.log(credentials)
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function App({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] =  useState();

  const handleSubmit = async e => {
    console.log("hellow")
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log("username")
    setToken(token);
  }

  return (
    // <Header></Header>
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="login-input" onChange={e => setUserName(e.target.value)}/>

        <label>Password</label>
        <input type="password" className="login-input" onChange={e => setPassword(e.target.value)}/>
      </form>
      <button type="submit" id="login-btn">Log In</button>
    </div>
  );
}


App.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default App;
