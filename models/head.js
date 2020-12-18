module.exports = function (sequelize, DataTypes) {
  const Head = sequelize.define("Head", {
    result: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      },
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
