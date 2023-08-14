import mongoose from "mongoose";

// Defining schema
const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    email: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    salary: { type: Number, required: true },
});

const EmployeeModel = mongoose.model('AllEmployeesDetails', employeeSchema);

export default EmployeeModel;











