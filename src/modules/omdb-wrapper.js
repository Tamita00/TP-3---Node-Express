/* Módulo OMDBWrapper*/
import axios from "axios";

const APIKEY = "288a0ef8";


let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};

const OMDBSearchByPage = async (searchText, page = 1) => {
    let respuesta = returnObject;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`);
        
        respuesta.respuesta = true;
        respuesta.cantidadTotal = parseInt(response.data.totalResults);
        respuesta.respuesta = response.data.Search;

        return respuesta;

    } catch (error) {
        console.error("Error en OMDBSearchByPage:", error.message);
        return respuesta;
    }

return returnObject;
};



const OMDBSearchComplete = async (searchText) => {
    let respuesta = returnObject;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`);
        

        respuesta.respuesta = true;
        respuesta.cantidadTotal = parseInt(response.data.totalResults);
        respuesta.respuesta = response.data.Search;
        
        return respuesta;

    } catch (error) {
        console.error("Error en OMDBSearchComplete:", error.message);
        return respuesta;
    }

return returnObject;
};




const OMDBGetByImdbID = async (imdbID) => {
    let respuesta = returnObject;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`);
        
        respuesta.respuesta = true;
        respuesta.cantidadTotal = 1;
        respuesta.respuesta = response.data;
        
        return respuesta;

    } catch (error) {
        console.error("Error en OMDBGetByImdbID:", error.message);
        return respuesta;
    }

return returnObject;

};


export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};
