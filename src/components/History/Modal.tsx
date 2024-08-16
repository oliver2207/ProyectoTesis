import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'

const people = [
  { medicamento: 'Lindsay Walton', fechai: '1-abril-24 ', aplicacion: 'lindsay.walton@example.com', fechaf: '12-may-24' },
  { medicamento: 'Lindsay Walton', fechai: '1-abril-24 ', aplicacion: 'lindsay.walton@example.com', fechaf: '12-may-24' },
  { medicamento: 'Lindsay Walton', fechai: '1-abril-24 ', aplicacion: 'lindsay.walton@example.com', fechaf: '12-may-24' },
]
function Modal() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Dialog className="relative z-10" open={open} onClose={setOpen}>
        <Dialog.Backdrop
          className="fixed inset-0   data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex  items-end   justify-center p-8 mt-20   text-center sm:items-center sm:p-0">
            <Dialog.Panel
              className="relative transform overflow-hidden rounded-lg bg-white ml-2 md:ml-[250px]  px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full md:w-[40%] sm:my-8    sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">

                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Lista de Tratamiento
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="-mx-4 mt-8 sm:-mx-0">
                      <table className="w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              Medicamento
                            </th>
                            <th
                              scope="col"
                              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                              Aplicacio M
                            </th>
                            <th
                              scope="col"
                              className=" hidden  px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell "
                            >
                              Fecha de I
                            </th>
                            <th scope="col" className=" hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                              Fecha de F
                            </th>

                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {people.map((person) => (
                            <tr key={person.aplicacion}>
                              <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                                {person.medicamento}
                                <dl className="font-normal lg:hidden text-start ">
                                  <dt className="sr-only">Title</dt>
                                  <div className='flex h-auto'>
                                    <dt className='  font-bold'>Aplicacion:</dt>
                                    <dd className=" ml-1 truncate text-gray-700 ">{person.aplicacion}</dd>

                                  </div>
                                  <div className='flex'>
                                    <dt className='  font-bold'>Fecha de Inicio:</dt>
                                    <dd className=" ml-1 truncate text-gray-700">{person.fechai}</dd>

                                  </div>
                                  <div className='flex'>
                                    <dt className='  font-bold'>Fecha de Finalizacion:</dt>
                                    <dd className=" ml-1 truncate text-gray-700">{person.fechaf}</dd>

                                  </div>
                             
                                </dl>
                              </td>
                              {/* seccion de las collumanas visible en el responsin quitar el hidden y el table cell  */}
                              <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.aplicacion}</td>
                              <td className="hidden  px-3 py-4 text-sm text-gray-500  lg:table-cell ">{person.fechai}</td>
                              <td className="hidden px-3 py-4 text-sm text-gray-500  lg:table-cell">{person.fechaf}</td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">

                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      {/* <button onClick={() => setOpen(true)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          See Treatment
        </span>
      </button> */}

      <button type="button" onClick={() => setOpen(true)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "> See Treatment</button>

    </div>

  )
}

export default Modal



