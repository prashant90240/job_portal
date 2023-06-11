import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Auth(props) {
    
    const navigate=useNavigate();
    let [input, setInput] = useState("signin")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleLogin=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(data),)
    };
    const handleLogin1=(e)=>{
        e.preventDefault();
        localStorage.setItem("user1",JSON.stringify(data),)
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem("user"))  
        if(
            data.email=== loggeduser.email &&
            data.password===loggeduser.password)
            {
                navigate("/home");
        }else{
            alert("Wrong Email Or Password")
        }

    };
    const handleSubmit1=(e)=>{
        e.preventDefault();
        const loggeduser1=JSON.parse(localStorage.getItem("user1"))
        if(
            data.email=== loggeduser1.email &&
            data.password===loggeduser1.password)
            {
                navigate("/home");
        }else{
            alert("Wrong Email Or Password")
        }

    };

    const changeAuthMode = () => {
      setInput(input === "signin" ? "signup" : "signin")
    }
  
    if (input === "signin") {
        // Recruiter Code/////////////////////////////
      return (
        
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleLogin}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Registered As Recruiter ?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  <u>Sign In</u>
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                name="email"
                value={data.email}
                onChange={(e)=>
                setData({
                    ...data,
                    [e.target.name]:e.target.value,
                })}
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  name="password"
                value={data.password}
                onChange={(e)=>
                setData({
                    ...data,
                    [e.target.name]:e.target.value,
                })}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              
            </div>
          </form>
        </div>
      )
    }
  // Job Seeker Code/////////////////////////////////////
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin1}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign UP</h3>
            <div className="text-center">
              Registerd As JobSeeker ?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              <u>Sign IN</u>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                name="fullname"
                value={data.fullname}
                onChange={(e)=>
                setData({
                    ...data,
                    [e.target.name]:e.target.value,
                })}
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                value={data.email}
                onChange={(e)=>
                setData({
                    ...data,
                    [e.target.name]:e.target.value,
                })}
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                value={data.password}
                onChange={(e)=>
                setData({
                    ...data,
                    [e.target.name]:e.target.value,
                })}
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button  onSubmit={handleSubmit1} type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  
}

export default Auth