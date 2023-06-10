import styled from "styled-components";

export const RegisterHeader = styled.header`
  width: 100%;
  height: 2.1875rem;
  display: flex;
  padding: 0 0.9375rem 0 0.9375rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
  margin-top: 1.875rem;

  h3 {
    color: var(--primary-focus);
    font-size: 1.375rem;
    font-weight: 600;
  }

  div {
    background-color: var(--grey-3);
    color: var(--grey-0);
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  @media (min-width: 900px) {
    width: 25%;
    margin: 1.875rem auto 1.875rem auto;
    padding: 0;
  }
`;

export const FormRegister = styled.form`
  background-color: var(--grey-3);
  width: 93%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin: auto auto 1.25rem auto;
  gap: 0.625rem;
  padding: 1.0625rem;
  box-shadow: 0px 0.1875rem 2rem -0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.1875rem;

  div {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    text-align: center;
    margin: 1.5625rem auto 0.625rem auto;
  }

  div > p {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--grey-0);
  }

  div > small {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--grey-1);
  }

  label {
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--grey-0);
  }

  input {
    height: 2.5rem;
    padding-left: 0.625rem;
    color: var(--grey-1);
    border: 1px solid var(--grey-2);
    border-radius: 3px;
    background-color: var(--grey-2);
  }

  select {
    height: 2.5rem;
    color: var(--grey-1);
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  button {
    height: 2.375rem;
    background-color: var(--primary-negative);
    margin-top: 5px;
    color: #ffffff;
    border: 1px solid var(--primary-negative);
    border-radius: 3px;
    font-size: 0.9375rem;
    font-weight: 500;
  }

  @media (min-width: 900px) {
    width: 25%;

    button:hover {
      background-color: var(--primary);
      border: 1px solid var(--primary);
    }
  }
`;
