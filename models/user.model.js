module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      fullName:{
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        
      },
      gender:{
        type: Sequelize.STRING,
        
      },
      call:{
        type: Sequelize.STRING,
        
      }
    });
    return User;
  };