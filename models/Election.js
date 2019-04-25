const mongoose =require('mongoose');
const {Schema} = mongoose;

const ElectionSchema = new mongoose.Schema({
    name: String,
    constestants: [{ type: Schema.Types.ObjectId, ref: 'Contestants' }],
    constestantNames:[{type: String}],
    registeredVoters: [{ type: Schema.Types.ObjectId, ref: 'Voters' }],
    electorates:  [{ type: Schema.Types.ObjectId, ref: 'Electorate' }],
    electorateUser:  [{ type: Schema.Types.ObjectId, ref: 'User' }],
    voters: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    Votes: Number,
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' }
})

mongoose.model('Election',ElectionSchema)