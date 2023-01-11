import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
//import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Send login request to server
    // Hier könnte man dann zum Beispiel eine API-Anfrage an denpn Server senden,
    // um sich anzumelden. Wenn die Anmeldung erfolgreich war, könnte man dann
    // mit "setIsLoggedIn(true)" den "isLoggedIn"-Status auf "true" setzen und
    // mit <NavLink to="/dashboard"> zu einer Dashboard-Seite weiterleiten.
    navigate("/");
  };

  return (
    <form
      className="login-form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyItems={"center"}
        sx={{ border: 1, borderColor: "grey.300", padding: 3, borderRadius: 1 }}
      >
        <TextField
          label="E-Mail"
          type="email"
          value={email}
          sx={{ marginBottom: "20px" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className="login-pass"
          label="Passwort"
          type="password"
          value={password}
          sx={{ marginBottom: "20px" }}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          className="login-btn"
          variant="contained"
          type="submit"
          size="large"
          startIcon={<LoginIcon />}
        >
          Anmelden
        </Button>
      </Grid>
    </form>
  );
};

export default LoginPage;
