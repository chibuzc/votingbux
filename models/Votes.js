const mongoose = require('mongoose');
const {Schema} = mongoose;


const votesSchema = new mongoose.Schema({

    electionId: [{ type: Schema.Types.ObjectId, ref: 'Election' }],
    contestantId: [{ type: Schema.Types.ObjectId, ref: 'Contestant' }],
    voterId: {type:String, unique:true}
})

 mongoose.model("Votes", votesSchema);
