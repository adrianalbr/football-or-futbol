module.exports = function (sequelize, DataTypes) {
    const Head = sequelize.define("Head", {
      firstName: {
        type: DataTypes.STRING,
      },
    });
    return Head;
  };
  