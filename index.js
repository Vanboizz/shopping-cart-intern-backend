require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const product = require("./router/products.route")

const cors = require("cors")
const PORT = process.env.PORT
// cors
app.use(
    cors({
        origin: "*",
    })
)

// Body parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Router
app.use("/api/v1/products", product)

mongoose.connect(process.env.MONGO_URI)
const connection = mongoose.connection
connection.once("open", () => {
    console.log(new Date(), "MongoDB database connection established successfully")
})

app.listen(PORT, () => {
    console.log("Server is up");
})