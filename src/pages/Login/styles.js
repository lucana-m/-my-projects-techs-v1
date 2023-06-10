import styled from "styled-components";

export const LoginLogo = styled.h3`
  color: var(--primary-focus);
  font-size: 1.375rem;
  font-weight: 600;
  margin-top: 30%;
  text-align: center;

  @media (min-width: 900px) {
    margin-top: 5%;
  }
`;

export const LoginBox = styled.div`
  width: 90%;
  height: max-content;
  background-color: var(--grey-3);
  margin-top: 0.9375rem;
  margin-left: 4.8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  .LoginBottomBox {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5625rem;
    margin-bottom: 1.25rem;
  }

  small {
    color: var(--grey-1);
  }

  .loginBoxLink {
    background-color: var(--grey-1);
    color: var(--grey-0);
    width: 100%;
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--grey-1);
    border-radius: 3px;
  }

  @media (min-width: 900px) {
    width: 25%;
    margin: 1.5625rem auto auto auto;

    .loginBoxLink:hover {
      background-color: var(--primary);
      border: 1px solid var(--primary);
    }
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;

  p {
    color: var(--grey-0);
    text-align: center;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
  }

  label {
    color: var(--grey-0);
    margin-bottom: 0.625rem;
  }

  input {
    background-color: var(--grey-2);
    color: var(--grey-0);
    height: 2.375rem;
    margin-bottom: 1.0625rem;
    border: 1px solid var(--grey-0);
    border-radius: 3px;
    font-size: 0.875rem;
    font-weight: 400;
    padding-left: 0.625rem;
  }

  button {
    background-color: var(--primary);
    color: #ffffff;
    height: 2.375rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 3px;
    margin-bottom: 2.1875rem;
  }
`;
