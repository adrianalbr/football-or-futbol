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
        len: [1,99] 
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    agility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    kickPower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    tackle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    jumping: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    stamina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric: true,
        len: [1,99] 
      }
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isAlpha: true
      }
    },
  });

  Player.associate = function (models) {
    Player.belongsToMany(models.User, {
      through: ""
    })
  }
  return Player;
};
