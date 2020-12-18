module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [2, 200]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [2, 200]
        }
        
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

  // User.associate = function(models){
  //   User.hasMany(models.Player)
  // }; 
    return User;
  };
  