import { Box, Container, Typography } from "@mui/material";

export function PokemonCard({ pokemon }) {
  return (
    <Container
      maxWidth="sm"
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "800px",
        borderRadius: "50px",
        border: "15px solid rgba(255,255,255,0.7)",
        backgroundColor: `${pokemon.color.name ?? "rgba(255,255,255,0.5)"}`,
        alignItems: "center",
        padding:"10px"
      }}
    >
      <Box sx={{ flex: "3" }}>
        <Typography variant="h2">{`${pokemon.name}`}</Typography>
      </Box>
      <Box sx={{ position: "fixed", align: "center", marginTop:"50px" }}>
        <img
        width="300px" heigth="300px"
          src={`${pokemon.sprites.other["official-artwork"].front_default}`}
          alt="Cargando imagen..."
        />
      </Box>
      <Box
        sx={{
          flex: "5",
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box sx={{ flex: "1" }}>
          <Typography variant="h3">{`${pokemon.name}`}</Typography>
        </Box>
      </Box>
    </Container>
  );
}
