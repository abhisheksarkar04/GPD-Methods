const mongoose = require('mongoose');

let teacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minLength: [3, "Name should contain Atleast 3 characters"],
            maxLength: [10, "Name should contain Only 10 characters"]
        },
        age:
        {
            type: Number,
            required: true,
            min: [18, "Minimum age should be 18 and you entered {VALUE}"],
            max: [30, "Maximum age should be 30 and you entered {VALUE}"]
        },
        gender: {
            type: String,
            required: true,
            enum: {
                values: ["Male", "Female", "Others"],
                message: "Only male,female and Other are allowed and you entered {VALUE}"
            }
        },
        email: {
            type: "string",
            required: true,
            unique: true,
        }
    },
    { timestamps: true }
)

module.exports = new mongoose.model('TeacherDetails', teacherSchema)