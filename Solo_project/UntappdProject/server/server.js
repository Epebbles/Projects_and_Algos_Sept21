require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true })); 
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser());
const AllUntappdRoutes = require('./routes/beer.routes');
AllUntappdRoutes(app);
require('./routes/user.routes')(app);
app.listen(process.env.MY_PORT, () => { 
    console.log('The voices in my head are speaking') 
});