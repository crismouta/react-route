import { useContext } from "react"
import { UserContext } from "../../context/user/UserContext"

const Component1 = () => {
    const user = useContext(UserContext);
    return (
        <div>Hola {user} Soy el Componente 1</div>
    )
}

export default Component1