import { Aside, AsideFunction } from "./styles"
import { BiLoaderCircle } from "react-icons/bi"
import { BsFillPeopleFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { useDashboardStates } from "../Providers"
import { useHistory } from "react-router-dom"
import { FiSettings, FiClipboard } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { HiCubeTransparent } from "react-icons/hi"
import { useUserStates } from "../Providers"
import { useState } from "react"

export default function SideBar({asideFunctions, preset}) {
    const { selected, setSelected, showSideBar, setShowSideBar } = useDashboardStates()
    const { logOut } = useUserStates()
    const [animation, setAnimation] = useState('go')
    const history = useHistory()

    if (preset === 'Estudante') {
        asideFunctions = [
            ["Painel de controle", [[FiClipboard, 'Aulas'], [HiCubeTransparent, 'Desempenho']]],
            ["Suporte", [[FiSettings, "Configurações"], [AiOutlineInfoCircle, "Ajuda"]]]
        ]
    }
    else if (preset === "Professor (a)") {
        asideFunctions = [
            ["Painel de controle", [[BsFillPeopleFill, "Alunos"],[FiClipboard, 'Aulas'], [HiCubeTransparent, 'Desempenho']]],
            ["Suporte", [[FiSettings, "Configurações"], [AiOutlineInfoCircle, "Ajuda"]]]
        ]
    }

    return (
        <>
            <Aside show={showSideBar} animation={animation} onAnimationEnd={() => {if (animation === 'hide') {setAnimation("go"); setShowSideBar(false)}}}>
                <div className="aside-title">
                    <GiHamburgerMenu onClick={() => {setAnimation('hide')}} className="sidebar-switch" />
                    <BiLoaderCircle />
                    <h1>Home School</h1>
                </div>
                <nav className="aside-functions">
                    {
                        
                        Array.isArray(asideFunctions) && asideFunctions.map(([nomeSecao, abas], index) => (
                            <ul key={index}>
                                <li>
                                    <small>{nomeSecao.toUpperCase()}</small>
                                </li>
                                {
                                    abas?.map(([Icon, name], index) => (
                                        <AsideFunction key={index} onClick={() => {setSelected(name.toLowerCase()); history.push("/dashboard")}} selected={selected === name.toLowerCase()}>
                                            {
                                                Icon && <Icon />}
                                            {name}
                                        </AsideFunction>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </nav>
                <button onClick={logOut}>Deslogar</button>
            </Aside>
        </>
    )
}