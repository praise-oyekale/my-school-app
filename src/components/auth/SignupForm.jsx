// import { Form } from "react-router-dom";
import "../auth/signupform.css";
import Input from "../common/Input";
import { useState } from "react";
import { signUp } from "../../services/authService";
import Loader from "../common/Loader";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmpassword, setComfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [matchPasswordError, setMatchPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  function validateEmail(email) {
    if (!email.trim()) {
      return "Email is required";
    }
    if (!email.includes("@")) {
      return "Please enter a valid email address";
    }
    return "";
  }

  function validatePassword(password) {
    if (!password.trim()) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  }

  function matchPassword(password) {
    if (!(password === comfirmpassword)) {
      return "The passaword don't match";
    }

    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const emailValidation = validateEmail(email);
      const passwordValidation = validatePassword(password);
      const passwordConfirmation = matchPassword(password);
      setEmailError(emailValidation);
      setPasswordError(passwordValidation);
      setMatchPasswordError(passwordConfirmation);

      if (!isChecked) {
        alert("Please agree to the terms and conditions");
        return;
      }

      if (emailValidation || passwordValidation || passwordConfirmation) {
        return;
      }
      if (password !== comfirmpassword) {
        return;
      }

      const userData = {
        fullName,
        email,
        password,
      };
      await signUp(userData);
      setSuccess("Account created successfully!");

      setFullName("");
      setEmail("");
      setPassword("");
      setComfirmPassword("");
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
     

    console.log({
      fullName,
      email,
      password,
      comfirmpassword,
      role: "student",
    });
    navigate("/student") 
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <Input
        label="FULL NAME"
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={comfirmpassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
        error={matchPasswordError}
      />

      <div className="terms">
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="terms">I agree to the Terms and Condition</label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? <Loader text="creating account..." /> : "Sign Up"}
      </button>
    </form>
  );
}

export default SignupForm;
