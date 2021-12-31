import { useState } from "react";
// import as from "./styles.module.css";

 
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
const SignUp = () => {
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
}
    return(
        <div>
        <h1 className="face">Create An Account</h1>
        <input
          className="first"
          placeholder="first name"
          type="text"
          
          value={email}
        />
        <br />
        <br />
        <input
          className="last "
          placeholder="last name"
          type="text"
          
          value={email}
        />
        <br />
        <br />
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
          <button onClick={submit}>submit</button>
        </div>
        </div>
    )
    }

    export default SignUp;