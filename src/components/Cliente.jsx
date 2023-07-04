const Cliente = ({cliente, setCliente, eliminarCliente}) => {
    const { nombre, apellidos, email, fecha, hora, persona, peticion, id } = cliente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este cliente?');

        if(respuesta) {
            eliminarCliente(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-green-500 uppercase">Nombre: {''}
                <span className="font-normal text-gray-700 normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-green-500 uppercase">Apellidos: {''}
                <span className="font-normal text-gray-700 normal-case">{apellidos}</span>
            </p>

            <p className="font-bold mb-3 text-green-500 uppercase">Email: {''}
                <span className="font-normal text-gray-700 normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-green-500 uppercase">Reserva: {''}
                <span className="font-normal text-gray-700 normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-green-500 uppercase">Hora: {''}
                <span className="font-normal text-gray-700 normal-case">{hora}</span>
            </p>

            <p className="font-bold mb-3 text-green-500 uppercase">Personas: {''}
                <span className="font-normal text-gray-700 normal-case">{persona}</span>
            </p>

            <p className="font-bold mb-3 text-green-500 uppercase">Peticiones especiales: {''}
                <span className="font-normal text-gray-700 normal-case">{peticion}</span>
            </p>

            <div className="flex flex-col gap-1 md:flex-row justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-green-700 hover:bg-green-500 text-white font-bold uppercase rounded-lg"
                    onClick={() => setCliente(cliente)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Cliente
