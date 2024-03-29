import { createContext, useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

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
    const history = useHistory()

    const [selected, setSelected] = useState("aulas");
    const [showSideBar, setShowSideBar] = useState(false)
    const [user, setUser] = useState({})

    const [lessonsAnimation, setLessonsAnimation] = useState("go")
    const [bimesterAnimation, setBimesterAnimation] = useState("go")
    const [articleAnimation, setArticleAnimation] = useState("go")

    async function verifyUser() {

        if (user?.logged) {
            return true
        }

        if (localStorage.getItem("@token") && localStorage.getItem("@userId")) {
            let res = await api.get(`users/${localStorage.getItem("@userId")}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("@token")}`
                }
            })
            .then(async (response) => {
                const {ano, email, name, position, professors, id} = response.data
                if (position.toLowerCase() === 'estudante') {
                    setUser({ano, email, name, position, professors, id, logged: true})
                }
                else if (position.toLowerCase().includes('professor')) {
                    await api.get(`/connections`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("@token")}`
                        },
                        params: {
                            professorEmail: email
                        }
                    })
                    .then(response => {
                        const alunos = response.data.length > 0 ? response.data[0].students : response.data
                        setUser({email, name, position, id, alunos, logged: true})
                    })
                }

                return true
            })
            .catch(() => false)
            
            return res
        }

        return false
    }

    function logOut() {
        localStorage.clear()
        setUser({})
        history.push('/')
    }
    
    return (
        <SiteUserStatesContext.Provider value={{user, setUser, verifyUser, logOut}}>
            <DashboardStatesContext.Provider value={{selected, setSelected, showSideBar, setShowSideBar}}>
                <AnimationsStatesContext.Provider value={{lessonsAnimation, setLessonsAnimation, bimesterAnimation, setBimesterAnimation, articleAnimation, setArticleAnimation}}>
                    { children }
                </AnimationsStatesContext.Provider>
            </DashboardStatesContext.Provider>
        </SiteUserStatesContext.Provider>
    )
}