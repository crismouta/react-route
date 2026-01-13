import useCounter from "../../custom-hooks/useCounter";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({children}) => {
    const {counter, decrement} = useCounter()

    return (
        <CounterContext.Provider value={{counter, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider