 import Amikoo from '../../assets/image/Amikoo1.svg'
function Font() {
  return (
  
<section className='bg-black h-screen w-screen text-center   overflow-hidden z-30 ' id="VideoSection">
         
         {/* <div className='relative z-30 h-full flex flex-col'>
   <header>
    <h2 className='text-white pt-40 text-5xl '> Amikoo</h2>
         <p className='text-white text-base'> uno de cada 5 animales sufren de Violencia</p>
   </header>
    
         </div> */}
        
         <div className=' absolute top-0 bottom-0 h-full w-full z-10'> 
       {/* <video  
            autoPlay
           muted
           loop
            src="Prueba.mp4" 
            className="top-0 left-0  object-center object-cover h-full w-full "
            ></video> */}
              
               <img src={Amikoo}  className="top-0 left-0  object-center object-cover h-full w-full "/>
               {/* <div  className='absolute z-50  bg-white'>
                       <Spline className=''
        scene="https://prod.spline.design/OQu2tlgVzx-qMnoE/scene.splinecode"   
      />

               </div>
         */}

         </div>
       </section>

  )
}

export default Font
