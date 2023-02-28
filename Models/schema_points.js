import mongoose from "mongoose"
const Schema = mongoose.Schema

const points_schema = new Schema({
    number: Number,
    description: String
})

//Crear modulo

const point_agg = mongoose.model('H-Points', points_schema)

module.exports = point_agg