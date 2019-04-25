const mongoose = require('mongoose');
const {Schema} = mongoose;

const voterSchema = new mongoose.Schema({
    identity: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    election: [{ type: Schema.Types.ObjectId, ref: 'Election' }],
    registeredBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    eligibleElections: [{ type: Schema.Types.ObjectId, ref: 'Election' }],
    participatedElections: [{ type: Schema.Types.ObjectId, ref: 'Election' }]
})

mongoose.model('Voter', voterSchema)