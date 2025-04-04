import express from 'express'
import bodyParser from 'body-parser';
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
export default app;
