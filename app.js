import express from 'express'
import bodyParser from 'body-parser';
//Creando el enrutador en un modulo aparte
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
export default app;
