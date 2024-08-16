import {
    RiSearchLine,
    RiNotification3Line,
    RiArrowDownSLine,
    RiCheckboxBlankCircleFill,
    RiCheckDoubleFill,
    RiMessage2Line,
    RiMenu3Fill,
    RiAddLine,
    RiImage2Line,
    RiEmotionHappyLine,
    RiSendPlaneLine,
    RiMore2Fill,
    RiInstagramLine,
    RiTwitterLine,
    RiTwitchLine,
    RiFacebookLine,
  } from "react-icons/ri";
  import { HiMiniMicrophone } from "react-icons/hi2";

  import Amikoo1 from '../../assets/image/Amikoo1.svg'
function ChatModers() {
  return (
    <section className="bg-gray-900  h-screen p-4 md:p-8 relative">
      
    {/* Send Message */}
    <div className="absolute bg-[#22222A]  left-0 bottom-0 w-full p-8">
      <form className="relative">
        <HiMiniMicrophone className="absolute left-4 top-[10px] text-gray-300 text-xl hover:cursor-pointer" />
        <input
          type="text"
          className="bg-[#1E1F24] py-2 pl-10 pr-28 outline-none w-full rounded-full text-gray-300"
        />
        {/* Icons message */}
        <div className="absolute right-4 top-3 flex items-center gap-2 text-gray-300">
          <RiImage2Line className="hover:cursor-pointer" />
          <RiEmotionHappyLine className="hover:cursor-pointer" />
          <RiSendPlaneLine className="hover:cursor-pointer" />
         </div>
      </form>
    </div>
    {/* Content messages */}
    <div className="mt-2 overflow-y-scroll  h-full ">
    {/* max-h-[calc(100%-210px)] */}

          {/* Message user main */}
          <div className="flex justify-end gap-4">
        <img
            src="https://th.bing.com/th/id/OIP.zcminW7d0KJFhZgKJGeNLgHaE-?pid=ImgDet&w=2896&h=1944&rs=1"
            className="w-10 h-10 object-cover rounded-full order-1"
        />
        <div>
          <h4 className="text-gray-300 font-semibold mb-2 text-right">
            <span className="text-gray-500 font-normal text-sm mr-8">
              10:12 AM
            </span>
            Vaca 001{" "}
          </h4>
          <div className="flex items-center justify-end gap-2 mb-2">
            <p className="bg-[#4a7655] py-2 px-4 rounded-tl-lg rounded-bl-lg rounded-br-lg text-white order-1">
            tengo una vaca con torsalo que puedo hacer para tratarlo{" "}
            </p>
            <button className="text-gray-500">
              <RiMore2Fill />
            </button>
          </div>
          <div className="flex items-center justify-end gap-2 mb-2">
            <button className="text-gray-500">
              <RiMore2Fill />
            </button>
             <img
              src="https://th.bing.com/th/id/R.d6984b5d11411b3529404891376c0c01?rik=udk9wi4rvt8Y1g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-NDPA3wWKHn8%2fUinStoslhEI%2fAAAAAAAAAPw%2fhdCva4NazTA%2fs1600%2fvaca.JPG&ehk=m7TLr5ypSSUS%2bqB48j8ybwhc2JvfGF7s76BFRvMIY4Q%3d&risl=&pid=ImgRaw&r=0"
              className="w-32 h-40 object-cover rounded-lg"
            />
            <img
              src=" https://www.wallpaperup.com/uploads/wallpapers/2015/02/21/627197/cdc9a29d6eddd0a24585980a24678d2e.jpg"
              className="w-32 h-40 object-cover rounded-lg"
            />
           
          </div>
        </div>
      </div>
     
      {/* Message user */}
      <div className="flex gap-4 mt-3 ">
        <img
          src= {Amikoo1}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div>
          <h4 className="text-gray-300 font-semibold mb-2">
           Amikoo{" "}
            <span className="text-gray-500 font-normal text-sm ml-8">
              10:13 AM
            </span>
          </h4>
          <div className="flex items-center gap-2 mb-2 w-[90%] md:w-[50%]">
            <p className="bg-[#3c5d44] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-white">
            Hay varias soluciones que puedes aplicar para tratar el torsalo en tu vaca. Una forma fácil y efectiva de eliminar las larvas del torsalo es aplicar vaselina sobre la ubicación, lo que evita que el aire llegue a la larva, sofocándola.
             Luego se puede retirar con seguridad con unas pinzas después de un día
            </p>
            <button className="text-gray-500">
              <RiMore2Fill />
            </button>
          </div>
         
        
        </div>
      </div>
 
          {/* Message user */}
          <div className="flex gap-4 mt-3 ">
        <img
          src= {Amikoo1}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div>
          <h4 className="text-gray-300 font-semibold mb-2">
           Amikoo{" "}
            <span className="text-gray-500 font-normal text-sm ml-8">
              10:13 AM
            </span>
          </h4>
          <div className="flex items-center gap-2 mb-2 w-[90%] md:w-[50%]">
            <p className="bg-[#3c5d44] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-white">
            Hay varias soluciones que puedes aplicar para tratar el torsalo en tu vaca. Una forma fácil y efectiva de eliminar las larvas del torsalo es aplicar vaselina sobre la ubicación, lo que evita que el aire llegue a la larva, sofocándola.
             Luego se puede retirar con seguridad con unas pinzas después de un día
            </p>
            <button className="text-gray-500">
              <RiMore2Fill />
            </button>
          </div>
         
        
        </div>
      </div>
 
      
    </div>
        {/* Message user */}
        <div className="flex gap-4 mt-3 ">
        <img
          src= {Amikoo1}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div>
          <h4 className="text-gray-300 font-semibold mb-2">
           Amikoo{" "}
            <span className="text-gray-500 font-normal text-sm ml-8">
              10:13 AM
            </span>
          </h4>
          <div className="flex items-center gap-2 mb-2 w-[90%] md:w-[50%]">
            <p className="bg-[#3c5d44] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-white">
            Hay varias soluciones que puedes aplicar para tratar el torsalo en tu vaca. Una forma fácil y efectiva de eliminar las larvas del torsalo es aplicar vaselina sobre la ubicación, lo que evita que el aire llegue a la larva, sofocándola.
             Luego se puede retirar con seguridad con unas pinzas después de un día
            </p>
            <button className="text-gray-500">
              <RiMore2Fill />
            </button>
          </div>
         
        
        </div>
      </div>
 
      
  </section>
  )
}

export default ChatModers