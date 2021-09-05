require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true })); 
app.use(cors({
    origin: "http://localhost:3000"
}));
const AllUntappdRoutes = require('./routes/beer.routes');
AllUntappdRoutes(app);
app.listen(process.env.MY_PORT, () => { 
    console.log('The voices in my head are speaking') 
});