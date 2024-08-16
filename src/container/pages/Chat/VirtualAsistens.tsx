import ChatModers from "../../../components/ChatC/ChatModers"
import SidBar from "../../../components/SidBar"
import Layouts from "../../../docs/layouts/Layouts"

function VirtualAsistens() {
    return (
        <Layouts>
            <SidBar />
            <main className="  lg:pl-72    h-screen">
                <div className="">
                    <ChatModers />
                </div>
            </main>
        </Layouts>
    )
}

export default VirtualAsistens