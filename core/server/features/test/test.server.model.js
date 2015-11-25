var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
    quizzes: {
        required: true,
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
        }]
    },    
    title: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },    
    description: {
        type: String,
        trim: true,
        minlength: 1
    },
    created: {
        type: Date,
        default: Date.now
    },
    creator: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    stats: {
        type: Object,
        default: {}
    },
    timelimit : {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Test', QuizSchema);