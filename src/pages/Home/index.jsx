import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomeHeader, HomeUserSection, HomeTechSection } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CardTech } from "../../components/CardTech";
import { Modal } from "../../components/Modal";
import { ModalDeleteAndUpdate } from "../../components/ModalDeleteAndUpdate";
import { TechContext } from "../../contexts/TechContext";

export const HomePage = () => {
  const { validated, loading } = useContext(AuthContext);
  const { modal, setModal, techList, modalUpdate } = useContext(TechContext);
  const { name } = useParams();

  if (loading) {
    return null;
  }

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return validated ? (
    <>
      {modal && <Modal />}
      {modalUpdate && <ModalDeleteAndUpdate />}
      <HomeHeader>
        <h3>Kenzie Hub</h3>
        <div>
          <Link to="/" onClick={() => logout()}>
            Sair
          </Link>
        </div>
      </HomeHeader>
      <HomeUserSection>
        <h4>Olá, {name}</h4>
        <p>{validated.course_module}</p>
      </HomeUserSection>
      <HomeTechSection>
        <div>
          <h4>Tecnologias</h4>
          <div className="HomeIconAdd" onClick={() => setModal(true)}>
            +
          </div>
        </div>
        <ul>
          {techList.length ? (
            techList.map((tech) => (
              <CardTech
                key={tech.id}
                title={tech.title}
                status={tech.status}
                id={tech.id}
              />
            ))
          ) : (
            <li className="emptyBox">Não há tecnologias para exibir</li>
          )}
        </ul>
      </HomeTechSection>
    </>
  ) : (
    <Navigate to="/" />
  );
};
