import { Aside, AsideFunction } from "./styles"
import { BiLoaderCircle } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

export default function SideBar({asideFunctions, open, setOpen, show, setShow}) {
    return (
        <>
            <Aside show={show}>
                <div className="aside-title">
                    <GiHamburgerMenu onClick={() => {setShow(false)}} className="sidebar-switch" />
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
                                        <AsideFunction key={index} onClick={() => {setOpen(name.toLowerCase())}} selected={open === name.toLowerCase()}>
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