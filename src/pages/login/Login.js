import { useState } from "react";

import as from "./styles.module.css";
import { Link } from "react-router-dom";

// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
//   const [date, setDate] = useState("");
  const validationInput = () => {
    if (email.length === 0 || !email.includes("@") || password.length < 8) {
      setError(true);
      // return true;
    } else {
      setError(false);
      // return false;
    }
  };
  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);
  // const onDateChange = (date) => console.log(date);
  const submit = () => {
    if (!validationInput()) {
      console.log("submit----", email, password);
    }
  };
 
    <div style={{ margin: "0 auto" }}>
      <div style={{textAlign:"center"}}>
        <h1 className="face">LOGIN</h1>
        <input
          className="email"
          placeholder="enter your email"
          type="email"
          onChange={onEmailChange}
          value={email}
        />
        <br />
        <br />

        <input
          className="pass"
          placeholder="enter your password"
          type="password"
          onChange={onPasswordChange}
          value={password}
        />
        <br />

        {error ? <p> all fields are mandatory</p> : <p></p>}
        <div className="login">
          <button onClick={submit}>log me in!!</button>
        </div>
     <br></br>
        <button className={as.sign}> <Link to="/signup"><h3>Signup</h3></Link></button>
        
      </div>
      {/* <button className="create">create New Account</button>
      <Calendar onChange={onDateChange} value={date} /> */}
    </div>
  
};
export default LoginForm;