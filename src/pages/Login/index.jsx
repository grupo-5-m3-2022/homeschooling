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

import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function login(data) {
    console.log(data);
  }

  return (
    <>

      <Container>
        <FormContainer>
          <Content>
            <Image />

            <form onSubmit={handleSubmit(login)}>
              <h1>Área do Usuário</h1>

              <div className="inputContainer">
                {errors.email && <span>{errors.email.message}</span>}

                <InputContainer>
                  <AiOutlineMail color="#666666" size={24} />

                  <input placeholder="Email" {...register("email")} />
                </InputContainer>

                {errors.password && <span>{errors.password.message}</span>}

                <InputContainer>
                  <AiFillLock color="#666666" size={24} />

                  <input
                    placeholder="Senha"
                    type="password"
                    {...register("password")}
                  />
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
