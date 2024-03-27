const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.telefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.companyName();
        this.direccion = {
            calle: faker.address.streetName(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        };
    }
}

app.get('/api/usuario/nuevo', (req, res) => {
    const usuario = new Usuario();
    res.json(usuario);
});

app.get('/api/empresa/nueva', (req, res) => {
    const empresa = new Empresa();
    res.json(empresa);
});

app.get('/api/usuario/empresa', (req, res) => {
    const usuario = new Usuario();
    const empresa = new Empresa();
    res.json({usuario, empresa});

});

app.listen(port, () => console.log(`Escuchando en el puerto: ${port}`));