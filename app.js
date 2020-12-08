const argv =require('./config/yargs').argv;
const controllertareas=require('./tarea/controllertareas');
const colors=require('colors');

let comando=argv._[0];

switch (comando) {
    case 'crear':
       let tarea=controllertareas.crear(argv.descripcion)
       console.log(tarea)
       break;
    case 'actualizar':
         console.log('actualizar por hacer')
         break;
    case 'listar':
         let listado=controllertareas.getlistado();
         for (let tarea of listado) {
             console.log('========Tarea por hacer========'.green);
             console.log(tarea.descripcion);
             console.log(`Estado: ${tarea.completado}`);
             console.log('==============================='.green);
         }
         break;
    case 'eliminar':
        let eliminar=controllertareas.geteliminar(argv.descripcion);
        console.log(eliminar);
         break;
    default:
        break;
        case 'completa':
            let completo=controllertareas.completar(argv.descripcion)
            console.log(completo)
        break;
        case 'incompleta':
            let incompleto=controllertareas.incompletar(argv.descripcion)
            console.log(incompleto)
        break;
} 