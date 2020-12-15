let db = require("../models");

function routes(app) {
  app.post("/api/heads", function (req, res) {
    db.Head.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  });

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

// let playerOneScore = 0;
// let playerTwoScore = 0;
// function compareAttributes(playerOneAttr, playerTwoAttr){

// }

async function comparePlayers(req, res) {
  // get playerOne details
  let playerOneResult = await fetchPlayerDetails(req.body.playerOneId);
  let playerTwoResult = await fetchPlayerDetails(req.body.playerTwoId);
  let playerOneDt = playerOneResult.dataValues;
  let playerTwoDt = playerTwoResult.dataValues;
  // console.log(playerOneDt, playerTwoDt);
  

  //comparing the values of two players
  let playerOneScore = 0;
  let playerTwoScore = 0;
  if (playerOneDt.acceleration > playerTwoDt.acceleration) {
    playerOneScore++;
  } else if (playerOneDt.acceleration < playerTwoDt.acceleration) {
    playerTwoScore++;
  }

  if (playerOneDt.speed > playerTwoDt.speed) {
    playerOneScore++;
  } else if (playerOneDt.speed < playerTwoDt.speed) {
    playerTwoScore++;
  }

  if (playerOneDt.strength > playerTwoDt.strength) {
    playerOneScore++;
  } else if (playerOneDt.strength < playerTwoDt.strength) {
    playerTwoScore++;
  }

  if (playerOneDt.agility > playerTwoDt.agility) {
    playerOneScore++;
  } else if (playerOneDt.agility < playerTwoDt.agility) {
    playerTwoScore++;
  }

  if (playerOneDt.kickPower > playerTwoDt.kickPower) {
    playerOneScore++;
  } else if (playerOneDt.kickPower < playerTwoDt.kickPower) {
    playerTwoScore++;
  }

  if (playerOneDt.tackle > playerTwoDt.tackle) {
    playerOneScore++;
  } else if (playerOneDt.tackle < playerTwoDt.tackle) {
    playerTwoScore++;
  }

  if (playerOneDt.jumping > playerTwoDt.jumping) {
    playerOneScore++;
  } else if (playerOneDt.jumping < playerTwoDt.jumping) {
    playerTwoScore++;
  }

  if (playerOneDt.stamina > playerTwoDt.stamina) {
    playerOneScore++;
  } else if (playerOneDt.stamina < playerTwoDt.stamina) {
    playerTwoScore++;
  }

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
