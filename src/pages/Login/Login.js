import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  /// State de credenciales incorrectas
  const [badCred, setBadCred] = useState(false);

  /// State Email
  const [email, setEmail] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  /// State Password
  const [password, setPassword] = useState("");

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  /// Context de autenticación
  const { user, userChanged, credentials } = useAuth();

  /// Navigate para redireccionar
  const navigate = useNavigate();

  function onSignIn() {
    email === credentials.email && password === credentials.password
      ? userChanged({ email: `${email}` })
      : setBadCred(true);
  }

  useEffect(
    /// Si ya inició sesión redirecciona a la página principal.
    () => (user ? navigate("/") : undefined),
    [user, navigate]
  );

  return (
    <Container
    sx={{
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "rgba(255,255,255,0.3)",
      borderRadius: "10px",
      height: "85vh",
    }}
    >
      <Container
        component="form"
        maxWidth="sm"
        sx={{
          position: "relative",
          flexDirection: "column",
          backgroundColor: "white",
          maxWidth: "max-content",
          alignSelf: "center",
        }}
      >
        <Typography variant="h">Iniciar sesión</Typography>
        <TextField
          id="outlined"
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <TextField
          id="outlined"
          label="Contraseña"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={onChangePassword}
          error={false}
        />
        <Typography variant="subtitle1" sx={{display: badCred ? 'block' : 'none'}}>
          Credenciales incorrectas
        </Typography>
        <Button variant="contained" onClick={onSignIn} margin="normal">
          Ingresar
        </Button>
      </Container>
    </Container>
  );
}
