import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TechProvider } from "./TechContext";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [validated, setValidated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setValidated(data);
        setTechs(data.techs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const onSubmit = (data) => {
    async function login() {
      try {
        const response = await api.post("/sessions", data);

        localStorage.setItem("@USERID", response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.token);

        setValidated(response.data.user);

        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

        navigate(`/home/${response.data.user.name}`);
      } catch (error) {
        console.error(error);
      }
    }

    login();
  };

  return (
    <AuthContext.Provider
      value={{ onSubmit, validated, setValidated, loading, techs, setTechs }}
    >
      <TechProvider>{children}</TechProvider>
    </AuthContext.Provider>
  );
};
