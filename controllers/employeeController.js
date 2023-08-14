import EmployeeModel from "../models/employeeModel.js";

export const createDoc = async (req, res) => {
  console.log('Create Document Post Method');
  try {
    const { firstName, lastName, age, email, company, salary } = req.body;
    const doc = new EmployeeModel({
      firstName,
      lastName,
      age,
      email,
      company,
      salary
    });

    const result = await doc.save();
    res.redirect("/");

  } catch (error) {
    console.log("Document not saved successfully and the error is " + error);
  }
};

export const getAlldoc = async (req, res) => {
  try {
    const result = await EmployeeModel.find();
    res.render("index", { data: result });

  } catch (error) {
    console.log(error);
  }
};

export const editDoc = async (req, res) => {
  try {
    const result = await EmployeeModel.findById(req.params.id);
    res.render("edit", { data: result });

  } catch (error) {
    console.log(error);
  }
};

export const updateDocById = async (req, res) => {
  try {
    const result = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
};

export const deleteDocById = async (req, res) => {
  try {
    const result = await EmployeeModel.findByIdAndDelete(req.params.id);
    res.redirect('/');

  } catch (error) {
    console.log(error);
  }
};
