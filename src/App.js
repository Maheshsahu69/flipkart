import React, { useState } from 'react';
import './App.css';
import UserPage from './compo/UserPage';


function App() {
  const [showUserPage, setShowUserPage] = useState(false);
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const callUserPage = () => {
    console.log(userName, password);
    
    if(userName !=="" && password !==""){
      setShowUserPage(true);
    }else{
      alert("please enter username & password")
    }
  }
  return (
    <div className="App">
      {!showUserPage && <div>
       <div className="ui input"> <input type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/> </div><br /><br />
       <div className="ui input"> <input type="password" placeholder="Pwd" onChange={(e)=>setPassword(e.target.value)} /></div><br /><br />
        <button onClick={callUserPage} className="ui primary button">Login</button> <button className="ui primary button">Register</button>
      </div>
      }
      {showUserPage &&

        <UserPage loginUser={userName}/>

      }
    </div>
  );

}

export default App;
