module.exports = function (sequelize, DataTypes) {
    const Head = sequelize.define("Head", {
      result: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    });
    return Head;
  };
  