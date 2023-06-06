//get all flight details
const getAllFlightDetails = "SELECT * FROM flight ";

// filter flight details
const searchFlight = "SELECT flight_name, flight_price FROM flight WHERE source= ? AND destination =? AND date = ?";



module.exports={
    getAllFlightDetails,
    searchFlight,
}
