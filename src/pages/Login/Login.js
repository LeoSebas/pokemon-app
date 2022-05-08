import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"

export default function Login() {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => user ? navigate('/', {replace : true}) : undefined, [user, navigate])

    return <Container>
        <h1>Login Page</h1>
    </Container>
}