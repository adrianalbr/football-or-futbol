module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
          }

      },
    });
    return User;
  };
  