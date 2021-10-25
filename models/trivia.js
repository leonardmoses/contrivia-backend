// =======================================
//        SCHEMA MODEL DEPENDENCIES
// =======================================
const mongoose = require('mongoose');


// =======================================
//               SCHEMA  
// =======================================
// const triviaSchema = new mongoose.Schema(
//   {
//     catName: String,
//     catInfo: 
//                  {
//                    question: String,
//                    answer: String,
//                  }
               
//   }
// );

const categorySchema = new mongoose.Schema({
    question: {type: String , required: false},
    answer: {type: String , required: false},
    difficulty: {type: Number, required: false},
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
