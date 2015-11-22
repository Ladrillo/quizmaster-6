var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    google: {
        type: Object
    },
    facebook: {
        type: Object
    },
    editing: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    }],
    stats: {
        type: Object,
        default: {}
    }
});

module.exports = mongoose.model('User', UserSchema);