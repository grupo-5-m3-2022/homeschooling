import SearchInput from "../SearchField";
import { GrTemplate } from "react-icons/gr";
import { LessonsContentDiv } from "./styles";
import { useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function Lessons() {
    const history = useHistory();
    // const [bimestres, setBimestres] = useState([])

    // useEffect(() => {
    //     async function getUserAndBimestres() {
    //         await fetch('https://json-server-home-schooling.herokuapp.com/login', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 "password": "1234",
    //                 "email": "nerogameplays7@gmail.com"
    //             })
    //         })
    //         .then(response => response.json())
    //         .then(data => {localStorage.setItem("token", data.accessToken); localStorage.setItem("userId", data.user.id)})

    //         fetch('https://json-server-home-schooling.herokuapp.com/material', {
    //             headers: {
    //                 "Authorization": `Bearer ${localStorage.getItem("token")}`
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //     }

    //     getUserAndBimestres()
    // })

    return (
        <LessonsContentDiv>
            <div className="lessons-title">
                <h2>8° Ano do Ensino Fundamental</h2>
                <h3>Bem vindo, Tales!</h3>
            </div>
            <SearchInput options={[{valor: "portugues", texto: "Português"}]}/>
            <div>
                <ul className="lessons-cardList">
                    <li>
                        <div className="lessons-card">
                            <GrTemplate />
                            <div>
                                <h3>Bimestre 1</h3>
                                <h4>Turma 6</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="lessons-card">
                            <GrTemplate />
                            <div>
                                <h3>Bimestre 2</h3>
                                <h4>Turma 6</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="lessons-card">
                            <GrTemplate />
                            <div>
                                <h3>Bimestre 3</h3>
                                <h4>Turma 6</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="lessons-card">
                            <GrTemplate />
                            <div>
                                <h3>Bimestre 4</h3>
                                <h4>Turma 6</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </LessonsContentDiv>
    )
}