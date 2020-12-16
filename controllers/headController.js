let db = require("../models");

function routes(app) {
  app.get("/api/heads/:id", function (req, res) {
    db.Head.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (data) {
        res.json(data);
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

  app.post("/api/vs", function (req, res) {
    console.log(req.body);
    comparePlayers(req, res);
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
  if (playerOneScore > playerTwoScore) {
    winnerId = playerOneDt.id;
    result = `${playerOneDt.firstName} ${playerOneDt.lastName} - ${playerOneScore} beats ${playerTwoDt.firstName} ${playerTwoDt.lastName} - ${playerTwoScore} `;
  } else if (playerOneScore < playerTwoScore) {
    winnerId = playerTwoDt.id;
    result = `${playerTwoDt.firstName} ${playerTwoDt.lastName} - ${playerTwoScore} beats ${playerOneDt.firstName} ${playerOneDt.lastName} - ${playerOneScore} `;
  } else {
    result = `Its a tie`;
  }

  // insert the result into the table
  db.Head.create({
    result: result,
    userId: req.body.userId,
    playerOneId: req.body.playerOneId,
    playerTwoId: req.body.playerTwoId,
    winnerId: winnerId,
  })
    .then(function (data) {
      res.json({
        result: result,
        userId: req.body.userId,
        playerOneId: req.body.playerOneId,
        playerTwoId: req.body.playerTwoId,
        winnerId: winnerId,
      });
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
}

module.exports = routes;
