const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContestantsSchema = new mongoose.Schema({
    identity: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    email: {type:String, unique:true},
    election: [{ type: Schema.Types.ObjectId, ref: 'Election' }],
    registeredBy:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    votes: Number
})

mongoose.model("Contestant", ContestantsSchema)