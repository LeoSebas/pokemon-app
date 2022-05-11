import {
  Box , createTheme, CssBaseline
} from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Landing } from "./pages";
import { useUser } from "./hooks/useUser";
import { ThemeProvider } from "@emotion/react";

import "./App.css";
import { CustomAppBar } from "./components/CustomAppBar";
import { View } from "./pages/View/View";
import { NotFound } from "./pages/NotFound/NotFound";



function App() {
  const [user, userChanged] = useUser();

  /// Credenciales válidad de inicio de sesión.
  const credentials = { email: "user@pokemon.com", password: "pokemon" };
  

  const theme = createTheme({
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{ height: "100vh", margin: "0", }}
      >
        {/** AppBar Component */}
        <CustomAppBar />
        <AuthProvider value={{ user, userChanged, credentials }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Landing />} />
              <Route path="/login" element={<Login />} />
              {user ? <Route path="/pokemon/:id" element={<View />}/>: null}
              <Route path="*" element={ <NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>

        {/** Footer Component */}
        <footer></footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
