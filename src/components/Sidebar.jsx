import oferta from '../public/oferta.webp'

export default function Sidebar() {
    return (
        <div className="lg:w-1/5 hidden md:flex bg-green-500">
            <aside>
               <div>
               <h1 className="font-black text-4xl text-green-100 text-center mt-10 p-2">20% Descuento</h1>
                <p className='text-center text-3xl text-green-900 mb-5'>Código: TMS20</p>
               </div>
            <img className='w-full h-4/6' src={oferta} alt="oferta img" />

            <p className='font-black text-2xl text-center text-green-100 mt-5'>Todos los días: Menú por 8,90€</p>
            </aside>

        </div>
    )
}
