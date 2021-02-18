require('dotenv').config();
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const s3 = new AWS.S3();
const Content = require('../models/content');


exports.insertContent = async (req, res) => {
    const {title, image, video, description, time, gender, equipment, intensity} = req.body;

    let message = ""
    try {
        const contentExist = await Content.findOne({title: title});

        if(contentExist) {
            message = `${newContent.title} already exist`;
        }

        let createContent = await Content.create({
            title: title,
            image: image,
            video: video,
            description: description,
            time: time,
            gender: gender,
            equipment: equipment,
            intensity: intensity
        });

        if (createContent) {
            message = `${title} successfully inserted`;
        }

        res.send({
            status: 200,
            message: message
        });
    } catch(err) {
        res.status(500).send(err);
    }
}

// exports.getContentByIntensity = async (req, res) => {
//     await Content.find({intensity: req.params.intensity}).then(
//         (contents) => {
//         res.status(200).json(contents)
//         }
//     ).catch(
//         (error) => {
//             res.json({
//             error: error.message
//             });
//         }
//     );
// }


exports.getAllContent = async (req, res) => {
    await Content.find().then(
        (contents) => {
        res.status(200).json(contents)
        }
    ).catch(
        (error) => {
            res.status(400).json({
            error: error
            });
        }
    );
}

exports.getOneContent = async (req, res) => {
    await Content.findOne({_id: req.params.id}).then(
        (content) => {
            res.status(200).json(content);
        }
    ).catch(
        (error) => {
            res.status(404).json({
            error: error
            });
        }
    );
};


exports.updateContent = async (req, res) => {
    const content = new Content({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        gender: req.body.gender,
        equipment: req.body.equipment,
        intensity: req.body.intensity
    });

    await Content.updateOne({_id: req.params.id}, content).then(
        () => {
            res.status(201).json({
                message: 'Content updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}


exports.deleteContent = async (req, res) => {
    await Content.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
            error: error
            });
        }
    );
}

exports.uploadImages = async (req, res) => {
    const id = data.contentId;
    const filter = {_id: id};
    const insert = {
        image: req.file.location,
    };
    return await Content.create(filter, insert, {
        new: true
    }),
    res.status(200).json({message: "success insert image"})
}