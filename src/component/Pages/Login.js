import React from "react";

function Login(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div class="container">
          <h1>Login</h1>

          <hr />

          <label for="email">
            <b>email</b>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={props.user.email}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.email}</p>

          <label for="password">
            <b>password</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={props.user.password}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.password}</p>

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
