 
import DesciptionCita from "../../../components/History/DesciptionCita"
import HistioryDetails from "../../../components/History/HistioryDetails"
import SidBar from "../../../components/SidBar"
import Layouts from "../../../docs/layouts/Layouts"

 
function HistoriDetail() {
  return (
    <Layouts>
            <SidBar />
            <main className="py-2 lg:pl-72    h-screen bg-gray-900">
                <div className="px-4 sm:px-6 lg:px-8  h-auto  bg-gray-900">
                   <DesciptionCita/>
                </div>
            </main>
        </Layouts>
  )
}

export default HistoriDetail
