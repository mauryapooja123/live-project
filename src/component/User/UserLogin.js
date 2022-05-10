import React from "react";
import Login from "../Pages/Login";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError({});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await axios.post(
        `http://localhost:5000/user/loginuser`,
        user
      );
      console.log(res);
      if (res && res.data && res.data.status === 200) {
        localStorage.setItem("token", res.data.data.jwt);
        navigate("/");
        toast.success(res.data.message);
      } else {
        navigate("/login");
        toast.error(res.data.message);
      }
    }
  };
  const isValid = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let formData = true;
    switch (true) {
      case !user.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case user.email && !regex.test(user.email):
        setError({ email: "Please enter valid email " });
        formData = false;
        break;
      case !user.password:
        setError({ password: "Password field is required!" });
        formData = false;
        break;

      default:
        formData = true;
    }
    return formData;
  };

  return (
    <div>
      <Login
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        error={error}
      />
    </div>
  );
}

export default UserLogin;
