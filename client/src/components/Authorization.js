import { useState } from "react";
import { useCookies } from "react-cookie";

const Authorization = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);
  console.log(cookies);
  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    if (data.detail) {
      setError(data.detail);
    } else {
      setCookie("Email", data.email);
      setCookie("AuthToken", data.token);

      window.location.reload();
    }
  };

  return (
    <div className="authContainer">
      <div className="authContainerBox">
        <form>
          <h2>{isLogin ? "Please log in" : "Please sign up"}</h2>
          <label for="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label for="confirm-password"></label>
          {!isLogin && (
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <label for="submit"></label>
          <input
            type="submit"
            id="submit"
            className="authSubmit"
            onClick={(e) => handleSubmit(e, isLogin ? "login" : "signup")}
          ></input>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="authOptions">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogin ? "transparent" : "rgb(188,188,188)",
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: isLogin ? "transparent" : "rgb(188,188,188)",
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
