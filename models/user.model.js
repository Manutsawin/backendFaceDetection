module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      firstName:{
        type: Sequelize.STRING,
        
      },
      lastName:{
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
      age:{
        type: Sequelize.INTEGER,
        
      }
    });
    return User;
  };