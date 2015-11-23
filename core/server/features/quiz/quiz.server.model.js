var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({

    instructions: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },

    stem: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },

    truthies: {
        type: [{ type: String, trim: true, minlength: 1 }],
        required: true
    },

    falsies: {
        type: [{ type: String, trim: true, minlength: 1 }],
        required: true
    },

    tags: {
        type: [{ type: String, trim: true, minlength: 1 }],
        required: true
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