import React,{useState} from 'react'
import { useNavigate,Link} from 'react-router-dom';

function Registration(props) {
    
    const navigate=useNavigate();
    let [register, setRegister] = useState("signin")
    
    //Recruiter rdata
    const [rdata,setRdata]=useState({
      
        jobid:"",
        email:"",
        password:""
    })
    //Candidate Cdata
    const [cdata,setCdata]=useState({
     
      name:"",
      email:"",
      password:""
  })

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(rdata));
        if(rdata.jobid && rdata.email && rdata.password){

          navigate("/SignIn")
        }else{
          alert('please fill the required ceredentials!!')
        }
    };
    const handleSubmit1=(e)=>{
        e.preventDefault();
        localStorage.setItem("user1",JSON.stringify(cdata));
        if(cdata.name && cdata.email && cdata.password){

          navigate("/SignIn")
        }else{
          alert('please fill the required ceredentials!!')
        }
    };


    const changeAuthMode = () => {
      setRegister(register === "signin" ? "signup" : "signin")
    }
  
    if (register === "signin") {
        // Recruiter Code/////////////////////////////
      return (
        
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Create Account</h3>
              <div className="text-center">
                Registered As JobSeeker ?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  <u>Sign Up</u>
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
              <label>Email address</label>
              <input
                name="email"
                value={rdata.email}
                onChange={(e)=>
                setRdata({
                    ...rdata,
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
            Already created
             
              <Link to="/SignIn" className="text-center mt-2">
            <u> SignIn here</u>
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
        <form className="Auth-form" onSubmit={handleSubmit1}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Create Account</h3>
            <div className="text-center">
              Registerd As Admin ?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              <u>Sign UP</u>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                name="fullname"
                value={cdata.fullname}
                onChange={(e)=>
                setCdata({
                    ...cdata,
                    [e.target.name]:e.target.value,
                })}
                type="text"
                className="form-control mt-1"
                placeholder="e.g Prashant"
              />
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
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
            Already created
             
              <Link to="/SignIn" className="text-center mt-2">
            <u> SignIn here</u>
              </Link>
              </p>
          </div>
        </form>
      </div>
    )
  
}

export default Registration