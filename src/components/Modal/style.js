import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 2rem -8px rgba(0, 0, 0, 0.25);

  form {
    background-color: var(--grey-3);
    width: 92%;
    height: max-content;
    border-radius: 3.5px;
  }

  .ModalHeader {
    background-color: var(--grey-2);
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem;
    font-weight: 700;
    font-size: 0.875rem;
    border-radius: 3.5px 3.5px 0 0;
  }

  p {
    color: var(--grey-0);
  }

  .ModalClose {
    color: var(--grey-1);
    cursor: pointer;
  }

  .ModalBody {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    padding: 0.9375rem;
  }

  label {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--grey-0);
  }

  input,
  select {
    width: 100%;
    height: 2.375rem;
    background-color: var(--grey-2);
    color: var(--grey-0);
    padding-left: 0.625rem;
    border: 1px solid var(--grey-0);
    border-radius: 3.5px;
  }

  button {
    background-color: var(--primary);
    color: #ffffff;
    width: 100%;
    height: 2.375rem;
    font-weight: 500;
    font-size: 0.75rem;
    border: 1px solid var(--primary);
    border-radius: 4px;
    margin-bottom: 0.625rem;
    margin-top: 0.3125rem;
  }

  @media (min-width: 900px) {
    form {
      width: 25%;
    }

    .ModalBody {
      padding: 0.9375rem 1.25rem;
    }

    button {
      margin-top: 0.625rem;
    }
  }
`;
