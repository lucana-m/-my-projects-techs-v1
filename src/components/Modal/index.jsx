import { StyledModal } from "./style";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Modal = () => {
  const { setModal, submit } = useContext(TechContext);

  const registerTechSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerTechSchema) });

  return (
    <StyledModal>
      <form onSubmit={handleSubmit(submit)}>
        <div className="ModalHeader">
          <p>Cadastrar Tecnologia</p>
          <div className="ModalClose" onClick={() => setModal(false)}>
            X
          </div>
        </div>
        <div className="ModalBody">
          <label>Nome</label>
          <input type="text" {...register("title")} />
          {errors.title?.message && <p>{errors.title.message}</p>}
          <label>Selecionar status</label>
          <select name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && <p>{errors.status.message}</p>}
          <button type="submit">Cadastrar Tecnologia</button>
        </div>
      </form>
    </StyledModal>
  );
};
