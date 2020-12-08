const fs=require('fs');

//Listar
const getlistado=()=>{
    cargarDB();
    return listadotareas;
}
const crear =(descripcion) =>{
    cargarDB();
    let tarea={
        descripcion,
        completado:false
    }
    listadotareas.push(tarea);
    guardarDB();
    return tarea;
}
const cargarDB=()=>{
    try {
        listadotareas=require('../db/data.json');
    } catch (error) {
        listadotareas=[];
    }
    
}
let listadotareas=[];

const guardarDB=()=>{
    let data=JSON.stringify(listadotareas);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('No se pudo grabar');
    })
}

//eliminar
const getEliminar=()=>{
    eliminarDB();
    return listadotareas;
}
const eliminar =(descripcion)=>{
    eliminarDB();
    let eliminar={
        descripcion,
        completado:false
    }
    listadotareas.push(eliminar);
    eliminarDB();
    return eliminar;
}

const eliminarDB=()=>{
    try{
        listadotareas=require('../db/data.json')
    }catch (error){
        listadotareas=[];
    }
}

//Tarea Completa
const getlistacompleta = () => {
    completaDB();
    return listaCompleta;
}
const completar = (descripcion) => {
    completaDB();
    let completo = {
        descripcion,
        completado:true
    }
    listaCompleta.push(completo);
    cambioCompletoDB();
    return completo;
}

let listaCompleta=[];

const completaDB = () => {
    try {
        listaCompleta = require('../db/completa.json')
    } catch (error) {
        listaCompleta = [];
    }

}
const cambioCompletoDB = () => {
    let data = JSON.stringify(listaCompleta);
    fs.writeFile('db/completa.json', data, (err) => {
        if (err) throw new Error('No se Completó');
    })
}

//Tarea Incompleta
const getlistaincompleta = () => {
    incompletaDB();
    return listaIncompleta;
}
const incompletar = (descripcion) => {
    incompletaDB();
    let incompleto = {
        descripcion, 
        completado:true
    }
    listaIncompleta.push(incompleto);
    cambioincompletaDB();
    return incompleto;
}
const cambioincompletaDB = () => {
    let data = JSON.stringify(listaIncompleta);
    fs.writeFile('db/incompleta.json', data, (err) => {
        if (err) throw new Error('No se pudo hallar lo incompleto');
    })
}
let listaIncompleta=[];

const incompletaDB = () => {
    try {
        listaIncompleta = require('../db/incompleta.json')
    } catch (error) {
        listaIncompleta = [];
    }

}

module.exports={crear,getlistado,getEliminar,eliminar,getlistaincompleta, incompletar, getlistacompleta,completar};