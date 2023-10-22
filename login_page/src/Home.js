import App from './App';
import './App.css';
import React, { useEffect, useState } from 'react';


function Home(props)
{

  const [userData, setUserData] = useState([]);
  const userName = props.state.data;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);



    return(
    <div className="Home_div">
        <h1 style={{ color:"white", textAlign: 'center' }}>Welcome, {userName}</h1>
        <table className="table">
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>user name</th>
            </tr>
            </thead>
            <tbody>
            {userData.map((user) => (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    );
}


export default Home;