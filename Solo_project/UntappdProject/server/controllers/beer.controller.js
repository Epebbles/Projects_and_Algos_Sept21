const Beer = require('../models/beer.model');

const getAllBeers = ( req, res ) => {
    Beer.find({})
        .then((allBeers) => res.json(allBeers))
        .catch((err) => res.status(400).json({error: err}));
}

const createBeer = (req, res) => {
    const { name, photoUrl, style, brewery, description} = req.body;
    Beer.create({
        name,
        photoUrl,
        style,
        brewery,
        description,
    })
        .then((newBeer) => res.json(newBeer))
        .catch((err) => {
            console.log(err.errors)
            res.status(400).json({error: err.errors});
        });
}

const getOneBeer = (req, res) => {
    Beer.findOne({ _id: req.params.beerId})
        .then((beer) => res.json(beer))
        .catch((err) => res.status(400).json({error: err}));
}

const editBeer = (req, res) => {
    const {body} = req;
    Beer.findByIdAndUpdate(
        { _id: req.params.beerId }, body,
        { new: true, runValidators: true }
    )
        .then((editBeer) => res.json(editBeer))
        .catch((err) => res.status(400).json({error: err}));
}

const deleteBeer = (req, res) => {
    Beer.deleteOne({ _id: req.params.beerId })
        .then((deleteConfirm) => res.json(deleteConfirm))
        .catch((err) => res.status(200).json({error: err}));
}

module.exports = {
    getAllBeers,
    createBeer,
    getOneBeer,
    editBeer,
    deleteBeer,
}