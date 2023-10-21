const express = require('express');

//! Require Controller
const { addTeacher, getTeacher, getSingleTeacher, updateTeacher, deleteTeacher } = require('../controller/teacher.controller')

let router = express.Router();

//! Route operations
router.post('/addteacher', addTeacher)
router.get('/getteachers', getTeacher)
router.get('/getsingleteacher', getSingleTeacher)
router.put('/updateteacher', updateTeacher)
router.delete('/deleteteacher', deleteTeacher)

module.exports = router;