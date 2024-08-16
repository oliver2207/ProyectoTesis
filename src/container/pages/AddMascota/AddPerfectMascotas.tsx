import CardPrincipal from '../../../components/AddMascotaC/CardPrincipal'
import Layouts from '../../../docs/layouts/Layouts'
import AmikooText from '../../../assets/image/Amikoo-Text.svg'
import AmikooSin from '../../../assets/image/Logo-Opacidad.svg'
import NavUsers from '../../../components/NavBar/NavUsers'

function AddPerfectMascotas() {
    // shadow-lg shadow-teal-600
    return (
        <Layouts>

            <section className='bg-gray-800 h-screen w-screen   overflow-hidden z-30 ' id="VideoSection">
                <NavUsers />

                <div className='  md:w-[100%]   h-full   fixed z-10 flex flex-row items-end justify-end' >
                    <div className='   w-full   h-[15%] md:h-[8%] flex   bg-[#1D283E]'>


                        <div className=' hidden lg:table-cell w-[45%]   mt-1   '>

                            <div className="     bg-[#27314A]  w-[35%]   rounded-xl  ml-2 ">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                >
                                    <img
                                        className="h-8 w-8 rounded-full bg-gray-800"
                                        src="https://media.licdn.com/dms/image/D4E03AQExViGdE2W4DQ/profile-displayphoto-shrink_800_800/0/1696136683711?e=1721260800&v=beta&t=7766pTWWpbwODe0pxEnnJAw7YYJJtgBIqVzsin6PucI"
                                        alt=""
                                    />
                                    <span className="sr-only">Your profile</span>
                                    <span aria-hidden="true" className='  '>Vaihinger Vega1</span>
                                </a>
                            </div>

                        </div>

                        <div className=' hidden lg:table-cell w-[55%]'>
                            <div>

                                <img src={AmikooText} className='w-[150px] h-14 bg-opacity-20' alt="" />

                            </div>
                        </div>


                        <div className='lg:hidden   '>
                            <div className=' '>
                                <img src={AmikooText} className=' ml-[70%] w-[150px] h-14 bg-opacity-20' alt="" />
                            </div>


                        </div>

                    </div>


                </div>


                <div className='relative z-30 h-full flex flex-col md:items-center md:justify-center  mr-20 w-[100%] '>
                    {/* <header>
    <h2 className='text-white pt-40 text-5xl '> Amikoo</h2>
         <p className='text-white text-base'> uno de cada 5 animales sufren de Violencia</p>
   </header>
     */}
                    <CardPrincipal />
                </div>

                <div className=' absolute top-0 bottom-0 h-full w-full z-10 '>


                    <img src={AmikooSin} className="top-0 left-0  object-center   h-[90%] w-full " />
                    <div className="absolute inset-0 bg-black opacity-20"></div>


                </div>
            </section>
        </Layouts>
    )
}

export default AddPerfectMascotas

{/* <div className=" bg-gray-900 h-screen"   >
        

        <div className='w-full flex  items-center  justify-center h-auto  '  >
             <CardPrincipal/> 
\

        </div>
 
    </div> */}