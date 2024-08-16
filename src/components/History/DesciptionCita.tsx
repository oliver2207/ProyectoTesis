import React from 'react'
import Modal from './Modal'

export default function DesciptionCita() {
  return (
    <div className="flex justify-center  ">
    <div className="flex justify-between mt-8 md:pr-4 w-[100%] md:w-[70%]    h-auto">
      <div className="   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
       {/* Seccion del header */}
        <section className="flex  mt-3  ">
          <div className='flex flex-col  w-full  h-auto'>
            {/* Division de la Cita */}
            <div className=' h-7 w-full  my-7 md:my-3 px-6'>
             <p  className='text-white  text-lg md:text-xl  font-bold'>Cita del: 24-mayo-2024</p>
            </div>
             {/* texto del Caso +  Imagen */}
            <div className='  mt-2 mx-2'>
              <div className='flex flex-col md:flex-row'>
                          <img className=" w-[90%] ml-3 md:ml-0  rounded-lg  md:w-[180px] h-[180px] " src="https://c4.wallpaperflare.com/wallpaper/26/58/362/animales-corre-hierba-perro-wallpaper-preview.jpg" alt="" />
                           <div className='text-white ml-5'>
                            <h2 className='text-xl font-semibold'>Spencer el Destructor</h2>
                            <span className=' text-gray-500 dark:text-gray-400'>Atendido por:</span>
                            <h2 className='text-sm font-semibold'>Dr.Mandigo Gutierrez</h2>
                            <span className='text-gray-500 dark:text-gray-400'>Problema:</span>
                            <h2 className='text-sm font-semibold'>Corazon Roto</h2>


                           </div>
              </div>

            </div>
          </div>
        </section>
        {/* Footert */}
        <section className="p-5  ">
          
            

            <div className="">
              <div className="text-white font-bold text-lg">
                Descriccion:
              </div>
              <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi atque ratione sit nostrum non nobis doloremque dolore illum quae tenetur ipsum, laboriosam natus aut qui eum officiis odio fugit? Delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laborum unde deleniti enim in vitae est debitis nemo? Amet iusto officiis magni vel accusantium cupiditate aliquam sed voluptatum. Pariatur, suscipit!
                   
                  
                  </p>
              </div>




            </div>

           {/* <Modal  className="inline-flex items-center text-center text-white  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">

          See Treatment
          
           <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Modal> */}

          <div  className='flex  justify-end mt-3'>
            <Modal/>
            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>

          </div>
        </section>
      </div>
      
    </div>


  </div>
  )
}
