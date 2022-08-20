const mongoose = require('mongoose');

const categorie = mongoose.model('categorie', {
    name: {
        type: String,
        required: [true, 'name is required']
    },
});

module.exports =  { categorie }