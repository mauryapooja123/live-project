import React from "react";

function Signup(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div class="container">
          <h1>Sign Up</h1>

          <hr />

          <label for="firstName">
            <b>firstName</b>
          </label>
          <input
            type="text"
            placeholder="Enter firstName"
            name="firstName"
            maxLength="10"
            value={props.user.firstName}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.firstName}</p>

          <label for="lastName">
            <b>lastName</b>
          </label>
          <input
            type="text"
            placeholder="Enter lastName"
            name="lastName"
            maxLength={10}
            value={props.user.lastName}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.lastName}</p>
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
          <label for="phone">
            <b>phone</b>
          </label>
          <input
            type="number"
            placeholder="Enter phone number"
            name="number"
            maxLength="10"
            value={props.user.number}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.number}</p>
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

          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
