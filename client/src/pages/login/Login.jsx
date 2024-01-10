import { useContext, useState } from "react";
import "./login.scss"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user,loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id] : e.target.value }));


  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch( { type: "LOGIN_START" });

    try{
      const res = await axios.post("/api/auth/login", credentials);
      if(res.data.isAdmin){
        dispatch( { type: "LOGIN_SUCCESS", payload: res.data.details});
        navigate("/");
      }else{
        dispatch ( {type: "LOGIN_FAILURE", payload: { message: "You are not allowed" }});
      }
     

    } catch (err){
      dispatch ( {type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  console.log(user);

  return (
    <div className="Login-container">
      <div className="form-container">
        <p className="title">Login</p>
        <div className="form">
          <label>Username</label>
          <input type="text" id="username" onChange={handleChange} placeholder="Enter your username..." />
          <label>Password</label>
          <input type="password" id="password" onChange={handleChange} placeholder="Enter your password..." />
          <div className="bottom">
            <span className="f-p">Forgot Password?</span>
            <button disabled={loading} onClick={handleClick}>Login</button>
          </div>
          {error && <span style={{color: "rgb(255,0,0)", fontSize: "smaller"}}>{error.message}</span>}
        </div>
      </div>  
    </div>
  )
}

export default Login;