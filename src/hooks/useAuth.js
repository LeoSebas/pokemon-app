import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth(){
    const authContext = useContext(AuthContext)

    if (authContext === undefined) {
        throw Error('useAuth se encuentra fuera del proveedor AuthProvider')
    }

    return authContext
}