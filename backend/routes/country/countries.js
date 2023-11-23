// I am importing some requires
const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")


app.use(express.json())
app.use(cors)

//Function that will GET the response from the API
const CountriesRoute = (app) => {

    app.get('/country-name/:id', async (req, res) => {

        const name = req.params.id
        
        await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then((information) => {
            return res.json({
                error: false,
                info: information.data
            })
        })
        //ERROR in case it does not find it.
        .catch((error) => {
            return res.status(400).json({
                error
            })
        })
    })

}

module.exports = CountriesRoute