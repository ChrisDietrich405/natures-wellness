const mapsMethods = require('../../codedData/maps');

const getMapsHandler = (resp) => {
    console.log(mapsMethods);
    resp.status(200).json({ maps:  mapsMethods.returnSelectedMaps("all")});
}

module.exports = getMapsHandler;