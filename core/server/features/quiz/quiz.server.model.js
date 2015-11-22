var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({

    instructions: {
        required: true,
        trim: true,
        type: String,
    },

    stem: {
        required: true,
        trim: true,
        type: String,
    },

    truthies: {
        required: true,
        trim: true,
        type: [String]
    },

    falsies: {
        required: true,
        trim: true,
        type: [String]
    },

    tags: {
        required: true,
        trim: true,
        type: [String]
    },

    created: {
        type: Date,
        default: Date.now
    },

    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    stats: {
        type: Object,
        default: {}
    }

});

module.exports = mongoose.model('Quiz', QuizSchema);