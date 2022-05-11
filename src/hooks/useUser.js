import { useState } from "react";

/// Hook para el manejo del usuario logueado
export function useUser() {

  /// Recupero el usuario del LocalStorage si existe
  const initialUser = JSON.parse(window.localStorage.getItem("user"));
  /// State para el usuario
  const [user, setUser] = useState(initialUser);

  function userChanged(user) {
    /// Si el usuario es null se considera como un LogOut.
    setUser(user);
    user
      ? window.localStorage.setItem("user", JSON.stringify(user))
      : window.localStorage.removeItem("user");
  }

  return [user, userChanged];
}
