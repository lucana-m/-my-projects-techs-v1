import { createContext, useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setTechList(data.techs);
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, []);

  const submit = (data) => {
    async function registerTech() {
      try {
        const response = await api.post("/users/techs", data);

        setModal(false);
      } catch (error) {
        console.error(error);
      }
    }

    registerTech();
  };

  return (
    <TechContext.Provider
      value={{ modal, setModal, submit, techList, modalUpdate, setModalUpdate }}
    >
      {children}
    </TechContext.Provider>
  );
};
