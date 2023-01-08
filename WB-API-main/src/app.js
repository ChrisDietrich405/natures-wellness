const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const getMyCharacters = require("./modules/characters/getMyCharactersHandler");
const createCharacter = require("./modules/characters/createCharacterHandler");

const getRaces = require("./modules/races/getRacesHandler");

const getMaps = require("./modules/maps/getMapsHandler");

const getItens = require("./modules/itens/getItensHandler");
const updateCharacterItens = require("./modules/itens/updateCharacterItensHandler");

const getSkills = require("./modules/skills/getSkillsHandler");
const updateCharacterSkills = require("./modules/skills/updateCharacterSkillsHandler");

const getTraits = require("./modules/traits/getTraitsHandler");
const updateCharacterTraits = require("./modules/traits/updateCharacterTraitsHandler");

const getMonsters = require("./modules/monsters/getMonstersHandler");

const createPveBattle = require("./modules/battle/createPveBattleHandler");
const actionPveBattle = require("./modules/battle/actionPveBattleHandler");

const app = express();

app.use(cors({ origin: "*" }));
// app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

app.post("/login", (req, resp, next) => {
  const queryText = "SELECT * FROM WB_USER WHERE Email = $1;";

  const queryParams = JSON.parse(req.body.params);

  client.query(queryText, [queryParams.email], (err, res) => {
    if (res.rows.length !== 0) {
      if (
        res.rows[0].email == queryParams.email &&
        res.rows[0].password == queryParams.password
      ) {
        resp.json({ authentication: true, userData: res.rows[0] });
      } else {
        resp
          .status(400)
          .json("Verifique a sua senha e nome de usuário e tente novamente.");
      }
    } else {
      resp
        .status(400)
        .json("Verifique a sua senha e nome de usuário e tente novamente.");
    }
  });
});

// CHARACTERS
app.get("/characters", (req, res, next) => {
  console.log("RDX: ", req.query);
  const userId = req.query.userId
    ? req.query.userId
    : JSON.parse(req.query[0]).userId;
  getMyCharacters(userId, client, res);
});

app.post("/chris", async (req, res, next) => {
  const characterData = JSON.parse(req.body.params);
  console.log("NEW CHAR: ", characterData);
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "chrisdietrichdumbemail@gmail.com",
      //password: Devindi1!
      pass: "Devindi1!",
    },
  });

  let info = await transporter.sendMail({
    from: 'chrisdietrichdumbygmail@gmail.com',
    to: "chrisdietrich3666@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  }, (error) => {
    console.log("ERROR: ", error);
  });

});

module.exports = app;
