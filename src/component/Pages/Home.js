import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const removeToken = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      navigate("/login");
    }
  };

  return (
    <div>
      <p> this is my home page</p>
      <button type="button" onClick={removeToken}>
        Logout
      </button>
    </div>
  );
}

export default Home;
