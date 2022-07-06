import SearchInput from "../SearchField"
import { GrTemplate } from "react-icons/gr"

export default function Lessons() {
    return (
        <div>
                        <h2>8° Ano do Ensino Fundamental</h2>
                        <h3>Bem vindo, Tales!</h3>
                        <SearchInput options={[{valor: "portugues", texto: "Português"}]}/>
                        <div>
                            <ul>
                                <li>
                                    <div>
                                        <GrTemplate />
                                        <div>
                                            <h3>Bimestre 1</h3>
                                            <h4>Turma 6</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <GrTemplate />
                                        <div>
                                            <h3>Bimestre 2</h3>
                                            <h4>Turma 6</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <GrTemplate />
                                        <div>
                                            <h3>Bimestre 3</h3>
                                            <h4>Turma 6</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <GrTemplate />
                                        <div>
                                            <h3>Bimestre 4</h3>
                                            <h4>Turma 6</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
    )
}