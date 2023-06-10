import styled from "styled-components";

export const StyledCardTech = styled.li`
  background-color: var(--grey-4);
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  border-radius: 4px;

  .techTitle {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 0.9375rem;
  }

  .cardRightBox {
    width: max-content;
    display: flex;
    gap: 15px;
  }

  .techStatus {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 0.75rem;
  }
`;
