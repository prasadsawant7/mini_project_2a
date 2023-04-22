import "./Auth.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";

export default function Login() {
  return (
    <div className="login">
      <div className="page-title">Login</div>
      <div className="greet-message">Hi, Welcome back 👋🏼</div>
      <div className="error-message">
        Username or Password or Usertype is wrong!
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          usertype: "",
        }}
        validate={(values) => {}}
      >
        {() => {
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
            <label htmlFor="usertype">Usertype</label>
            <select name="usertype" id="usertype">
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
            </select>
            <button type="submit">Login</button>
          </Form>;
        }}
      </Formik>
      <div className="create-account">
        Not registered yet?{" "}
        <Link to="/auth/signup">
          Create an Account <TbArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
