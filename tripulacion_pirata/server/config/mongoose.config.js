const mongoose = require("mongoose");

module.exports = {
    configureDB: () => {
        mongoose.connect("mongodb://localhost/piratas", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log("Estamos conectados a la base de datos"))
            .catch(err => console.log("Hubo un error al conectarse a la base de datos", err))
    }
}

