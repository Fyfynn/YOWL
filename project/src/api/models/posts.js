const mongoose = require('mongoose');

//post schema
const post = mongoose.model('post', {
    title: {
        type: String,
        required: [true, 'title is required']
    },
    file_title: {
        type: String,
        required: [true, 'file is required']
    },
    timestamp: {
        type: Date,
        required: [true, 'time is required']
    },
    link: {
        type: String,
        required: [true, 'link is required']
    },
    content: {
        type: String,
        required: [true, 'content is required']
    },
    // //category_idcategory: {
    // //  type: Number,
    //     required: [true, 'category is required']
    // },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true]
    },
    // categorie_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categorie',
    //     // required: [true, 'categorie_id is required']
    // }
});

module.exports =  { post }
