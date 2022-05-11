import { Button, Container, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PokemonItemList } from "../../components/PokemonitemList/PokemonItemList";
import { AuthContext } from "../../context/AuthContext";
import { getPokemons } from "../../services/pokemons";

export default function Home() {

    const { user , userChanged } = useContext(AuthContext)

    const [pokemons, setPokemons] = useState([])
    const [nroPage, setNroPage ] = useState(1)
    const [lastPage, setLastPage ] = useState(false)
 
    useEffect(() => {
        async function showPokemons() {
            try {
                const { results , next} = await getPokemons(nroPage)
                next? setLastPage(false) : setLastPage(true)
                setPokemons(results)
            } catch (error) {
                console.log(error)
            }
        }
      showPokemons()
    }, [nroPage]);

    function onClickPrev() {
        if(nroPage>1){setNroPage(nroPage-1)}
    }

    function onClickNext(){
        if(!lastPage){setNroPage(nroPage+1)}
    }


    return <Container>
        <h1>Home Page {`Usuario ${user.email}`}</h1>
        <Container maxWidth="min-content" sx={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", alignItems:"center" }}>
            {pokemons.map(({name , url } ,i)=> {
                return <PokemonItemList name={name} url = {url} index={(i+1)+((nroPage-1)*20)}  key={i}/>
            })}
        </Container>
        <Container sx={{display: "inline-flex", flexDirection:"row", alignItems:"center"}}>
            <Button disabled={nroPage<=1} onClick={onClickPrev} variant="contained">Anterior</Button>
            <Box variant="span">{`Página N° ${nroPage}`}</Box>
            <Button disabled={lastPage} onClick={onClickNext} variant="contained">Siguiente</Button>
        </Container>

        <Button onClick={() => userChanged()}>
            Cerrar Sesión
        </Button>

    </Container>
}