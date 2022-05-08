import './App.css';
import { useState } from 'react';
import { Container } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Home, Login, Landing } from './pages'



function App() {

  /// Recupero el usuario del localstora si existe
  const initialUser = window.localStorage.getItem('user')


  /// const navigate = useNavigate()

  const [user, setUser] = useState(initialUser)


  function userChanged(user) {
    setUser(user)
    window.localStorage.setItem('user', JSON.stringify(user))
  }



  return (
    <Container >
      <AuthProvider value={{user, userChanged}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Landing />} />
            <Route path='/login' element={ <Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Container>
  );
}

export default App;
