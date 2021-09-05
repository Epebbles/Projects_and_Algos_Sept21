const BeerController = require('../controllers/beer.controller');

module.exports = function(app){
    app.get('/api/beers', BeerController.getAllBeers);
    app.post('/api/beers', BeerController.createBeer);
    app.get('/api/beers/:beerId', BeerController.getOneBeer);
    app.put('/api/beers/:beerId', BeerController.editBeer);
    app.delete('/api/beers/:beerId', BeerController.deleteBeer);
}