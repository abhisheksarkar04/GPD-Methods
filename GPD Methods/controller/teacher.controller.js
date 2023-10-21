//* Connect to schema
let Teacher = require('../models/teacher.models');

//* Add teacher

let addTeacher = async (req, res, next) => {
    let { name, age, gender, email } = req.body

    let newTeacher = await Teacher.create({ name, age, gender, email })
    res.status(201).json({ error: false, message: 'Teacher Added successfully', data: newTeacher })
}

//* Get all Teacher

let getTeacher = async (req, res, next) => {
    let allTeachers = await Teacher.find()
    res.status(200).json({ error: false, data: allTeachers, message: 'Teachers fetched Successfully' })
}

//* Get a single teacher

let getSingleTeacher = async (req, res, next) => {

    let { tid } = req.params
    console.log(tid)

    let singleTeacher = await Teacher.findone({ name: tid })
    if (!singleTeacher) {
        return res.status(200).json({ error: true, data: singleTeacher, message: 'No teacher found On Given Data',data:null })

    }

}

//* Updating teacher

let updateTeacher = async (req, res, next) => {
    let { name, age, gender, email } = req.body
    let { tid } = req.params

    let singleTeacher = await Teacher.findById(tid)

    if (!singleTeacher) {
        return res.status(404).json({ error: true, message: 'No Teacher found' })
    }

    let updatedTeacher = await Teacher.findOneAndUpdate({ _id: tid }, { name, age, gender, email }, { new: true })

    console.log(req.body)
    console.log(req.params)

    res.status(200).json({ error: false, message: `${updatedTeacher.name.toUpperCase()},s age is updated from ${singleTeacher.age} to ${updatedTeacher.age} successfully`, data: updatedTeacher })

}

//* Delete a Teacher

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
    getSingleTeacher,
    updateTeacher,
    deleteTeacher
}