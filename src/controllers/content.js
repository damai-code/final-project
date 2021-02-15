const Content = require('../models/content');


exports.insertContent = async (req, res, next) => {
    let newContent = new Content ({
        title: req.body.tittle,
        image: req.body.image,
        video: req.body.video,
        description: req.body.description,
        time: req.body.time,
        gender: req.body.gender,
        equipment: req.body.equipment,
        intensity: req.body.intensity,
    });

    let message = ""
    // get content
    const findContent = await Content.findOne({title: title});

    // insert Content
    const createContent = new Content(newContent)
    await createContent.save();

    //for check it in database
    try {
        const contentExist = await findContent(newContent.title);

        if(contentExist) {
            message = `${newContent.title} already exist`;
        } else {
            await createContent(newContent);
            message = `${newContent.title} successfully inserted`;
        }

        res.send({
            status: 200,
            message: message
        });
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.getAllContent = async (req, res, next) => {
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


exports.getOneContent = async (req, res, next) => {
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


//get by intensity
exports.getContentByIntensity = async (req, res, next) => {
    let intensity = req.params.intensity;
    const allContent = await Content.find({ intensity: intensity});

    try {
        if(allContent.length === 0) {
            data = "Content not found";
        } else {
            data = allContent;
        }
        res.send({
            status: 200,
            data: data
        });
    } catch (err) {
        console.log(err);
    }
},


exports.updateContent = async (req, res, next) => {
    const _id = req.params.id;
    try {
        const content = await Content.findByIdAndUpdate(_id);

        await content.save();
        res.status(200).json(content);
    } catch (err) {
        res.status(500).json({
            message: 'Update failed!'
        });
    }
    // const {title, image, video, description, time, gender, equipment, intensity} = req.body;

    // try {
    //     await Content.findOneAndUpdate(
    //         {_id: id},
    //         {title: title},
    //         {image: image},
    //         {video: video},
    //         {description: description},
    //         {time},
    //         {gender},
    //         {equipment},
    //         {intensity}
    //         )
    //     res.send("Content was updated");
    // } catch (err) {
    //     console.log(err);
    // }
}

exports.deleteContent = async (req, res, next) => {
    const_id = req.params.id
    await Content.findByIdAndDelete().then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
            error: error
            });
        }
    );
}