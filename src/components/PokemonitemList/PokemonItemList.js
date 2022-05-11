import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemon } from "../../services/pokemons";

export function PokemonItemList({ name, url, index }) {
  /// Url base para obtener las imágenes
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    const navigate = useNavigate()

  function onClickItem(){
    navigate(`pokemon/${index}`)
  }


  return (
    <Box onClick={onClickItem} maxWidth="xs" sx={{background:"white", margin:"10px", border:"solid 5px", borderRadius: "10px"}}>
      <Typography variant="h5">{name ?? "nombre?"}</Typography>
      <Box>
        <img width="100px" height="100px" src={`${baseUrl}${index}.png`} alt="Loading pokemon..."/>
      </Box>
    </Box>)


}
