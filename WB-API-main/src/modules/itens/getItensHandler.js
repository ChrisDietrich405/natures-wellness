const returnSelectedItens = require('../../codedData/itens');

const itensHandler = (resp) => {
    resp.status(200).json({ itens:  returnSelectedItens("all")});
}

module.exports = itensHandler;