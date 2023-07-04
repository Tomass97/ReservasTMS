import Cliente from "./Cliente"

const ListadoClientes = ({clientes, setCliente, eliminarCliente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {clientes && clientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Reservas</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-green-500 font-bold ">Reservas</span>
                    </p>

                    { clientes.map( cliente => (
                        <Cliente 
                            key={cliente.id}
                            cliente={cliente}
                            setCliente={setCliente}
                            eliminarCliente={eliminarCliente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay reservas aún</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Añade reservas {''}
                        <span className="text-green-500 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoClientes
