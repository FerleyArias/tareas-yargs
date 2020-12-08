const argv=require('yargs')  
    .command('crear','crea un elemento en la lista',{
       descripcion:{
        demand:true,
        alias:'a',
        desc:'Descripción de la tarea'
       }
    })
    .command('listar','crea un elemento en la lista',{
        descripcion:{
         demand:true,
         alias:'f',
         desc:'Descripción de la tarea'
        }
     })
    .command('actualizar','actualiza el estado de una tarea',{
        descripcion:{
         demand:true,
         alias:'b',
         desc:'Descripción de la tarea'
        },
        completado:{
            default:true,
            alias:'c',
            desc:'marca como completado o pendiente'
        }
     })
     .command('eliminar','eliminar un elemento en la lista',{
        descripcion:{
         demand:true,
         alias:'d',
         desc:'eliminar la tarea'
        },
        completado:{
            default:true,
            alias:'e',
            desc:'eliminacion completada'
        }
     })
     .command('completa','lista completada',{
        descripcion:{
         demand:false,
         alias:'f',
         desc:'completa la tarea'
        },
        completado:{
            default:true,
            alias:'g',
            desc:'completa la tarea'
        }
     })
     .command('incompleta','lista incompleta',{
        descripcion:{
         demand:false,
         alias:'h',
         desc:'incompleta la tarea'
        },
        completado:{
            default:true,
            alias:'i',
            desc:'incompleta la tarea'
        }
     })
     .help()
     .argv;

     module.exports={argv}


