import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { logIn, signUp } from "../../firebase/services/authService";
import styles from "./Main.css";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Додали стан завантаження
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true); // Встановлюємо завантаження
    try {
      await signUp(email, password);
      navigate("/discover");
    } catch (error_) {
      setError(error_.message);
    } finally {
      setLoading(false); // Завершуємо завантаження
    }
  };

  const handleLogIn = async () => {
    setLoading(true); // Встановлюємо завантаження
    try {
      await logIn(email, password);
      navigate("/discover");
    } catch (error_) {
      setError(error_.message);
    } finally {
      setLoading(false); // Завершуємо завантаження
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>

        <input
          type="text"
          placeholder="Enter your name"
          className={styles.inputField}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.inputField}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.inputField}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <select
          className={styles.inputField}
          value={team}
          onChange={(event) => setTeam(event.target.value)}
        >
          <option value="">Choose your team</option>
          <option>Ferrari</option>
          <option>Red Bull</option>
          <option>Mercedes</option>
          <option>Mclaren</option>
          <option>Williams</option>
          <option>Haas</option>
          <option>Alpine</option>
          <option>Racing Bulls</option>
          <option>Sauber</option>
        </select>

        <select
          className={styles.inputField}
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">Choose your status</option>
          <option>Fan</option>
          <option>Member of F1 team</option>
          <option>Other</option>
        </select>

        <button className={styles.signUpButton} onClick={handleSignUp} disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
        <button className={styles.logInButton} onClick={handleLogIn} disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
