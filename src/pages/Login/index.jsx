import {
  Button,
  ButtonLink,
  Container,
  Content,
  FormContainer,
  Image,
  InputContainer,
  LinkStyle,
} from "../../components/Form/style";
import { GlobalStyle } from "../../style/global";

import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export default function Login() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <FormContainer>
          <Content>
            <Image />

            <form>
              <h1>Área do Usuário</h1>

              <div className="inputContainer">
                <InputContainer>
                  <AiOutlineMail color="#666666" size={24} />

                  <input placeholder="Email" />
                </InputContainer>

                <InputContainer>
                  <AiFillLock color="#666666" size={24} />

                  <input placeholder="Senha" type="password" />
                </InputContainer>
              </div>

              <div className="buttonContainer">
                <Button color="#509ffe" type="submit">
                  ENTRAR
                </Button>

                <ButtonLink to="/signUp">
                  <Button color="#57b846">CADASTRAR</Button>
                </ButtonLink>

                <LinkStyle to="/">Esqueceu sua senha?</LinkStyle>
              </div>
            </form>
          </Content>
        </FormContainer>
      </Container>
    </>
  );
}
