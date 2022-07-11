import { Aside, AsideFunction } from "./styles"
import { BiLoaderCircle } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { useDashboardStates } from "../Providers"
import { useHistory } from "react-router-dom"

export default function SideBar({asideFunctions}) {
    const { selected, setSelected, showSideBar, setShowSideBar } = useDashboardStates()
    const history = useHistory()

    return (
        <>
            <Aside show={showSideBar}>
                <div className="aside-title">
                    <GiHamburgerMenu onClick={() => {setShowSideBar(false)}} className="sidebar-switch" />
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
            </Aside>
        </>
    )
}