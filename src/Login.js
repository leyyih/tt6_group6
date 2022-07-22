import './Login.css';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

const users = [
  {
    "id": 1,
    "username": "user101",
    "password": "123456",
    "name": "Jacky"
  },
  {
    "id": 2,
    "username": "user102",
    "password": "123456",
    "name": "Jane"
  },
  {
    "id": 3,
    "username": "user103",
    "password": "123456",
    "name": "Tom"
  },
  {
    "id": 4,
    "username": "user104",
    "password": "123456",
    "name": "Helen"
  },
  {
    "id": 5,
    "username": "user105",
    "password": "123456",
    "name": "Mark"
  }]

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
  
    const handlesubmit = (e) => {
      e.preventDefault();
  
      const usercheck = users.find(user => (user.username === username && user.password === password));
  
      if (usercheck) {
          console.log("User Logged In");
      } else {
        console.log("please check you username or Email");
      }
    };
  
    return (
      <div id="login-wrapper">
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="Password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" id="login-btn">Log in</button>
        </form>
      </div>
    );
  };
  
export default Login;