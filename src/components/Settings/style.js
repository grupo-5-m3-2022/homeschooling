import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  padding: 1.3rem;

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

export const SettingsTab = styled.section`
  width: 40%;
  max-width: 175.8px;

  background-color: #f6f6f6;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 0;

  border-radius: 10px 0px 0px 10px;

  h1 {
    font-size: 14px;
    font-weight: 500;

    margin-left: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Option = styled.button`
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8.3px;

  background-color: ${(props) => (props.selected ? "#e5e5e5" : "inherit")};

  border: 0;

  font-size: 12px;
`;

export const EditTab = styled.section`
  width: 60%;
  max-width: 414.2px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #fffdfd;

  padding: 20px 8px;

  border-radius: 0px 10px 10px 0px;

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  form {
    height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      width: 108px;
      height: 33px;

      background-color: #0095ff;

      border: 0;
      border-radius: 5px;

      align-self: flex-end;

      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  label {
    font-size: 12px;
  }

  input {
    width: 100%;
    max-width: 161px;
    height: 25px;

    border: 1px solid #bababa;
    border-radius: 5px;

    font-size: 10px;
  }

  span {
    font-size: 12px;
    color: #fa4b00;
  }
`;
