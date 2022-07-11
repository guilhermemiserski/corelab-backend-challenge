const { Router } = require('express');
const { createVehicles, updateVehicles, deleteVehicles, getVehicles, filterVehciles } = require('../controllers/index')

const routes = Router();

routes.get('/veiculos', getVehicles);


routes.post('/veiculos', createVehicles);


routes.put('/veiculos/:id', updateVehicles);


routes.delete('/veiculos/:id', deleteVehicles);


routes.get('/filtrar/:brand/:year/:minPrice/:maxPrice', filterVehciles);

module.exports = { routes };

