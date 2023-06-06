const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const AllFlightDetails = require('./Components/flightRoutes');



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/flight', AllFlightDetails);


//middleware
app.use((req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        message: error.message

    });
});


app.listen(port, () => console.log(`app listening on port ${port}`));