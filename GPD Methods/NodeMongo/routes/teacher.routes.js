const express = require('express');

//! Require Controller
const { addTeacher, getTeacher, deleteTeacher } = require('../controller/teacher.controller')

let router = express.Router();

//! Route operations
router.post('/addteacher', addTeacher)
router.get('/getteachers', getTeacher)
router.delete('/deleteteacher', deleteTeacher)

module.exports = router;