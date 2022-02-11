// LOGIC PART

/* @HTTP GET REQUEST
   @ ACCESS public
   @URL /api/posts/
*/
const StudentSchema = require('../model/Students');
const router = require('../routes/students');

//? get data
exports.getAllStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.find({});
    res.status(200).json({ message: 'fetched data', payload });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'server error' });
  }
};

//?get single data
exports.getStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.findOne({ _id: req.params.id });
    res.status(200).json({ message: 'fetched one data', payload });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'server error' });
  }
};

// exports.createStudents = async (req, res) => {
//   let { name, std_id, email, courses } = req.body;
//   let payload = {
//     name,
//     std_id,
//     email,
//     courses,
//   };
//   await StudentSchema.create(payload);
//   res
//     .status(201)
//     .json({ message: 'successfully student data created', payload });
// };

/* @HTTP POST REQUEST
   @ ACCESS public
   @URL /api/posts/
*/

//?post data
exports.createStudents = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = {
      name,
      std_id,
      email,
      courses,
    };

    let data = await StudentSchema.create(payload);
    res
      .status(201)
      .json({ message: 'successfully students data created', data });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'server error' });
  }
};

//?update data

exports.updateStudents = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {
        name,
        std_id,
        email,
        courses,
      },
      { new: true }
    );
    await payload.save();
    res
      .status(201)
      .json({ message: 'successfully students data updated', payload });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'server error' });
  }
};

exports.deleteStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: 'successfully students data deleted', payload });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'server error' });
  }
};
