import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [peticion, setPeticion] = useState('');
    const [persona, setPersonas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(cliente).length > 0) {
            setNombre(cliente.nombre)
            setApellidos(cliente.apellidos)
            setEmail(cliente.email)
            setFecha(cliente.fecha)
            setHora(cliente.hora)
            setPeticion(cliente.peticion)
            setPersonas(cliente.persona)
        }
    }, [cliente])




    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if ([nombre, apellidos, hora, email, persona, fecha].includes('')) {

            setError(true)
            return;
        }

        setError(false)


        // Objeto de Cliente
        const objetoCliente = {
            nombre,
            apellidos,
            email,
            fecha,
            hora,
            persona,
            peticion
        }

        if (cliente.id) {
            // Editando el Registro
            objetoCliente.id = cliente.id
            const clientesActualizados = clientes.map(clienteState => clienteState.id === cliente.id ? objetoCliente : clienteState)

            setClientes(clientesActualizados)
            setCliente({})

        } else {
            // Nuevo registro
            objetoCliente.id = generarId();
            setClientes([...clientes, objetoCliente]);
        }

        // Reiniciar el form
        setNombre('')
        setApellidos('')
        setEmail('')
        setFecha('')
        setHora('')
        setPersonas('')
        setPeticion('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Añadir Reserva</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade y administra tus <span className='text-green-500 font-bold'>Reservas</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-green-500 uppercase font-bold">
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="apellidos" className="block text-green-500 uppercase font-bold">
                        Apellidos
                    </label>
                    <input
                        id="apellidos"
                        type="text"
                        placeholder="Apellidos del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-green-500 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-green-500 uppercase font-bold">
                        Fecha
                    </label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="hora" className="block text-green-500 uppercase font-bold">
                        Hora
                    </label>
                    <input
                        id="hora"
                        type="time"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="persona" className="block text-green-500 uppercase font-bold">
                    ¿Para cuantas personas?
                    </label>
                    <input
                        id="persona"
                        type="number"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={persona}
                        onChange={(e) => setPersonas(e.target.value)}
                        min='1'
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="peticion" className="block text-green-500 uppercase font-bold">
                        Peticiones especiales
                    </label>
                    <textarea
                        id="peticion"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Introduce cualquier petición especial"
                        value={peticion}
                        onChange={(e) => setPeticion(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-green-700 w-full p-3 text-white uppercase font-bold hover:bg-green-500 cursor-pointer transition-colors mb-5"
                    value={cliente.id ? 'Editar' : 'Confirmar'}
                />
            {error && <Error><p>Faltan campos por rellenar</p></Error>}
            </form>
        </div>
    )
}

export default Formulario
