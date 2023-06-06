const {Router} =  require('express');
const flightRoutes = require('./flight');

const router = Router();

//get all flight details
router.get("/", flightRoutes.getAllFlightDetails);

// filter flight details
router.post("/search/:source/:destination/:date", flightRoutes.searchFlight);


module.exports = router;