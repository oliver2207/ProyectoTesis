import CellPhoneL from "../../../components/Register/CellPhoneL"
import FormValidations from "../../../components/Register/FormValidations"
import Layouts from "../../../docs/layouts/Layouts"

 
function Login() {
  return (
      
      <Layouts>
  <div className=" h-screen bg-gray-900">
      <div className="md:flex h-auto  bg-gray-900   "  >
              
 
              <div className="w-0 md:w-[45%] flex justify-end  ">

                  <CellPhoneL />
              </div>

              <main className="  w-[100%]    md:w-[55%]   ">

                  <div className="   ">
                      <FormValidations />
                  </div>
              </main>
          </div>
  </div>
        

      </Layouts>
  )
}

export default Login