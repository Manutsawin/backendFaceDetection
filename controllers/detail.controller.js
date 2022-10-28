const { STRING } = require("sequelize");
const db = require("../models");
const Detail = db.detail;

exports.create = (req, res) => {
    // Save User to Database
    
    Detail.create({
      userId:req.userId,
      text:req.body.text
    })
      .then(txt => {
          res.status(201).send({ message: "create successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

exports.get = (req, res) => {
  // Save User to Database

  Detail.findAll({
    where: {
      userId: req.userId.toString()
    }
  })
    .then(txt => {
      res.status(201).send({txt});
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};