const express = require('express');

const router = express.Router();


const {getAllData, createData, updateData, deleteData, getOneItem} = require('../controllers/tasksController')


router.route('/').get(getAllData).post(createData);
router.route('/:id').get(getOneItem).patch(updateData).delete(deleteData);
router.route('/').get(getAllData);
router.route('/').get(getAllData);
router.route('/').get(getAllData);


module.exports = router;
