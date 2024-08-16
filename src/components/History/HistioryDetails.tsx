 
import Modal from "./Modal"


function HistioryDetails() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between mt-8 pr-4 w-[300px] md:w-[450px]    h-auto">
        <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center mt-3">
            <img className="  rounded-full w-[150px] h-[150px]" src="https://c4.wallpaperflare.com/wallpaper/26/58/362/animales-corre-hierba-perro-wallpaper-preview.jpg" alt="" />
          </div>
          <div className="p-5">
            <div >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Spencer el destructor de Mundos</h5>
            </div>
            <div className="mt-2">
              <div className="text-white grid grid-flow-row md:grid-flow-col" >
                <p>Veterinaria: vertinaria monogrillo </p>
                <p className="my-1 md:my-0 text-current"> fecha: 12-may-2024</p>

              </div>

              <div className="mt-2 ">
                <div className="text-white">
                  Descriccion:
                </div>
                <div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi atque ratione sit nostrum non nobis doloremque dolore illum quae tenetur ipsum, laboriosam natus aut qui eum officiis odio fugit? Delectus!</p>
                </div>

              </div>

            </div>
            {/* <Modal  className="inline-flex items-center text-center text-white  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">

            See Treatment
            
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Modal> */}
<Modal/>
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default HistioryDetails