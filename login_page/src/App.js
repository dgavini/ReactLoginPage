import './App.css';
import Home from './Home.js';
import { LoginButton } from 'react-facebook';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { withRouter, unstable_HistoryRouter } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {

const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");
const [error, setError] = React.useState("");



function handleSubmit(e)
{
  e.preventDefault();
  setUsername("");
  setPassword("");
  console.log(username, password);

  if (username === "dheeraj@gmail.com" && password === "Dheeraj@23") {
     

    root.render(
      <React.StrictMode>
        <Home state={{ data:username }} />
      </React.StrictMode>
    );

  } else {
    setError('Username or Password is incorrect.');
    return;
  }
  return(
    <div>
      <h1>This is new page</h1>
    </div>

  );
}


  return (
    <div className="App">
      <header className="App-header">
        <div className="Sign-In">
          <h2 >Sign In With</h2>
          <a href="https://www.facebook.com/">
          <button type="button" className="Facebook_Sign-In">
            <img h>
            </img>Facebook
          </button>
          </a>
          <a href="https://www.google.com/">
          <button type="button" className="Google_Sign-In">Google</button>
          </a>
          <form method="post" onSubmit={handleSubmit} >
          <p className="Username_Text">Username</p>
          <input type="email" id="username"  value={username} onChange={ e=> setUsername(e.target.value)} className="Username_Input"></input>
          <p className="Password_Text">Password</p>
          <p className="Forgot_Text" >Forgot?</p>
          <input type="password"  id="password" value={password} onChange={ e=> setPassword(e.target.value)} className="Password_Input"></input>
          <input type="submit"  className="Button" value="Submit">
          </input>
          {error && <p className="errorHandling">{error}</p>}
          <p className="NotMember" >Not a Member?</p>
          <p className="SignUp" >Sign up now</p>
          </form>
        </div>  
      </header>
    </div>
  );
}

export default App;
