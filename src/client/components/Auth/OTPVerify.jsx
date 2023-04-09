import "./Auth.css";
import { Form, Link } from "react-router-dom";
import { BiCheckShield } from "react-icons/bi";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function OTPVerify() {
  const inputsRef = useRef([]);
  const buttonRef = useRef(null);
  const errorRef = useRef(null);
  const [otp, setOTP] = useState(null);

  useEffect(() => {
    inputsRef.current = document.querySelectorAll("input");
    inputsRef.current.forEach((input, index1) => {
      input.addEventListener("keyup", (e) => {
        const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

        if (currentInput.value.length > 1) {
          currentInput.value = "";
          return;
        }

        if (
          nextInput &&
          nextInput.hasAttribute("disabled") &&
          currentInput.value !== ""
        ) {
          nextInput.removeAttribute("disabled");
          nextInput.focus();
        }

        if (e.key === "Backspace") {
          inputsRef.current.forEach((input, index2) => {
            if (index1 <= index2 && prevInput) {
              input.setAttribute("disabled", true);
              input.value = "";
              prevInput.focus();
            }
          });
        }

        if (
          !inputsRef.current[5].disabled &&
          inputsRef.current[5].value !== ""
        ) {
          buttonRef.current.classList.add("active");
          return;
        }
        buttonRef.current.classList.remove("active");
      });
    });

    if (buttonRef.current.classList.contains("active")) {
      buttonRef.current.addEventListener("click", handleClick);
    } else {
      buttonRef.current.removeEventListener("click", handleClick);
    }
  }, []);

  const handleClick = () => {
    const inputValues = Array.from(inputsRef.current)
      .map((input) => {
        if (input.value !== "") {
          buttonRef.current.disabled = false;
          return input.value;
        }
      })
      .join("");
    setOTP(inputValues);
    if (otp?.length === 6) {
      console.log(otp);
      errorRef.current.style.display = "block";
    }
  };

  return (
    <div className="otp-verify">
      <div className="container">
        <header>
          <BiCheckShield />
        </header>
        <h4>Enter OTP Code</h4>
        <div ref={errorRef} className="error-message">
          Invalid OTP!
        </div>
        <form action="#">
          <div className="input-field">
            <input type="number" maxLength={1} required />
            <input type="number" maxLength={1} required disabled />
            <input type="number" maxLength={1} required disabled />
            <input type="number" maxLength={1} required disabled />
            <input type="number" maxLength={1} required disabled />
            <input type="number" maxLength={1} required disabled />
          </div>
          <button ref={buttonRef} onClick={handleClick}>
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
