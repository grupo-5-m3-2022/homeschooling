import { BiBell } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineUser } from "react-icons/ai"
import { HeaderStyle } from "./styles"
import { useDashboardStates, useUserStates } from "../Providers"

export default function Header() {
    const { setShowSideBar } = useDashboardStates()
    const { user } = useUserStates()

    console.log(user)

    return (
        <HeaderStyle>
            <GiHamburgerMenu onClick={() => {if (setShowSideBar) setShowSideBar(actual => !actual)}} className="sidebar-switch" />
            <div className="header-container">
                <BiBell />
                <div className="header-user">
                    <AiOutlineUser />
                    <div>
                        <h3>{user?.name?.split(' ').slice(0, 2).join(' ')}</h3>
                        <h4>{user?.role}</h4>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}