import { useState } from "react";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsValid = didEdit.email && !isEmail(enteredValues.email);
  const passwordIsValid = didEdit.password && !hasMinLength(enteredValues.password, 6);
 
  function handleInputChange(identifier, e) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: e.target.value,
    }));
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [identifier]: false,
    }));
  }

  function handleBlur(identifier) {
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [identifier]: true,
    }));
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleBlur('email')}
            value={enteredValues.email}
            onChange={(e) => handleInputChange("email", e)}
            onError={emailIsValid && 'Please enter a valid email'}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(e) => handleInputChange("password", e)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
