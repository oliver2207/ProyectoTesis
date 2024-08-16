import CardCita from "../../../components/History/CardCita"
import HeaderCita from "../../../components/History/HeaderCita"
import SidBar from "../../../components/SidBar"
import Layouts from "../../../docs/layouts/Layouts"

 


function HistorialCitas() {
    return (
        <Layouts>
            <SidBar />
            <main className="py-3 sm:py-10 lg:pl-72    h-screen bg-gray-900">
                <div className="px-4 sm:px-6 lg:px-8  h-auto  bg-gray-900">
                    <HeaderCita />
                    <CardCita />
                </div>
            </main>
        </Layouts>
    )
}

export default HistorialCitas