const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contentSchema = new Schema({
    title: {type: String, required: true},
    images: [{type: String, required: true}],
    video: [{type: String, required: true}],
    description: {type: String},
    time: {type: String},
    gender: [{type: String}],
    equipment: [{type: String}],
    intensity: [{type: String}],
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Content', contentSchema);