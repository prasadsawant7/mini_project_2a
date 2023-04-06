import "./Auth.css";
import { Form, Link } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";

export default function Login() {
  return (
    <div className="login">
      <div className="page-title">Login</div>
      <div className="greet-message">Hi, Welcome back 👋🏼</div>
      <Form className="form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Eg. johndoe10"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </Form>
      <div className="create-account">
        Not registered yet?{" "}
        <Link to="/auth/signup">
          Create an Account <TbArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
