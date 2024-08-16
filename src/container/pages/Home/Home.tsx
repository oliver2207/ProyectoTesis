import SidBar from "../../../components/SidBar";
import CardHome from "../../../components/homeC/CardHome";
import Carrousel from "../../../components/homeC/Carrousel";
import Layouts from "../../../docs/layouts/Layouts";


function Home() {
    return (
        <Layouts>

            <SidBar />
            <main className="pb-10 pt-2 lg:pl-72    h-screen bg-gray-900">
                <div className="px-4 sm:px-6 lg:px-8  h-auto bg-gray-900 ">
                    <CardHome />
                    <Carrousel />
                </div>
            </main>
        </Layouts>
    )
}

export default Home