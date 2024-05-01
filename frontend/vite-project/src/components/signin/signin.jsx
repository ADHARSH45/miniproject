import React, { useEffect, useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import './signin.css';
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [formdata,setformdata] = useState({});
  const [error,seterror] = useState(null);
  const [loading,setloading] = useState(false);
  const navigate = useNavigate();
  const handlechange = (e)=>{
    setformdata(
        {
            ...formdata,
            [e.target.id] : e.target.value,
        }
    )
  }
 console.log(formdata);

 const handlesubmit = async (e)=>{
    e.preventDefault();
    setloading(true);
const res = await fetch("/auth/signup",{
    method:'POST',
    headers:{
        'Content-Type':'Application/json',
    },
    body:JSON.stringify(formdata),
});
   const data = await res.json();
   if(data === false){
    seterror(data.message);
    setloading(false);
    return;
    
   }
   setloading(false);
   console.log(data);
   navigate("/dashboard");
    
 }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Username"  onChange={handlechange} id="username"/>
              <input type="email" placeholder="Email" onChange={handlechange} id="email"/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={handlechange} id="password"/>
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button disabled = {loading} type="submit">{loading?'Loading ..':'signup'}</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>

          <p>don't has an ACCOUNT?</p><Link to = '/signin'>Sign In\n</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;