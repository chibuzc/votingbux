const mongoose = require('mongoose');
const {Schema} = mongoose;

const electorateSchema = new mongoose.Schema({
    iddentity:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    registeredContestant: [{ type: Schema.Types.ObjectId, ref: 'Contestants' }],
    registeredVoters: [{ type: Schema.Types.ObjectId, ref: 'Voters' }],
    officiatingElection: [{ type: Schema.Types.ObjectId, ref: 'Elections' }],
    registeredBy:[{ type: Schema.Types.ObjectId, ref: 'User' }],
})

mongoose.model('Electorate', electorateSchema)