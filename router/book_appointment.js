const express = require("express");
const userRouter = express.Router();


const book_appointmentController=require('../controller/book_appointment_controller');

userRouter.get('/',book_appointmentController.getappointmentid)
userRouter.post('/',book_appointmentController.addappointment)
userRouter.post('/contact',book_appointmentController.addcontact)


userRouter.get('/all',book_appointmentController.getallappointment)
userRouter.get('/alldoctor',book_appointmentController.getalldoctor)


userRouter.get('/singledata/:id',book_appointmentController.getsinglesappointment)

userRouter.delete('/:id',book_appointmentController.deleteappointment)





module.exports=userRouter