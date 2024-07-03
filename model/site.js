const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
});

module.exports = mongoose.model('Site', siteSchema);
