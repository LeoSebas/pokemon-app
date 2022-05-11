import { Container, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { getPokemon, getPokemonColor } from "../../services/pokemons";

export function View( {urlImg}) {
    const { id } = useParams()

    const [pokemon, setPokemon] = useState()
    
    useEffect( () => {
        async function _getPokemon(_id) {
            try {
                const _pokemon = await getPokemon(_id)
                const { color } = await getPokemonColor(_id)
                setPokemon({ ..._pokemon, color})
            } catch (error) {
                console.log(error)
            }
        }
        _getPokemon(id)
    }, [setPokemon, id]
    )
    return pokemon ? (
        <Container sx={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "10px",
            height: "85vh",
        }}>
            <PokemonCard pokemon={pokemon} />
        </Container>
    ) : (
        <Skeleton variant="rectangular"></Skeleton>
    )
}