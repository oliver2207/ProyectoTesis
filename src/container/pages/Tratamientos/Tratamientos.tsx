import SidBar from "../../../components/SidBar"
import CardVacuna from "../../../components/Trataments/CardVacuna"
import HeadersTrataments from "../../../components/Trataments/HeadersTrataments"
import Layouts from "../../../docs/layouts/Layouts"

 
function Tratamientos() {
  return (
    <Layouts>
    <SidBar />
    <main className="py-10 lg:pl-72    h-screen bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8  h-auto  bg-gray-900">
           <HeadersTrataments/>
           <CardVacuna/>
        </div>
    </main>
</Layouts>
  )
}

export default Tratamientos
