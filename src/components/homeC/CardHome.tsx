import { HiMiniPencil } from "react-icons/hi2";
import { Link } from "react-router-dom";
function CardHome() {
  return (
    <div className="flex flex-col items-center bg-white border w-auto md:w h-auto md:h-[200px] border-gray-200 rounded-lg shadow md:flex-row   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-[100%] md:w-[30%]">
        <img className="object-cover w-full rounded-t-lg h-[full] md:h-full md:w-full md:rounded-none md:rounded-s-lg" src="https://c4.wallpaperflare.com/wallpaper/26/58/362/animales-corre-hierba-perro-wallpaper-preview.jpg" alt="" />

      </div>
      <div className="flex flex-col   p-4 leading-normal w-[100%] md:w-[70%] h-full  ">
        <div className="flex justify-between">
          <div>
                     <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">Firulai </h5>
 
          </div>
          <div className=" text-white mr-6">
                    <Link to='/'><HiMiniPencil /></Link>  

          </div>
        </div>
        <div className="mt-2">
                 <p className="font-normal  text-gray-700 dark:text-gray-400">Raza:Pitbull</p>
                 <p className="font-normal text-gray-700 dark:text-gray-400">Sexo:Masculino</p>
                 <p className=" font-normal text-gray-700 dark:text-gray-400">Edad:7</p>
                 <p className=" font-normal text-gray-700 dark:text-gray-400">tamano:1.30 cm</p>
                 <p className=" font-normal text-gray-700 dark:text-gray-400">Vacunas Completas: Si</p>

 
        </div>
      </div>
    </div>
  )
}

export default CardHome
