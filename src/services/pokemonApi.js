import axios from "axios";

const POKEMON_API = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000,
});

POKEMON_API.interceptors.request.use(
  (config) => {
    /// Token "ficticio" para las request
    
    config.headers = { ...config.headers, "pokemon-auth": `token` };

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

POKEMON_API.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {

    console.log(error);
    if (error.response.status === 401) {
        /// Sesión expirada o user no autenticado, redireccionar a Landing.
        console.log('Sesión expirada')
    }

    return Promise.reject({
      message: "Error en la respuesta del servidor.",
      status: error.response.status,
      serverMessage: error.response?.data?.message
    });
  }
);

export { POKEMON_API };
