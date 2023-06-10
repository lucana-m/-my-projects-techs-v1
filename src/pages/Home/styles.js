import styled from "styled-components";

export const HomeHeader = styled.header`
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.9375rem 0 0.9375rem;
  border-bottom: 1px solid var(--grey-1);

  h3 {
    color: var(--primary-focus);
    font-size: 1.375rem;
    font-weight: 600;
  }

  div {
    background-color: var(--grey-3);
    color: var(--grey-0);
    width: 20%;
    height: 2.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  @media (min-width: 900px) {
    padding: 0 15.625rem 0 15.625rem;

    div {
      width: 7%;
    }
  }
`;

export const HomeUserSection = styled.section`
  width: 100%;
  height: 8.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9375rem;
  padding-left: 0.9375rem;
  border-bottom: 1px solid var(--grey-1);

  h4 {
    color: var(--grey-0);
    font-size: 1.125rem;
    font-weight: 700;
  }

  p {
    color: var(--grey-1);
    font-size: 0.75rem;
    font-weight: 400;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    h4 {
      padding-left: 15.625rem;
    }

    p {
      padding-right: 15.625rem;
    }
  }
`;

export const HomeTechSection = styled.div`
  width: 92%;
  height: max-content;
  margin: 1.25rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;

  div {
    color: var(--grey-0);
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .HomeIconAdd {
    background-color: var(--grey-3);
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5625rem;
    border-radius: 4px;
    cursor: pointer;
  }

  ul {
    background-color: var(--grey-3);
    width: 100%;
    height: max-content;
    border-radius: 4px;
    padding: 1.375rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .emptyBox {
    background-color: var(--grey-4);
    color: var(--grey-0);
    width: 100%;
    height: 3rem;
    font-weight: 700;
    font-size: 0.9375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.75rem;
    border-radius: 4px;
  }

  @media (min-width: 900px) {
    width: 64%;

    ul {
      padding: 1.375rem 1.5rem;
    }
  }
`;
