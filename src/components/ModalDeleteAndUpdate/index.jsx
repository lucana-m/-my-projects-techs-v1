import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledModalUpdate } from "./style";

export const ModalDeleteAndUpdate = () => {
  const { setModalUpdate } = useContext(TechContext);

  const { register, handleSubmit } = useForm();

  return (
    <StyledModalUpdate>
      <form onSubmit={handleSubmit()}>
        <div className="ModalHeader">
          <p>Tecnologia Detalhes</p>
          <div className="ModalClose" onClick={() => setModalUpdate(false)}>
            X
          </div>
        </div>
        <div className="ModalBody">
          <label>Nome do projeto</label>
          <input type="text" {...register("title")} />
          <label>Status</label>
          <select name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="modalButtons">
            <button className="update" type="submit">
              Salvar alterações
            </button>
            <button className="delete">Excluir</button>
          </div>
        </div>
      </form>
    </StyledModalUpdate>
  );
};
