module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 2,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      },
    },
    acceleration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    agility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    kickPower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    tackle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    jumping: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    stamina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        max: 99,
        min : 1
      },
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'sportsCenter',
      validate: {
        isAlpha: true,
        len: [2, 200],
      },
    },
  });
  
  // Player.associate = function (models) {
  //   Player.hasOne(models.User);
  // };
  return Player;
};
