import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

function SignIn(props) {
    let [input, setInput] = useState("signin")
    const navigate=useNavigate();
   
    //Recruiter rdata
    const [rdata,setRdata]=useState({
      
        jobid:"",
        password:""
    })
    //Candidate Cdata
    const [cdata,setCdata]=useState({
     
      email:"",
      password:""
  })

   
    const handleLogin=(e)=>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem("user"))  
        if(
            rdata.jobid=== loggeduser.jobid &&
            rdata.password===loggeduser.password)
            {
              localStorage.setItem("loggedin",true)
                navigate("/home");
        }else{
            alert("Wrong JobID Or Password")
        }

    };
    const handleLogin1=(e)=>{
        e.preventDefault();
        const loggeduser1=JSON.parse(localStorage.getItem("user1"))
        if(
            cdata.email=== loggeduser1.email &&
            cdata.password===loggeduser1.password)
            {
              localStorage.setItem("loggedin",true)
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
              <h3 className="Auth-form-title">Sign IN</h3>
              <div className="text-center">
                 Sign In As Job Seeker?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  <u>Sign In</u>
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Job ID</label>
                <input
                name="jobid"
                value={rdata.jobid}
                onChange={(e)=>
                setRdata({
                    ...rdata,
                    [e.target.name]:e.target.value,
                })}
                  type="text"
                  className="form-control mt-1"
                  placeholder="eg-BPC99999"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  name="password"
                value={rdata.password}
                onChange={(e)=>
                setRdata({
                    ...rdata,
                    [e.target.name]:e.target.value,
                })}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
            Don't have an account 
             
              <Link to="/" className="text-center mt-2">
            <u> Register here</u>
              </Link>
              </p>
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
            <h3 className="Auth-form-title">Sign IN</h3>
            <div className="text-center">
              Sign In As Recruiter ?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              <u>Sign IN</u>
              </span>
            </div>
            
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                value={cdata.email}
                onChange={(e)=>
                setCdata({
                    ...cdata,
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
                value={cdata.password}
                onChange={(e)=>
                setCdata({
                    ...cdata,
                    [e.target.name]:e.target.value,
                })}
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
            Don't have an account 
             
              <Link to="/" className="text-center mt-2">
            <u> Register here</u>
              </Link>
              </p>
          </div>
        </form>
      </div>
    )
  
}

export default SignIn