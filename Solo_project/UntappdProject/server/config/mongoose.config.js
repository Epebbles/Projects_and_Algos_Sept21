const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/untappddb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("I hope you're thirsty!"))
    .catch((err) => console.log("Where is my drink?", err));