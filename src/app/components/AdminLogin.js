import React from "react";
import * as styles from "../styles/AdminLogin.css";

const AdminLogin = () => {
  return (
    <>
      <div className="AdminLogin">
     
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label for="email">Company Email</label>
              <input type="text" id="email" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
           <input type="password" name="" id="email" />


           
            </div>
            <button type="submit" className="form-submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
