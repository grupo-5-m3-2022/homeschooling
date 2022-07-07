import React from 'react'
import { Background, Container, Content, ImageContainer, ImageDiv, InputContainer } from './styles'
import { AiOutlineMail, AiOutlineUser, AiOutlineLock, AiOutlineInfoCircle } from 'react-icons/ai'

export default function SignUp() {
    return (
        <Background>
            <Container>
                <Content>
                    <form>
                        <h2>Cadastrar Usuario</h2>
                        <InputContainer>
                            <AiOutlineUser />
                            <input placeholder='Nome'/>
                        </InputContainer>
                        <InputContainer>
                            <AiOutlineMail />
                            <input placeholder='Email'/>
                        </InputContainer>
                        <InputContainer>
                            <AiOutlineLock />
                            <input type="password" placeholder='Senha'/>
                        </InputContainer>
                        <InputContainer>
                            <AiOutlineLock />
                            <input type="password" placeholder='Confirmar Senha'/>
                        </InputContainer>
                        <InputContainer>
                            <AiOutlineInfoCircle />
                            <input placeholder='Estudante'/>
                        </InputContainer>
                        <InputContainer>
                            <AiOutlineInfoCircle />
                            <input placeholder='1º Ano EF I'/>
                        </InputContainer>
                        <button>CADASTRAR</button>
                        <p>Voltar para login</p>
                    </form>
                    <ImageDiv>
                        <ImageContainer />
                    </ImageDiv>
                </Content>
            </Container>
        </Background>
    )
};