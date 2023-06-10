import { StyledCardTech } from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export const CardTech = ({ title, status, id }) => {
  const { setModalUpdate } = useContext(TechContext);

  return (
    <StyledCardTech>
      <p className="techTitle">{title}</p>
      <div className="cardRightBox">
        <p className="techStatus">{status}</p>
        <button id={id} onClick={() => setModalUpdate(true)}>
          <FaTrashAlt color="#F8F9FA" />
        </button>
      </div>
    </StyledCardTech>
  );
};
