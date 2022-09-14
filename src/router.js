const express = require('express');
const router = express.Router();

const adminRouter = require('./admin/router');
const intakeRouter = require('./intake/router');
const attendanceRouter = require('./attendance/router');
const studentsRouter = require('./students/router');
const groupsRouter = require('./groups/router');
const paymentsRouter = require('./payments/router');
const subjectRouter = require('./subject/router');
const roomRouter = require('./room/router');
const stepRouter = require('./step/router');
const salaryRouter = require('./salary/router');
const costRouter = require('./cost/router');
const staffRouter = require('./staff/router');

router.use('/admin', adminRouter);

router.use('/intake', intakeRouter);
router.use('/attendance', attendanceRouter);
router.use('/students', studentsRouter);
router.use('/groups', groupsRouter);
router.use('/payments', paymentsRouter);
router.use('/subjects', subjectRouter);
router.use('/rooms', roomRouter);
router.use('/steps', stepRouter);
router.use('/salarys', salaryRouter);
router.use('/costs', costRouter);
router.use('/staffs', staffRouter);

module.exports = router;