// =======================================
//        SCHEMA MODEL DEPENDENCIES
// =======================================
const mongoose = require('mongoose');


// =======================================
//               SCHEMA  
// =======================================
const categorySchema = new mongoose.Schema({
    question: {type: String , required: true},
    answer: {type: String , required: true},
    difficulty: {type: Number, required: true},
  });

const triviaSchema = new mongoose.Schema({
    catName: String,
    catInfo: categorySchema,
  });

// =======================================
//                 MODEL 
// =======================================
const Trivia = mongoose.model('Trivia', triviaSchema);

// =======================================
//             EXPORT MODEL
// =======================================
// Export model to controller
module.exports = Trivia;