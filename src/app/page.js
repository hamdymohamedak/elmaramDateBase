"use client";
import { useEffect, useState } from "react";
import Home from "./components/Home/page";
import { isDesktop } from "react-device-detect";

export default function Page() {
  const [styling, setStyling] = useState("none");
  const [userNameLogin, setUserNameLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");

  const handleInputs = () => {
    setStyling("block");
  };

  const handleUserNameInputLogin = (event) => {
    setUserNameLogin(event.target.value);
  };

  const handlePassInputLogin = (event) => {
    setPassLogin(event.target.value);
  };

  // Check login credentials
  useEffect(() => {
    if (userNameLogin === "hamdy" && passLogin === "180552") {
      return <Home />;
    } else {
      // Handle incorrect username or password
      // For example, show an error message or redirect to a login page
      console.log("Incorrect username or password");
    }
  }, []);

  const loginStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    zIndex: "999",
  };

  const inputsLoginStyleing = {
    display: styling,
  };

  return (
    <main>
      {isDesktop ? (
        <Home />
      ) : (
        <div onClick={handleInputs} style={loginStyle}>
          This website doesn t support mobile devices.
          <input
            onChange={handleUserNameInputLogin}
            value={userNameLogin}
            style={inputsLoginStyleing}
            placeholder="Username"
          />
          <input
            onChange={handlePassInputLogin}
            value={passLogin}
            style={inputsLoginStyleing}
            placeholder="Password"
            type="password"
          />
        </div>
      )}
    </main>
  );
}
