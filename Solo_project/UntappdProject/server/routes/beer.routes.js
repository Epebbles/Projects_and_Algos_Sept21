const BeerController = require('../controllers/beer.controller');
const { authenticate } = require('../middleware/jwt.middleware');

module.exports = function(app){
    app.get('/api/beers', BeerController.getAllBeers);
    app.post('/api/beers', authenticate, BeerController.createBeer);
    app.get('/api/beers/:beerId', BeerController.getOneBeer);
    app.put('/api/beers/:beerId', authenticate, BeerController.editBeer);
    app.delete('/api/beers/:beerId', authenticate, BeerController.deleteBeer);
}