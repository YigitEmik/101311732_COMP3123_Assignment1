const express = require("express")
const empModel= require("../models/employee")
const router = express.Router()

router.get('/', async (req, res) => {
    try {
    const employees = await empModel.find();
    res.status(200).send(employees);
    } catch (err) {
    res.status(500).send(err);
    }
})

router.post('/', async (req, res) => { 
    try {
    const employee = new employeeModel(req.body);
    await employee.save();
    res.status(201).send(employee);
    } catch (err) {
    res.status(500).send(err);
    }
});
router.delete('/employees', async (req, res) => {
    try {
    console.log(req.query.id);
    const deleteEmployee = await empModel.findByIdAndDelete(req.query.id);
    if (!deleteEmployee) {
        res.status(400).json({ message: 'No Employee found' });
    }
    res.status(204).json({ message: 'Employee Deleted' });
    } catch (error) {
    res.status(400).json(error);
    }
});
router.put('/:id', async (req, res) => {
    try {
    const updatedEmployee = await empModel.findByIdAndUpdate(req.params.id, req.body)
    const updated = await updatedEmployee.save()
    res.status(200).send(ne)
    } catch (err) {
    res.status(500).send(err)
    }
})

module.exports = router;