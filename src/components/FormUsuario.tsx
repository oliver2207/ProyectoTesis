import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";

const paises = [
  "Afganistán", "Albania", "Argelia", "Andorra", "Angola", "Antigua y Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas",
  "Baréin", "Bangladés", "Barbados", "Bielorrusia", "Bélgica", "Belice",
  "Benín", "Bután", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil",
  "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Camboya",
  "Camerún", "Canadá", "República Centroafricana", "Chad", "Chile", "China",
  "Colombia", "Comoras", "Congo", "Costa Rica", "Croacia", "Cuba", "Chipre",
  "República Checa", "Dinamarca", "Yibuti", "Dominica", "República Dominicana",
  "Ecuador", "Egipto", "El Salvador", "Guinea Ecuatorial", "Eritrea", "Estonia",
  "Esuatini", "Etiopía", "Fiyi", "Finlandia", "Francia", "Gabón", "Gambia",
  "Georgia", "Alemania", "Ghana", "Grecia", "Granada", "Guatemala", "Guinea",
  "Guinea-Bisáu", "Guyana", "Haití", "Honduras", "Hungría", "Islandia", "India",
  "Indonesia", "Irán", "Iraq", "Irlanda", "Israel", "Italia", "Jamaica", "Japón",
  "Jordania", "Kazajistán", "Kenia", "Kiribati", "Corea del Norte", "Corea del Sur",
  "Kosovo", "Kuwait", "Kirguistán", "Laos", "Letonia", "Líbano", "Lesoto", "Liberia",
  "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malaui",
  "Malasia", "Maldivas", "Mali", "Malta", "Islas Marshall", "Mauritania", "Mauricio",
  "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Marruecos",
  "Mozambique", "Birmania", "Namibia", "Nauru", "Nepal", "Países Bajos", "Nueva Zelanda",
  "Nicaragua", "Níger", "Nigeria", "Macedonia del Norte", "Noruega", "Omán", "Pakistán",
  "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Filipinas",
  "Polonia", "Portugal", "Catar", "Rumania", "Rusia", "Ruanda", "San Cristóbal y Nieves",
  "Santa Lucía", "San Vicente y las Granadinas", "Samoa", "San Marino", "Santo Tomé y Príncipe",
  "Arabia Saudita", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur",
  "Eslovaquia", "Eslovenia", "Islas Salomón", "Somalia", "Sudáfrica", "Sudán del Sur",
  "España", "Sri Lanka", "Sudán", "Surinam", "Suecia", "Suiza", "Siria", "Taiwán",
  "Tayikistán", "Tanzania", "Tailandia", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago",
  "Túnez", "Turquía", "Turkmenistán", "Tuvalu", "Uganda", "Ucrania", "Emiratos Árabes Unidos",
  "Reino Unido", "Estados Unidos", "Uruguay", "Uzbekistán", "Vanuatu", "Ciudad del Vaticano",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabue"
];


function FormUsuario() {
  const [image, setImage] = useState<string>('');
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
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };




  return (
    <div className="container ml-auto mr-auto flex items-center justify-center mt-15 h-screen  bg-gray-900  ">

      <div className="w-full md:w-1/2    bg-gray-900  mt-3   rounded-xl  shadow-2xl  shadow-cyan-500/80">
        <div className=" pt-4  text-center   ">
             <p className=" text-white text-[25px]  md:text-[20px] font-bold">
              Registrar Usuario
             </p>
             <div className="border   mt-4 mx-8 rounded-xl"></div>
        </div>

        <form className="  px-8 pt-6 pb-8 mb-4" onSubmit={(e: any) => addPersona(e)}>
          <div className="mb-4">
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label className="block text-white text-sm font-bold mb-2"  > Nombres </label>
                <input className="shadow bg-gray-700 appearance-none border border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name='nombre'
                  onChange={handlerInputChange}
                  value={input.nombre}
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label className="block text-white text-sm font-bold mb-2" > Apellido </label>
                <input className="shadow appearance-none bg-gray-700  border border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name='apellido'
                  onChange={handlerInputChange}
                  value={input.apellido}

                />
              </div>
            </div>
          </div>
          <div className="mb-4">
          <div className="grid grid-flow-row sm:grid-flow-col gap-3">

              <div className="sm:col-span-4 justify-center">
              <label className="block text-white text-sm font-bold mb-2"  > Cedula </label>
            <input className="shadow appearance-none border bg-gray-700  border-[#42de5f] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name='cedula'
              onChange={handlerInputChange}
              value={input.cedula}
            />
              </div>

              <div className="sm:col-span-4 justify-center">
              <label className="block text-white text-sm font-bold mb-2"  > Email </label>
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
              <label className="block text-white text-sm font-bold mb-2"  > Celular  </label>
            <input className="shadow appearance-none bg-gray-700  border border-[#42de5f] rounded w-full   py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name='numero'
              onChange={handlerInputChange}
              value={input.numero}
            />
              </div>
              <div className="sm:col-span-4 justify-center">
           
            <label className="block text-white text-sm font-bold mb-2"  > Elige Tu pais  </label>
            <select
              id="country-select"
              className="border border-[#42de5f] bg-gray-700  text-white rounded-md p-2 w-[200px]   ml-0  "
              onChange={handlerInputChange}
              name='pais'
              value={input.pais}
            >
              
              {/* <option className=" border border-[#2f7d3e]" >Selecciona un país</option> */}
{paises.map((pais, index) =>(
   <option key={index}   className=" w-6">
                 {pais}
              </option>
  
))}
           

            </select>
               </div>
            </div>
            
          
          </div>
    
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2"  > Importar Imagen </label>
            <input
              className="mb-4 px-4 py-2 w-64  bg-gray-700 border border-[#42de5f]  text-white rounded-md"
              type="file"
              name='img'
              accept="image/*"
              onChange={(event) => { handleImport(event); handlerInputChange(event); }}
              value={input.img}
            />



            {image && (
              <div className=' w-64 h-64'>

                <img className=" w-auto   h-64 object-cover rounded-md" src={image} alt="Imported" />
              </div>
            )}


          </div>
          <div className="">
            <button className="bg-[#42de5f] hover:bg-blue-700   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Aceptar </button>
            <Link to='/historial' className="bg-[#42ded4] hover:bg-blue-700  ml-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Cancelar </Link>

          </div>

        </form>
       
        <ul>
          {lista.map((items: any) => {
            var nombre1: any = items.nombre;
            var apellido1: any = items.pais;
            { console.log(apellido1) }
            return (

              <div>
                <h1>{items.nombre}</h1>
                <h1>{items.apellido}</h1>
                <h1>{items.cedula}</h1>
                <h1>{items.email}</h1>
                <h1>{items.numero}</h1>
                <h1>{items.img}</h1>
                <h1>{items.pais}</h1>

              </div>




            )

          })}

        </ul>
      </div>

    </div>
  )
}

export default FormUsuario