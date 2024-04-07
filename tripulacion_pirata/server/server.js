const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))



const {configureDB} = require("./config/mongoose.config");
configureDB();

const {oAuthRouter} = require("./routes/oauthRouter");
app.use("/", oAuthRouter);

const { pirateRouter } = require("./routes/pirateRouter"); // Importa el enrutador de piratas
app.use("/pirate/", pirateRouter); // Utiliza el enrutador de piratas para todas las rutas que comiencen con "/pirates"


app.listen(8000, () => {
    console.log("Exito: app escuchando en puerto 8000")
})