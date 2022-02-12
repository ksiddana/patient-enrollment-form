import React from "react";

const UserDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <form>
        <label>
          Email
          <input type="text" placeholder="email address" value={values.email} onChange={handleChange("email")} />
        </label>
        <br />
        <label>
          Username
          <input
            placeholder="Username"
            label="Username"
            onChange={handleChange("username")}
            value={values.username}
            autoComplete="username"
            fullWidth
          />
        </label>
        <br />
        <label>
          Password
          <input
            placeholder="Password"
            label="Password"
            onChange={handleChange("password")}
            value={values.password}
            // variant="outlined"
            autoComplete="password"
            fullWidth
            type="password"
          />
        </label>

        <button onClick={Continue} type="submit" fullWidth variant="contained" color="primary">
          Next
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
