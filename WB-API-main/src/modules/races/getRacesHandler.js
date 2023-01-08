const returnSelectedRaces = require('../../codedData/races');

const racesHandler = (resp) => {
    resp.status(200).json({ races:  returnSelectedRaces("all")});
}

module.exports = racesHandler;