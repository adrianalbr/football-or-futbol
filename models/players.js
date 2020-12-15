module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        min: 2
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    acceleration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true, 
      }
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
