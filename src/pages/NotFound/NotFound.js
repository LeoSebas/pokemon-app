import { Box, Button, Container, Typography } from "@mui/material";
import { height } from "@mui/system";
import { Link } from "react-router-dom";

import memeImg from "../../assets/meme-pokemon.jpg";

export function NotFound() {
  return (
    <Container
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
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h1">
                404 - Not Found
            </Typography>
            <Link to="/" >
                Back to homepage
            </Link>
        </Box>
      <Box
        sx={{
            width: "695px",
            height: "390px",    
          borderRadius: "20px",
          border: "5px solid rgba(255,255,255,1)",
          backgroundImage: `url(${memeImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center"
        }}
      ></Box>
    </Container>
  );
}
