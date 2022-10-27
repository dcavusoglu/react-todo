const todoSchema = require("../models/todoModel");

const getAllData = async (req, res)=> {
  try {
    const data = await todoSchema.find({});
    res.status(200).json({data})
  } catch (err) {
    res.status(500).json({message: err})
  }
}


const createData = async (req, res)=> {
  try {
    const data = await todoSchema.create(req.body);
    res.status(201).json({data})
  } catch (err) {
    res.status(500).json({message: err})
  }
}

const getOneItem = async (req, res)=> {
  try {
    const { id } = req.params;
    const data = await todoSchema.find({_id:id});

    if(!data){
      res.status(404).json({message: 'no task with this id'});
    }
    res.status(200).json({data})

  } catch (err) {
    res.status(500).json({message: err})
  }
}

const updateData = async (req, res)=> {
  try {
    const { id } = req.params;
    const data = await todoSchema.findByIdAndUpdate({_id:id}, req.body, {
      new: true,
      runValidators: true
    });
     if(!data){
      res.status(404).json({message: 'no task with this id'});
    }
    res.status(200).json({data})
  } catch (err) {
    res.status(500).json({message: err})
  }
}

const deleteData = async (req, res)=> {
  try {
    const { id } = req.params;
    const data = await todoSchema.findByIdAndDelete({_id:id});
     if(!data){
      res.status(404).json({message: 'no task with this id'});
    }
    res.status(200).json({data})
  } catch (err) {
    res.status(500).json({message: err})
  }
}


module.exports = {
  getAllData, createData, updateData, deleteData, getOneItem
}
