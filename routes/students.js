const { Router } = require('express');
const {
  getAllStudents,
  createStudents,
  getStudents,
  updateStudents,
  deleteStudents,
} = require('../controllers/students');
const router = Router();

//? route() - method, inside we are passing home("/")
// router.route('').get(getStudents).post(createStudents);
router.route('').post(createStudents).get(getAllStudents);
router.route('/:id').get(getStudents);
router.route('/:id').put(updateStudents);
router.route('/:id').delete(deleteStudents);

module.exports = router;
