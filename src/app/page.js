"use client"
import React, { useState, useEffect } from "react";
import Home from "./components/Home/page";
export default function Page() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [styling, setStyling] = useState("none");
  const [userNameLogin, setUserNameLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 700);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputs = () => {
    setStyling("block");
  };

  const handleUserNameInputLogin = (event) => {
    setUserNameLogin(event.target.value);
  };

  const handlePassInputLogin = (event) => {
    setPassLogin(event.target.value);
  };

  if (typeof window !== "undefined") {
    if (userNameLogin === "" || passLogin === "") {
      setTimeout(() => {
        window.close();
      }, 20000);
    }
  }

  if (userNameLogin === "hamdy" && passLogin === "180552") {
    return <Home />;
  } else {
    // Handle incorrect username or password
    // For example, show an error message or redirect to a login page
    console.log("Incorrect username or password");
  }

  const loginStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    zIndex: "999",
  };

  const inputsLoginStyleing = {
    display: styling,
  };

  return (
    <>
      {isDesktop ? (
        <Home />
      ) : (
        <div onClick={handleInputs} style={loginStyle}>
          This website doesn t support mobile devices.
          <input
            onChange={handleUserNameInputLogin}
            value={userNameLogin}
            style={inputsLoginStyleing}
            placeholder="user"
          />
          <input
            onChange={handlePassInputLogin}
            value={passLogin}
            style={inputsLoginStyleing}
            placeholder="pass"
          />
        </div>
      )}
    </>
  );
}
