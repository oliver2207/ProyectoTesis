import { Link } from "react-router-dom"

 
function HeadersTrataments() {
  return (
    <div className="bg-gray-700 border border-[#6948b4] flex justify-between rounded-lg ">

    <div className="mt-5 mb-2 ml-4">
        <p className="text-[18px] md:text-[35px]  font-bold text-white">Historial de Vacunas</p>
    </div>
    <div className="mt-5 md:mt-8 mr-3 md:mr-9 mb-3 md:mb-0  ">
        <Link
            to='/formcita'
            className="rounded-md bg-white/10 hover:bg-[#485fd2] px-3 py-2 text-sm  font-semibold text-white shadow-sm hover:bg-white/20">
            Add Vacuna
        </Link>
    </div>
</div>
  )
}

export default HeadersTrataments