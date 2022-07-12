import { createContext, useState, useContext } from "react";

const DashboardStatesContext = createContext({})
const SiteUserStatesContext = createContext({})
const AnimationsStatesContext = createContext({})

export function useUserStates() {
    return (
        useContext(SiteUserStatesContext)
    )
}

export function useDashboardStates() {
    return (
        useContext(DashboardStatesContext)
    )
}

export function useAnimationStates() {
    return (
        useContext(AnimationsStatesContext)
    )
}

export default function Providers({children}) {
    const [selected, setSelected] = useState("aulas");
    const [showSideBar, setShowSideBar] = useState(false)
    const [user, setUser] = useState({})

    const [lessonsAnimation, setLessonsAnimation] = useState("go")
    const [bimesterAnimation, setBimesterAnimation] = useState("go")
    const [articleAnimation, setArticleAnimation] = useState("go")
    
    return (
        <SiteUserStatesContext.Provider value={{user, setUser}}>
            <DashboardStatesContext.Provider value={{selected, setSelected, showSideBar, setShowSideBar}}>
                <AnimationsStatesContext.Provider value={{lessonsAnimation, setLessonsAnimation, bimesterAnimation, setBimesterAnimation, articleAnimation, setArticleAnimation}}>
                    { children }
                </AnimationsStatesContext.Provider>
            </DashboardStatesContext.Provider>
        </SiteUserStatesContext.Provider>
    )
}