module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    acceleration: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    strength: {
      type: DataTypes.INTEGER,
    },
    agility: {
      type: DataTypes.INTEGER,
    },
    kickPower: {
      type: DataTypes.INTEGER,
    },
    tackle: {
      type: DataTypes.INTEGER,
    },
    jumping: {
      type: DataTypes.INTEGER,
    },
    stamina: {
      type: DataTypes.INTEGER,
    },
    source: {
      type: DataTypes.STRING,
    },
  });

  Player.associate = function (models) {
    Player.belongsToMany(models.User, {
      through: ""
    })
  }
  return Player;
};
