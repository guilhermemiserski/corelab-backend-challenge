const mongoose = require('mongoose');
const Vehicle = mongoose.model("Vehicle")

const createVehicles = (request, response) => {
    //adicionar veiculo
    Vehicle.create(request.body).then(function (v) {
        response.send(v);
    })
}

const updateVehicles = (request, response) => {
    //editar veiculo
    Vehicle.findByIdAndUpdate({ _id: request.params.id },
        request.body).then(function () {
            Vehicle.findOne({ _id: request.params.id }).then(function (v) {
                response.send(v);
            });
        })
}

const deleteVehicles = (request, response) => {
    //deletar veiculo
    Vehicle.findByIdAndRemove({ _id: request.params.id }).then(function (v) {
        response.send(v);
    })
}

const getVehicles = (request, response) => {
    //retornar todos os veiculos
    Vehicle.find({}).then(function (v) {
        response.send(v);
    });
}

const filterVehciles = (request, response) => {
    //filtrar veiculos
    Vehicle.find({
        $or: [
            {
                brand: request.params.brand
            },
            {
                year: request.params.year
            },
            {
                price: { '$gt': request.params.minPrice, '$lt': request.params.maxPrice}
            }
        ]
    }).then(function (v){
        response.send(v);
    })
}

module.exports = {createVehicles, updateVehicles, deleteVehicles, getVehicles, filterVehciles}