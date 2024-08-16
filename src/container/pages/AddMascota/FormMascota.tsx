import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Link } from "react-router-dom";

 
function FormMascota() {
    const [lista, setLista] = useState<any>([])
    const [input, handlerInputChange, setInput] = useForm({
      nombre: '',
      apellido: '',
      cedula: '',
      email: '',
      numero: '',
      img: '',
      pais: ''
    });
  
  
    const addPersona = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setLista([...lista, input])
      setInput({ nombre: '', apellido: '', cedula: '', email: '', numero: '', img: '', pais: '' })
  
    }
  return (
    
    <div className="container ml-auto mr-auto flex items-center justify-center mt-10 h-screen  bg-gray-900  ">
 

    <div className="w-full md:w-1/2    bg-gray-900  mt-3   rounded-xl  shadow-2xl  shadow-cyan-500/80">
      <div className=" pt-4  text-center   ">
           <p className=" text-white text-[25px]  md:text-[20px] font-bold">
            Registrar   Mascota 
           </p>
           <div className="border   mt-4 mx-8 rounded-xl"></div>
      </div>

      <form className="  px-8 pt-6 pb-8 mb-4" onSubmit={(e: any) => addPersona(e)}>


      <div className="mb-4">
        <div className="grid grid-flow-row sm:grid-flow-col gap-3">

            <div className="sm:col-span-4 justify-center">
            <label className="block text-white text-sm font-bold mb-2"  >Nombre de La Mascota</label>
          <input className="shadow appearance-none border bg-gray-700  border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name='cedula'
            placeholder="Ingresa de la Mascota"
            onChange={handlerInputChange}
            value={input.cedula}
           />
            </div>

            <div className="sm:col-span-4 justify-center">
            <label className="block text-white text-sm font-bold mb-2"  >Fecha de  Nacimiento </label>
          <input className="shadow appearance-none bg-gray-700  border border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name='email'
            onChange={handlerInputChange}
            value={input.email}
           />
            </div>
          </div>
          
         
        </div>



        <div className="mb-4">
        <div className="grid grid-flow-row sm:grid-flow-col gap-3">

            <div className="sm:col-span-4 justify-center">
            <label className="block text-white text-sm font-bold mb-2"  >Especie  </label>
          <select className="shadow appearance-none border bg-gray-700  border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
             name='cedula'
             onChange={handlerInputChange}
            value={input.cedula}
           > 
           <option className="bg-black">Perro</option>
           </select>
            </div>

            <div className="sm:col-span-4 justify-center">
            <label className="block text-white text-sm font-bold mb-2"  >Raza</label>
            <select className="shadow appearance-none border bg-gray-700  border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
             name='cedula'
             onChange={handlerInputChange}
            value={input.cedula}
           > 
           <option className="bg-black">Pastor Nazi</option>
           </select>
            </div>
          </div>
          
         
        </div>


        <div className="mb-4">
        <div className="grid grid-flow-row sm:grid-flow-col gap-3">

            <div className="sm:col-span-4 justify-center">
            <label className="block text-white text-sm font-bold mb-2"  >Sexo de la Mascota</label>
          <input className="shadow appearance-none border bg-gray-700  border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name='cedula'
            placeholder="Ingresa de la Mascota"
            onChange={handlerInputChange}
            value={input.cedula}
           />
            </div>

            <div className="sm:col-span-4 justify-center">
            <label className="block text-white text-sm font-bold mb-2"  >Peso de la Mascota </label>
          <input className="shadow appearance-none bg-gray-700  border border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name='email'
            onChange={handlerInputChange}
            value={input.email}
           />
            </div>
          </div>
          
         
        </div>

<div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2"  >Altura de la Mascota </label>
          
          <input
              className="shadow appearance-none bg-gray-700  border border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
              
          type="text"
              placeholder="Nombre del medicamento"
            />


        </div>
      
 

 
  
     

        <div className="">
          <button className="bg-[#42de5f] hover:bg-blue-700   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Seguir Agregando </button>
          <Link to='/historial' className="bg-[#42ded4] hover:bg-blue-700  ml-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Cancelar </Link>

        </div>

      </form>
     
   
    </div>

  </div>
  )
}

export default FormMascota  