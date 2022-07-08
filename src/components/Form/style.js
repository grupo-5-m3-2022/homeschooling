import { Link } from "react-router-dom";
import styled from "styled-components";

import FormImage from "../../assets/form-user.svg";

export const Container = styled.div`
  min-height: 100vh;

  background: rgb(242, 205, 251);
  background: linear-gradient(
    0deg,
    rgba(242, 205, 251, 1) 0%,
    rgba(0, 117, 255, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.main`
  width: 90%;
  max-width: 954px;

  border-radius: 8px;

  padding: 20px;

  background-color: #fefefe;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 69px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 452px;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 278px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
      font-size: 20px;
      font-weight: 600;
      color: #333333;
      text-align: center;
    }

    .inputContainer,
    .buttonContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 11px;

      span {
        font-weight: 500;
        color: #fa4b00;

        align-self: flex-start;
      }
    }
  }

  @media (min-width: 425px) {
    form {
      width: 325px;
    }
  }

  @media (min-width: 1024px) {
    align-items: stretch;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${(props) => props.color};

  border: 0;
  border-radius: 50px;

  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;

export const ButtonLink = styled(Link)`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;
  position: relative;

  background-color: #e6e6e6;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    left: 20%;

    pointer-events: none;
  }

  input {
    width: 100%;
    height: 100%;

    background: transparent;
    padding: 14px 24px 14px 35%;

    border-radius: 50px;
    border: 0;

    &::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #666666;
    }
  }
`;

export const Image = styled.div`
  @media (min-width: 1024px) {
    flex: 1;

    background: url(${FormImage}) no-repeat;
  }
`;
