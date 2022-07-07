import { Link } from "react-router-dom";
import styled from "styled-components";

import FormImage from "../../assets/form-user.svg";

export const Container = styled.div`
  min-height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(0, 117, 255, 0.48) 0%,
    rgba(242, 205, 251, 0.58) 70.84%
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

export const LinkStyle = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #666666;

  text-decoration: none;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;

  background-color: #e6e6e6;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14.5px;

  padding-left: 23.95px;

  input {
    background: transparent;

    border: 0;

    &::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #666666;
    }
  }

  @media (min-width: 425px) {
    gap: 17px;

    padding-left: 28px;
  }
`;

export const Image = styled.div`
  @media (min-width: 1024px) {
    flex: 1;

    background: url(${FormImage}) no-repeat;
  }
`;
