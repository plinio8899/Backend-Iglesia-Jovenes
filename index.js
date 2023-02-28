import app from './app'
import mongo from './Routes/mongodb'
import {setPoints, setPointsM} from './Routes/posts'

import dotenv from 'dotenv'
dotenv.config()
mongo()
setPoints()
setPointsM()

const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port || 3000, () => {
    console.log(`Connected in  http://localhost:${port}`)
})