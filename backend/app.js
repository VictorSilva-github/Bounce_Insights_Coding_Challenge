const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

//route using express
const { countriesRoute } = require("./routes/index.js")

countriesRoute(app)

//listen port
app.listen(8081, () => {
    console.log("Hi Victor, Server starts now... Port 8081")
})