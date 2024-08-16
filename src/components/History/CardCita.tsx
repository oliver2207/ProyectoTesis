import { Link } from "react-router-dom"

const people = [
    {id:1,
      name: 'Julio Perez',
      Descripcion: 'Veterinaria Bugaba',
      fecha: '10-may-2024',
      imageUrl:
        'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
    }, 
    {id:2,
        name: 'Juan Pijudo',
        Descripcion: 'Verinaria Melo',
        fecha: '10-ene-2024',
        imageUrl:
          'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
      },
      {id:3,
        name: 'Vicente Hernandez',
        Descripcion: 'Veterinaria Monagrillo',
        fecha: '24-may-2024',
        imageUrl:
          'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
      },
      {id:4,
        name: 'Vicente Hernandez',
        Descripcion: 'Veterinaria Monagrillo',
        fecha: '24-may-2024',
        imageUrl:
          'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
      },
      {id:5,
        name: 'Vicente Hernandez',
        Descripcion: 'Veterinaria Monagrillo',
        fecha: '24-may-2024',
        imageUrl:
          'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
      }, {id:6,
        name: 'Vicente Hernandez',
        Descripcion: 'Veterinaria Monagrillo',
        fecha: '24-may-2024',
        imageUrl:
          'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
      },
      
      {id:7,
        name: 'Julio Perez',
        Descripcion: 'Veterinaria Bugaba',
        fecha: '10-may-2024',
        imageUrl:
          'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
      }, 
      {id:8,
          name: 'Juan Pijudo',
          Descripcion: 'Verinaria Melo',
          fecha: '10-ene-2024',
          imageUrl:
            'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
        },
        {id:9,
          name: 'Vicente Hernandez',
          Descripcion: 'Veterinaria Monagrillo',
          fecha: '24-may-2024',
          imageUrl:
            'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
        },
        {id:10,
          name: 'Vicente Hernandez',
          Descripcion: 'Veterinaria Monagrillo',
          fecha: '24-may-2024',
          imageUrl:
            'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
        },
        {id:11,
          name: 'Vicente Hernandez',
          Descripcion: 'Veterinaria Monagrillo',
          fecha: '24-may-2024',
          imageUrl:
            'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
        }, {id:12,
          name: 'Vicente Hernandez',
          Descripcion: 'Veterinaria Monagrillo',
          fecha: '24-may-2024',
          imageUrl:
            'https://img.freepik.com/foto-gratis/cachorro-spaniel-jugando-estudio-lindo-perrito-o-mascota-sentado-aislado-sobre-fondo-azul-cavalier-king-charles-espacio-negativo-insertar-su-texto-o-imagen-concepto-movimiento-derechos-animales_155003-33839.jpg?size=626&ext=jpg&ga=GA1.1.641886120.1710620619&semt=ais_user',
        },
        
        
    // More people...
  ]
    // More people...
  
  
function CardCita() {
  return (
    
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-4  ">
    
    
    {people.map((person) => (
      
      <div
        key={person.id}
        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <Link to='/histori' className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{person.Descripcion}</p>
            <div className="flex justify-between">
               <p className="truncate text-sm text-gray-500">{person.name}</p>  
               <p className="truncate text-sm text-gray-500">{person.fecha}</p>  
            </div>
           
          </Link>
        </div>
      </div>

    ))}
  </div>
  )
}

export default CardCita