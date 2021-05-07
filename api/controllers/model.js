const Model = require('../models/model');
const mongoose = require("mongoose");
module.exports = {
    getModel: (req, res) => {
        res.status(200).json({
            message: 'Hello World getModel'
        })
    },
/*    postModel:(req, res) => {
        res.status(200).json({
            message: 'Hello World postModel'
        })
    },*/
    postModel:(req, res) => {
        //const {title, description, content} = req.body;
        const model = new Model({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        });
        model.save()
            .then(()=>{
            res.status(200).json({
                message: 'Created model'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteModel:(req, res) => {
        res.status(200).json({
            message: 'Hello World deleteModel'
        })
    },
    getModelsState:(req, res) => {
        Model.find().then((models)=> {
            res.status(200).json({
                models
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    getAnomaly:(req, res) => {
        res.status(200).json({
            message: 'Hello World getAnomaly'
        })
    }
}