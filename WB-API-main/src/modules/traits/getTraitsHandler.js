const returnSelectedTraits = require('../../codedData/traits');

const traitsHandler = (resp) => {
    resp.status(200).json({ traits:  returnSelectedTraits("all")});
}

module.exports = traitsHandler;