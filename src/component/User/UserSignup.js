import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Signup from "../Pages/Signup";

function UserSignup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError({});
  };

  const validatePassword = () => {
    let error = "";

    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

    if (!isNonWhiteSpace.test(user.password)) {
      error = "Password must not contain Whitespaces.";
    } else if (!isContainsUppercase.test(user.password)) {
      error = "Password must have at least one Uppercase Character.";
    } else if (!isContainsLowercase.test(user.password)) {
      error = "Your password must contain at least one lower case letter.";
    } else if (!isContainsNumber.test(user.password)) {
      error = "Password must contain at least one Digit.";
    }
    if (!isContainsSymbol.test(user.password)) {
      error = "Password must contain at least one Special Symbol";
    }
    setError({ password: error });
  };

  const isValid = () => {
    var numberExp =
      /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/;

    const nameregex = /^[a-zA-Z ]{2,10}$/;
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let formData = true;

    switch (true) {
      case !user.firstName:
        setError({ firstName: "FirstName field is required!" });
        formData = false;
        break;
      case user.firstName && !nameregex.test(user.firstName):
        setError({ firstName: "Please enter valid firstName" });
        formData = false;
        break;
      case !user.lastName:
        setError({ lastName: "lastName field is required!" });
        formData = false;
        break;
      case user.lastName && !nameregex.test(user.lastName):
        setError({ lastName: "Please enter valid lastname " });
        formData = false;
        break;

      case !user.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case user.email && !regex.test(user.email):
        setError({ email: "Please enter valid email " });
        formData = false;
        break;
      case !user.number:
        setError({ number: "Phone is required!" });
        formData = false;
        break;
      case user.number && !numberExp.test(user.number):
        setError({ number: "Please Enter 10 Digit number " });
        formData = false;
        break;
      case !user.password:
        setError({ password: "Password is required!" });
        formData = false;
        break;
      case !validatePassword():
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await axios.post(`http://localhost:5000/user/signup`, user);
      if (res && res.data && res.status == 200) {
        localStorage.setItem("userData", JSON.stringify(user));
        toast.success("User Signed in Successfully");
        navigate("/login");
      } else {
        toast.error(res.data.status);
      }
    }
  };

  return (
    <div>
      <Signup
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        error={error}
      />
    </div>
  );
}

export default UserSignup;
