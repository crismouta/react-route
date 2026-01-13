import { useContext } from "react"
import { CounterContext } from "../context/counter/CounterContext"

const Contact = () => {
    const {decrement} = useContext(CounterContext)
    return (
        <>
        <h2>Contact page</h2>
        <button onClick={decrement}>Decrementar</button>
        </>
    )
}

export default Contact