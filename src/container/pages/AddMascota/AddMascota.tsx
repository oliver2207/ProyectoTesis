import CardgMascota from "../../../components/AddMascotaC/CardgMascota"
import CellPhone from "../../../components/AddMascotaC/CellPhone"
 import Layouts from "../../../docs/layouts/Layouts"


function AddMascota() {
    return (
        <Layouts>

            <div className="md:flex h-screen  bg-gray-900"  >
                

                <div className="w-0 md:w-[50%] flex justify-end mr-6">

                    <CellPhone />
                </div>

                <main className=" py-16 w-[100%]    md:w-[50%]   ">

                    <div className="px-3 mt-16">
                        <CardgMascota />
                    </div>
                </main>
            </div>

        </Layouts>
    )
}

export default AddMascota