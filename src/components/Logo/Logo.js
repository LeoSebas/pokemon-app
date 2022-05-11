import { Box, Container, Typography } from "@mui/material";
import LogoImage from "../../assets/pokemon-logo.png";

export function Logo() {
  return (
    <Container
      sx={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px"
      }}
    >
      <img width="500px" src={LogoImage} alt="F" />
      <Typography
        variant="h1"
        sx={{ fontFamily: "'Unica One', cursive", fontStyle: "bold" }}
      >
        Pokemon Cards App
      </Typography>
    </Container>
  );
}