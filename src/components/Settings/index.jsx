import { useState } from "react";
import { TbUserCircle } from "react-icons/tb";
import { RiDoorLockLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import {
  Container,
  EditTab,
  InputContainer,
  InputsContainer,
  Option,
  SettingsTab,
} from "./style";
import { useUserStates } from "../Providers";
import api from "../../services/api";

export default function Settings() {
  const [selected, setSelected] = useState("nome");

  const { user } = useUserStates();

  const schema = yup.object({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(2, "Mínimo 2 carateres"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function changeData(data) {
    api
      .patch(`users/${user.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then(() => toast.success("Dados alterados com sucesso!"))
      .catch(() => toast.error("Algo deu errado!"));
  }

  return (
    <>
      <Container>
        <SettingsTab>
          <h1>Configurações</h1>

          <div>
            <Option
              selected={selected === "nome" ? true : false}
              onClick={() => setSelected("nome")}
            >
              <TbUserCircle color="#444444" size={20} /> Nome
            </Option>

            <Option
              selected={selected === "senha" ? true : false}
              onClick={() => setSelected("senha")}
            >
              <RiDoorLockLine color="#444444" size={20} /> Senha
            </Option>
          </div>
        </SettingsTab>

        <EditTab>
          {selected === "nome" ? (
            <>
              <h2>Alterar nome</h2>

              <InputsContainer>
                <InputContainer>
                  <label htmlFor="currentName">Nome atual:</label>

                  <input id="currentName" value={user?.name} disabled />
                </InputContainer>

                <form onSubmit={handleSubmit(changeData)}>
                  <InputContainer>
                    <label htmlFor="nome">Novo nome:</label>

                    <input id="nome" {...register("name")} />

                    {errors.name && <span>{errors.name.message}</span>}

                    {errors.password && <span>{errors.password.message}</span>}
                  </InputContainer>

                  <button type="submit">Enviar</button>
                </form>
              </InputsContainer>
            </>
          ) : (
            <>
              <h2>Alterar senha</h2>

              <InputsContainer>
                <form onSubmit={handleSubmit(changeData)}>
                  <InputContainer>
                    <label htmlFor="senha">Nova senha:</label>

                    <input
                      type="password"
                      id={selected}
                      {...register("password")}
                    />

                    {errors.password && <span>{errors.password.message}</span>}

                    {errors.name && <span>{errors.name.message}</span>}
                  </InputContainer>

                  <button type="submit">Enviar</button>
                </form>
              </InputsContainer>
            </>
          )}
        </EditTab>
      </Container>
    </>
  );
}
