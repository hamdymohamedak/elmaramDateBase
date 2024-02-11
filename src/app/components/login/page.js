"use client";
import { useState } from "react";
import styles from "./login.module.css";
// import Link from 'next/link'; // Not using Link for navigation

export default function LoginPage() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUserName = (event) => setUsernameValue(event.target.value);
  const handlePass = (event) => setPasswordValue(event.target.value);

  const handleSubmit = () => {
    if (usernameValue === "hamdy" && passwordValue === "180552") {
      // Navigate to Home page
      window.open(
        "/components/Homea;lsm;lasfl;masf;lm;lmaammaam;slmf;amsfas;lgmpasl[pasld[plaspdllllasdlhahaHomealsmlasfmasflmlmaammaamslmf",
        "_self"
      );
    } else {
      alert("Invalid username or password");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.formParent}>
        <div style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
          Login
        </div>
        <input
          value={usernameValue}
          onChange={handleUserName}
          onKeyPress={handleKeyPress} // Handle Enter key press
          className={styles.loginInput}
          placeholder="Username"
        />
        <input
          value={passwordValue}
          onChange={handlePass}
          onKeyPress={handleKeyPress} // Handle Enter key press
          className={styles.loginInput}
          placeholder="Password"
          type="password" // Treat input as password
        />
        <button onClick={handleSubmit} className={styles.formBtn}>
          Login
        </button>
      </div>
    </div>
  );
}
