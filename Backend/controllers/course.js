const Course = require('../models/course');

function addCourse(req, res){
    const body = req.body;
    const course = new Course(body);
    course.order = 1;

    course.save((err, courseStored) => {
        if (err) {
            res.status(400).send({code: 400, message: "El curso ya existe"})
        } else {
            if (!courseStored) {
                res.status(400).send({code: 400, message: "No se a podido crear el curso"})
            } else {
                res.status(200).send({code: 200, message: "Curso creado correctamente"})
            }
        }
    })
}

function getCourses(req, res) {
    Course.find()
        .sort({order: "asc"})
        .exec((err, coursesStored) => {
            if (err) {
                res.status(500).send({code: 500, message: "Error del servidor"})
            } else {
                if (!coursesStored) {
                    res.status(404).send({code: 404, message: "No se encontro ningun curso"})
                } else {
                    res.status(200).send({code: 200, courses: coursesStored})
                }
            }
        })
}

function deleteCourse(req, res){
    const {id} = req.params;

    Course.findByIdAndRemove(id, (err, courseDelete) => {
        if (err) {
            res.status(500).send({code: 500, message: "Error del servidor"})
        } else {
            if (!courseDelete) {
                res.status(404).send({code: 404, message: "Curso no encontrado"})
            } else {
                res.status(200).send({code: 200, message: "Curso eliminado correctamente"})
            }
        }
    })
}

function updateCourse(req, res){
    const courseData = req.body;
    const id = req.params.id;

    Course.findByIdAndUpdate(id, courseData, (err, courseUpdate) => {
        if (err) {
            res.status(500).send({code: 500, message: "Error del servidor"})
        } else {
            if (!courseUpdate) {
                res.status(404).send({code: 404, message: "No se encontro ningun curso"})
            } else {
                res.status(200).send({code: 200, message: "Curso actualizado correctamente"})
            }
        }
    })
}

function uploadAvatarCourse(req, res) {
    const params = req.params;
    // console.log(params);

    Course.findById({ _id: params.id}, (err, userData) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor"})
        } else {
            if (!userData) {
                res.status(404).send({ message: "No se a encontrado ningun curso"})
            } else {
                let course = userData


                if (req.files) {
                    // para quitar la extension
                    let filePath = req.files.avatar.path;

                    let fileSplit = filePath.split(['\\'],3);

                    let fileName = fileSplit[2];

                    let extSplit = fileName.split(['.'],2);
                    let fileExt = extSplit[1]

                    if (fileExt !== "png" && fileExt !== "jpeg") {
                        res.status(400).send({message: "La extension de la imagen no es valida solo png o jpg"})
                    } else {
                        course.avatar = fileName;
                        Course.findByIdAndUpdate({ _id: params.id }, course, (err, userResult) =>{
                            if (err) {
                                res.status(500).send({message: "Error del servidor"})
                            } else {
                                if (!userResult) {
                                    res.status(404).send({message: "No se encontro al usuario"})
                                } else {
                                    res.status(200).send({ avatarName: fileName})
                                }
                            }
                        })
                    }
                }
            }
        }
    })
}

function getAvatarCourse(req, res) {
    const avatarName = req.params.avatarName;
    const filePath = "./uploads/avatar/" + avatarName;

    fs.exists(filePath, exists => {
        if (!exists) {
            res.status(404).send({message: "El avatar no existe"})
        } else {
            res.sendFile(path.resolve(filePath));
        }
    })
}



module.exports = {
    addCourse,
    getCourses,
    deleteCourse,
    updateCourse,
    uploadAvatarCourse,
    getAvatarCourse
}