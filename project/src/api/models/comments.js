const mongoose = require('mongoose');


//employee schema
const comment = mongoose.model('comment', {
        content: {
         type: String,
            required: [true, 'content is required']
        },
        post_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'post',
                       required: [true, 'post_id is required']
               },
        user_id: {
        type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                       required: [true, 'user_id is required']
               },
        author: {
                type: String,
                ref: 'user',
                required: [true, 'user_id is required']
                },
});
      
module.exports =  { comment }
