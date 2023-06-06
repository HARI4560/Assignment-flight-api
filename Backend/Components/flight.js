const pool = require('../Resources/db');
const queries = require('../Resources/queries');

//get all flight details
const getAllFlightDetails = (req, res) => {

    pool.query(queries.getAllFlightDetails, (error, rows) => {
        if (error) throw error;
        res.status(200).json({AllDetails:rows});
    });
};

// filter flight details
const searchFlight = (req, res) =>{
    const {source, destination, date} = req.params;
    const flightDetails = [];
    pool.query(queries.searchFlight,[source, destination, date],(error,rows) => {
        if(error) throw error;
        rows.forEach(data => {
          flightDetails.push({flightName:data.flight_name, flightPrice:data.flight_price});            
        });
        res.status(200).json(flightDetails); 
        
    });
}


module.exports = {
    getAllFlightDetails,
    searchFlight,
}