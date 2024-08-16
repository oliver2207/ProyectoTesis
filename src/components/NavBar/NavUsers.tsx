import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { RiHealthBookFill } from "react-icons/ri";

import Amikoo1 from '../../assets/image/Amikoo1.svg'

import { Link } from 'react-router-dom'
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  // { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  // { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  { name: 'Home', href: '/home', icon: HomeIcon, current: true },
  { name: 'Historial Medico', href: '/historial', icon: UsersIcon, current: false },
  // { name: 'ProFFDjects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
  { name: 'Vacuna & Tratamientos', href: '/calendar', icon: RiHealthBookFill, current: false },

  // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  // { name: 'Virtual Asistens', href: '/chat', icon: HiChatBubbleLeftEllipsis, current: false },
]
function NavUsers() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='bg-gray-900 h-auto'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10  h-full">

                  <div className='   h-auto mt-4 flex'>
                    <div className=' w-[50%] '>

                      <div className='flex flex-1  flex-col text-white' >
                        <img
                          className="h-20 w-20 rounded-full bg-gray-800"
                          src="https://media.licdn.com/dms/image/D4E03AQExViGdE2W4DQ/profile-displayphoto-shrink_800_800/0/1696136683711?e=1721260800&v=beta&t=7766pTWWpbwODe0pxEnnJAw7YYJJtgBIqVzsin6PucI"
                          alt=""
                        />
                        <div className='mt-2'>
                          <p className='text-lg font-bold'>Vaihinger Vega</p>
                          <p className='text-xs  '>fhutelemoon53@gmail.com</p>

                        </div>
                       

                      </div>


                    </div>
                    <div className='  w-[50%]'>
                      <button type="button" className="mx-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-4"> Editar Perfil</button>

                    </div>

                  </div>
                  <div className='text-white h-full flex flex-row  items-end justify-end  '>
                    <div className="      w-[100%]   rounded   ">
                      <a
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-lg font-semibold leading-6 text-white hover:bg-gray-800"
                      >
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true" className='  '> Cerrar Sesion</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>


      {/* el cambio de la barra statica */}
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <p className=' text-white text-xl'>Perfil</p>
      </div>


    </div>
  )
}

export default NavUsers
