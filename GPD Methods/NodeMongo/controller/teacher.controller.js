//* Connect to schema
let Teacher = require('../models/teacher.models');

//* POST Method 
let addTeacher = async (req, res, next) => {
    let { name, age, gender, email } = req.body

    let newTeacher = await Teacher.create({ name, age, gender, email })
    res.status(201).json({ error: false, message: 'Teacher Added successfully', data: newTeacher })
}

//* GET Method
let getTeacher = async (req, res, next) => {
    let allTeachers = await Teacher.find()
    res.status(200).json({ error: false, data: allTeachers, message: 'Teachers fetched Successfully' })
}



//* DELETE Method
let deleteTeacher = async (req, res, next) => {

    let { tid } = req.params

    let isAvailable = await Teacher.findById(tid)
    if (!isAvailable) {
        res.status(404).json({ error: true, message: `Teacher is not found on given id ${tid}` })
    }

    let deletedTeacher = await Teacher.findOneAndDelete({ _id: tid })
    res.status(200).json({ error: false, message: `Teacher deleted successfully`, data: deletedTeacher })
}


module.exports = {
    addTeacher,
    getTeacher,
    deleteTeacher
}