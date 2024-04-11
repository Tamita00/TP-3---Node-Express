import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
import { PI, sumar, multiplicar, restar, dividir, createArray } from './src/modules/matrmatica.js';
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./src/modules/omdb-wrapper.js";

const app = express();
const port = 3000;

// Agrego los Middlewares

app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON


// Aca pongo todos los EndPoints

//01
app.get('/', (req, res) => { 

    res.status(200).send('Ya estoy respondiendo!');

})


//02
app.get('/saludar/:nombre', (req, res) => {

    res.status(200).send('Hola ' + req.params.nombre);

})



//03
app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    const { ano, mes, dia } = req.params;
    //const ano = req.params.ano;


    const DateParse= Date.parse(`${ano}-${mes}-${dia}`);
    if (isNaN(DateParse) != false) {
        res.status(400).send('Fecha no válida');
    } else {
        res.status(200).send('Fecha válida');
    }
})


//04
app.get('/matematica/sumar', (req, res) =>
{
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const resultado = sumar(n1,n2);
    res.status(200).send('El resultado es: ' + resultado);
})  


//05
app.get('/matematica/restar', (req, res) =>
{
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const resultado = restar(n1,n2);
    res.status(200).send('El resultado es: ' + resultado);
})  


//06
app.get('/matematica/multiplicar', (req, res) =>
{
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const resultado = multiplicar(n1,n2);
    res.status(200).send('El resultado es:' + resultado);
})
//07

app.get('/matematica/dividir', (req, res) =>
{
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    if(n2==0)
    {
        res.status(400).send('Bad request');
    }
    else{
    const resultado = dividir(n1, n2);
    res.status(200).send('El resultado es:' + resultado);
    }
})


//08


app.get('/omdb/searchbypage', async (req, res) => {
    const searchText = req.query.search;
    const page = req.query.p ? parseInt(req.query.p) : 1;


    try {
        const resultado = await OMDBSearchByPage(searchText, page);
        if (resultado.respuesta) {
            res.status(200).send(resultado);
        } else {
            res.status(404).send({ mensaje: 'No se encontraron resultados' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


//09 PREGUNTAR
 
app.get('/omdb/searchComplete',  async (req, res) =>
{
    const searchText = req.query.search;
    try {
        const resultado = await OMDBSearchComplete(searchText);
        if (resultado.respuesta)
        {
            res.status
        }
    }catch (error) {
        res.status(500).send({ error: error.message });
    }

})

//10 PREGUNTAR

app.get('/omdb/getbyomdbid',  async (req, res) =>
{
    const searchText = req.query.id;
    try {
        const resultado = await OMDBGetByImdbID(id);
        if (resultado.respuesta)
        {
            res.status
        }
    }catch (error) {
        res.status(500).send({ error: error.message });
    }

})

// Inicio el Server y lo pongo a escuchar.

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
