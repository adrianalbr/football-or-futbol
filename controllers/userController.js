let db = require("../models");
module.exports = function(app){
    app.post("/api/user", function(req,res){
        db.User.create(req.body).then(function(data){
            res.json(data)
        }).catch(function(err){
            res.status(500).json(err);
        });
    });

    app.get("/api/user/:email", function(req,res){
        db.User.findOne({
            where:{
                email : req.params.email
            }
        }).then(function(data){
            res.json(data)
        }).catch(function(err){
            res.status(404).json(err);
        });
    });

    app.delete("/api/user/:email", function(req,res){
        db.User.destroy({
            where:{
                email : req.params.email
            }
        }).then(function(data){
            res.json(data)
        }).catch(function(err){
            res.status(404).json(err);
        });
    });
};