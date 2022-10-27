const express = require('express');
const CourseController = require('../controllers/course');
const multipart = require('connect-multiparty');




const md_auth = require('../middleware/authenticated');
const md_upload_avatar = multipart({ uploadDir: "./uploads/avatar" })

const api = express.Router();

api.post("/add-course", [md_auth.ensureAuth], CourseController.addCourse);
api.get("/get-courses", CourseController.getCourses);
api.delete("/delete-course/:id", [md_auth.ensureAuth], CourseController.deleteCourse);
api.put("/update-course/:id", [md_auth.ensureAuth], CourseController.updateCourse);
api.put("/upload-avatar-course/:id", [md_auth.ensureAuth, md_upload_avatar], CourseController.uploadAvatarCourse);
api.get("/get-avatar-course/:avatarName", CourseController.getAvatarCourse);

module.exports = api;