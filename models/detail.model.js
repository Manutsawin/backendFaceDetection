module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("detail", {
      userId:{
        type: Sequelize.STRING,
      },
      text:{
        type: Sequelize.STRING,
      },
    });
    return User;
  };