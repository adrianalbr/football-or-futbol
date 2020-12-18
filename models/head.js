module.exports = function (sequelize, DataTypes) {
  const Head = sequelize.define("Head", {
    result: {
      type: DataTypes.STRING,
      allowNull: false
    },

    playerOneId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      },
    },
    playerTwoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      },
    },
    winnerId: {
      type: DataTypes.INTEGER,
    },

    winnerGame: {
      type: DataTypes.STRING
      
    },
  });
  return Head;
};
