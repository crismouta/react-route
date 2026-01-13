import { useContext } from "react"
import Component2 from "../../components/sections/Component2"
import { CounterContext } from "../../context/counter/CounterContext"

const Section2 = () => {
    const {increment} = useContext(CounterContext)
    return (
        <>
            <h2>Soy la Section2</h2>
            <button onClick={increment}>Incrementar</button>
            <Component2/>
        </>
    )
}

export default Section2