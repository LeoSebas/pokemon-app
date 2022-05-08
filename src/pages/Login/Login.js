import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"

export default function Login() {

    /// Usuario actual o null si no existe.
    const {user} = useContext(AuthContext)

    /// Navigate para redireccionar
    const navigate = useNavigate()

    useEffect(
        /// Ternario para redireccionar a la pagina principal si ya inicio sesión
        () => user ? navigate('/') : undefined
        , [user, navigate])

    return <Container>
        <h1>Login Page</h1>
    </Container>
}