import "./Auth.css";
import { Form, Link } from "react-router-dom";

export default function OTPVerify() {
  return (
    <div className="otp-verify">
      <h1 className="title">Enter OTP</h1>
      <Form id="otp-form">
        <input type="text" className="otp-input" maxLength="1" />
        <input type="text" className="otp-input" maxLength="1" />
        <input type="text" className="otp-input" maxLength="1" />
        <input type="text" className="otp-input" maxLength="1" />
        <input type="text" className="otp-input" maxLength="1" />
        <input type="text" className="otp-input" maxLength="1" />
      </Form>
      <button id="verify-btn">Verify OTP</button>
    </div>
  );
}
