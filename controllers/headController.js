let db = require("../models");

function routes(app) {
  app.get("/api/heads/:id", function (req, res) {
    db.Head.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (data) {
        console.log(data.dataValues);
        res.render("winner", {
          result: data.dataValues.result,
          winnerGame: data.dataValues.winnerGame,
        });
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.get("/api/heads", function (req, res) {
    db.Head.findAll()
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.post("/api/headToHead", function (req, res) {
    console.log(req.body);
    comparePlayers(req, res);
  });

  app.get("/headTohead",function (req, res) {
    // let footballPlayers = await fetchPlayers("football");
    // let futbolPlayers = await fetchPlayers("futbol");
    db.Player.findAll({
      where: {
        game: "futbol",
      },
    })
      .then(function (futbolData) {
        db.Player.findAll({
          where: {
            game: "football",
          },
        })
          .then(function (footBallData) {
            res.render("headTohead", {
              futbolPlayers: futbolData,
              footballPlayers: footBallData,
            });
          })
          .catch(function (err) {
            res.status(404).json(err);
          });
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });
}


function fetchPlayerDetails(reqId) {
  return db.Player.findOne({
    where: {
      id: reqId,
    },
  });
}

let playerOneScore = 0;
let playerTwoScore = 0;
function compareAttributes(playerOneAttr, playerTwoAttr) {
  if (playerOneAttr > playerTwoAttr) {
    playerOneScore++;
  } else if (playerOneAttr < playerTwoAttr) {
    playerTwoScore++;
  }
}

async function comparePlayers(req, res) {
  // get playerOne details
  let playerOneResult = await fetchPlayerDetails(req.body.playerOneId);
  let playerTwoResult = await fetchPlayerDetails(req.body.playerTwoId);
  let playerOneDt = playerOneResult.dataValues;
  let playerTwoDt = playerTwoResult.dataValues;
  // console.log(playerOneDt, playerTwoDt);

  //comparing the values of two players
  compareAttributes(playerOneDt.acceleration, playerTwoDt.acceleration);
  compareAttributes(playerOneDt.speed, playerTwoDt.speed);
  compareAttributes(playerOneDt.strength, playerTwoDt.strength);
  compareAttributes(playerOneDt.agility, playerTwoDt.agility);
  compareAttributes(playerOneDt.kickPower, playerTwoDt.kickPower);
  compareAttributes(playerOneDt.tackle, playerTwoDt.tackle);
  compareAttributes(playerOneDt.jumping, playerTwoDt.jumping);
  compareAttributes(playerOneDt.stamina, playerTwoDt.stamina);

  // comparing final scores
  let result;
  let winnerId;
  let winnerGame;
  if (playerOneScore > playerTwoScore) {
    winnerId = playerOneDt.id;
    winnerGame = `${playerOneDt.game}`;
    result = `${playerOneDt.firstName} ${playerOneDt.lastName} beats ${playerTwoDt.firstName} ${playerTwoDt.lastName}`;
  } else if (playerOneScore < playerTwoScore) {
    winnerId = playerTwoDt.id;
    winnerGame = `${playerTwoDt.game}`;
    result = `${playerTwoDt.firstName} ${playerTwoDt.lastName} beats ${playerOneDt.firstName} ${playerOneDt.lastName}`;
  } else {
    result = `Its a tie`;
  }

  // insert the result into the table
  db.Head.create({
    result: result,
    playerOneId: req.body.playerOneId,
    playerTwoId: req.body.playerTwoId,
    winnerId: winnerId,
    winnerGame: winnerGame,
  })
    .then(function (data) {
      console.log(data);
      res.json({
        id: data.dataValues.id,
      });
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

module.exports = routes;
