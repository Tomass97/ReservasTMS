import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoClientes from "./components/ListadoClientes"
import Sidebar from './components/Sidebar';


function App() {

  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const clientesLS = JSON.parse(localStorage.getItem('clientes')) ?? [];
      setClientes(clientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes])

  const eliminarCliente = id => {
    const clientesActualizados = clientes.filter(cliente => cliente.id !== id);
    setClientes(clientesActualizados)
  }

  return (
    <div className=" mx-auto p-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          clientes={clientes}
          setClientes={setClientes}
          cliente={cliente}
          setCliente={setCliente}
        />
        <ListadoClientes
          clientes={clientes}
          setCliente={setCliente}
          eliminarCliente={eliminarCliente}
        />
        <Sidebar />
      </div>

    </div>
  )
}

export default App
