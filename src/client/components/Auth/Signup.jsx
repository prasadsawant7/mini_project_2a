import "./Auth.css";
import { Form, Link } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
import { useRef } from "react";
import { useState } from "react";

export default function Signup() {
  const [password, setPassword] = useState("");
  const unameInputRef = useRef();
  const phoneInputRef = useRef();
  const pwdInputRef = useRef();

  const setPwdInputOutlineColor = (password) => {
    if (password.length === 0)
      pwdInputRef.current.style.outlineColor = "#cc0000";
    if (password.length > 0 && password.length < 8)
      pwdInputRef.current.style.outlineColor = "#ffff00";
    if (password.length > 8) pwdInputRef.current.style.outlineColor = "#008f02";
  };

  const checkPwdLen = (e) => {
    setPassword(e.target.value);
    setPwdInputOutlineColor(e.target.value);
  };

  return (
    <div className="signup">
      <div className="page-title">Signup</div>
      <div className="greet-message">
        Welcome! Join our farmer community today and access exclusive content
        and features to help grow your farm. Create an account now to get
        started!
      </div>
      {/* <div className="error-message"></div> */}
      <Form className="form">
        <div className="row1">
          <div className="fname">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Eg. John"
            />
          </div>
          <div className="lname">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Eg. Doe"
            />
          </div>
        </div>
        <div className="row2">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              ref={unameInputRef}
              placeholder="Eg. johndoe10"
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              ref={phoneInputRef}
              placeholder="Eg. +919892567893"
            />
          </div>
        </div>
        <div className="row3">
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              ref={pwdInputRef}
              onChange={checkPwdLen}
              placeholder="Enter your password"
            />
          </div>
          <div className="usertype">
            <label htmlFor="usertype">Usertype</label>
            <select name="usertype" id="usertype">
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
            </select>
          </div>
        </div>
        <button type="submit">Signup</button>
      </Form>
      <div className="login-account">
        Already have an account?{" "}
        <Link to="/auth/login">
          Log in <TbArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
