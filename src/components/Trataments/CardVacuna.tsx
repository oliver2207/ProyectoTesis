import { MdHealthAndSafety } from "react-icons/md";

function CardVacuna() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-4  ">

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className=" flex justify-between">
<MdHealthAndSafety className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
 <p className=" text-white text-sm font-bold">Fecha: 12-ago-2024</p>
</div>

    
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-start">Parga Virus</h5>
    </a>
    <p className=" font-normal text-gray-500 dark:text-gray-400"><span className=" text-blue-700 text-lg font-bold">Veterinaria:</span> los andes</p>
    <p className=" font-normal text-gray-500 dark:text-gray-400"><span className=" text-blue-700 text-lg font-bold">Doctor:</span> Papasito Fernandes</p>
    
</div>  
 
    </div>
 

)
}

export default CardVacuna