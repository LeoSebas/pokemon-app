import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

import AshImage from "../../assets/pokemon-background.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Container
      component="div"
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "10px",
        height: "85vh",
      }}
    >
      <Logo />

      <Container component="section" sx={{ display: "inline-flex", flex: "2" }}>
        <Container
          component="article"
          sx={{
            flex: "3",
            backdropFilter: "blur(15px)",
            borderRadius: "10px",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Typography variant="h5">
            Pokemon Cards App es una aplicación para visualizar cartas pokemon.
          </Typography>
          <Typography variant="h5">
            Iniciá sesión para conocer todo acerca de los pokémon!!!
          </Typography>
        </Container>
        <Container
          component="aside"
          sx={{
            flex: "2",
            backdropFilter: "blur(15px)",
            borderRadius: "10px",
            margin: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "relative",
              alignSelf: "center",
            }}
          >
            <img src={AshImage} width="300px" height="200px" alt="ash" />
          </Box>
        </Container>
      </Container>
      <Box sx={{ flex: "1" }}>
        <Button variant="contained" onClick={() => navigate("/login")}>
          <Box sx={{ padding: "15px" }}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "'Unica One', cursive", fontStyle: "bold" }}
            >
              Iniciar sesión
            </Typography>
          </Box>
        </Button>
      </Box>
    </Container>
  );
}
