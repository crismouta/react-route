import { useState, useEffect, useContext } from "react"
import { api } from "../../services/api"
import { CounterContext } from "../../context/counter/CounterContext"


const Coder = () => {
    const { counter } = useContext(CounterContext);
    const [coders, setCoders] = useState([
    ])

    const [form, setForm] = useState({ name: "", age: "" })

    const apiCoders = api();

    //acoplamiento
    useEffect(() => {
        /* fetch("http://localhost:3000/patata")
        .then(response => response.json())
        .then(data => setCoders(data))
        .catch(error => console.log("fallo conexion", error)) */
        apiCoders.getCoders().then(data => {
            console.log(data)
            setCoders(data)
        })

    }, [])

    const handleChange = (event) => {
        /* console.log(event.target.value) */
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmmit = (event) => {
        event.preventDefault()
        /* setCoders([
            ...coders,
            form
        ]) */
        apiCoders.addCoder(form)
            .then(response => setCoders([...coders, response]))

    }

    return (
        <>
            <h2>{counter}</h2>
            <form onSubmit={handleSubmmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Edad</label>
                    <input type="text" name="age" id="age" onChange={handleChange} />
                </div>
                <button type="submmit">Crear Coder</button>
            </form>
            {
                coders.map((coder) => (
                    <div key={coder.id} id={coder.name} className="card">
                        <p> {coder.name} </p>
                        <p> {coder.age} </p>
                    </div>
                ))
            }
        </>
    )
}

export default Coder