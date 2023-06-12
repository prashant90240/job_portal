import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate();
  const userName=JSON.parse(localStorage.getItem("user"));
  //const userName1=JSON.parse(localStorage.getItem("user1"));
  const handleLogout=()=>{
    localStorage.removeItem("loggedin")
    navigate("/");
  }
  return (
    <div>
      <>Hello {userName.jobid}</>
      <br/>
      <br/>
      <button onClick={handleLogout} type="button" className="btn btn-primary">
                Logout
              </button>
    </div>
  )
}

export default Home
