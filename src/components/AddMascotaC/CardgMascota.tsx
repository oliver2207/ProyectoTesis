import { Link } from "react-router-dom"
import Amikoo1 from '../../assets/image/Amikoo1.svg'
const people = [
    {
        id: 1,
        name: 'Dogo',

        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NE5R-BWgxdnaHhVVy9jWqsjyvkxUta7fa6rdtMzQig&s',
    },
    {
        id: 2,
        name: 'Chalo',

        imageUrl:
            'https://images.unsplash.com/photo-1568564321589-3e581d074f9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycm8lMjA0a3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 3,
        name: 'Firulai',

        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNI-xFDPwMEU20p-toWzu6hDblZMjDUwMDN2JXJxtbA&s',
    },
    {
        id: 4,
        name: 'Spencer',

        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNI-xFDPwMEU20p-toWzu6hDblZMjDUwMDN2JXJxtbA&s',
    },


    // More people...
]
function CardgMascota() {
    return (
        <div className="grid grid-row-1 gap-4   pt-4   ml-[5%] w-[90%] md:w-[60%] border-2 p-6 shadow-2xl  shadow-cyan-500/80 rounded-2xl ">
            <div>
                <div className="flex  justify-center ">
                    <div className="pt-5 pb-7 ">
                        <h1 className="text-[30px] font-medium text-center text-white ">
                            Lista de Mascotas 
                        </h1>

                    </div>
                    <div className="mt-5 ml-3 mr-5">
                        <img src={Amikoo1} className="w-[35px] h-[35px]" />
                    </div>
                </div>
 
                <div className=" border border-white ml-5 mr-5">

                </div>
            </div>

            {people.map((person) => (
                <div
                    key={person.id}
                    className="relative flex items-center space-x-3 rounded-[15px] border border-gray-300 bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <Link to='/home' className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{person.name}</p>


                        </Link>

                    </div>
                </div>
            ))}
            <div className=" border border-white ml-5 mr-5">

            </div>
            <div >
                <div className=" bg-[#6ecd3b] mb-5 text-center rounded-full hover:bg-[#dc4c4c]">
                    <div className="p-2">

                        <Link to='/formusuario' className="  text-white">Agregar Mascotas</Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CardgMascota
