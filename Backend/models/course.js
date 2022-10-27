const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = Schema({
    idCourse: {
        type: Number,
        unique: true,
        required: true
    },
    title: String,
    link: String,
    coupon: String,
    avatar: String,
    price: Number,
    order: Number
})

module.exports = mongoose.model("Course", CourseSchema);