import { BiBell } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineUser } from "react-icons/ai"
import { HeaderStyle } from "./styles"

export default function Header({setShowSideBar}) {
    return (
        <HeaderStyle>
            <GiHamburgerMenu onClick={() => {if (setShowSideBar) setShowSideBar(actual => !actual)}} className="sidebar-switch" />
            {/* <SearchInput placeholder="Pesquisar..."/> */}
            <div className="header-container">
                <BiBell />
                <div className="header-user">
                    <AiOutlineUser />
                    <div>
                        <h3>Example Name</h3>
                        <h4>Example Role</h4>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}