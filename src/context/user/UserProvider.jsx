//responsable por enviar la informacion para donde yo decida que debe ir
import { UserContext } from "./UserContext";

const UserProvider = ({children}) => {
    const patata = "Manon";
    console.log(children)
    return (
        <UserContext.Provider value={patata}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider