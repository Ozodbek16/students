const { Schema, model } = require('mongoose')

const pupilSchema = {
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    group: {
        type: Number,
        require: true
    },
    month: {
        type: Number,
        require: true
    },
    score: {
        type: Number,
        require: true
    }
}

module.exports = model('clothe',pupilSchema)