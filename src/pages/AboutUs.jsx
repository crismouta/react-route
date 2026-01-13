import { useContext } from "react"
import { CounterContext } from "../context/counter/CounterContext"

const AboutUs = () => {
    const {increment} = useContext(CounterContext);
    return (
        <>
        AboutUs page
        <button onClick={increment}>Incrmentar</button>
        </>
    )
}

export default AboutUs