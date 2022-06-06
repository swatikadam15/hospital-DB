const moment = require("moment");
const { db } = require("../db.connection");

async function getappointmentid(req, res) {
  try {
    // console.log(res)
    const result = await db.many(`select * from book_appointment_id_seq`);
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}

async function addappointment(req, res) {
  console.log(typeof req.body);

  try {
    //    let currentTime=moment().format('MM-DD-YYYY')
    // let appDate = new Date(req.body.appointment_date);
    //  let ha=moment(appDate).format("MM-DD-YYYY");

    await db.none(
      `insert into "book_appointment"
    ("first_name","last_name","appointment_mesaage","appointment_date","phone_number","service","appoinment_time") VALUES ($1,$2,$3,$4,$5,$6,$7)`,

      [
        
        req.body.first_name,
        req.body.last_name,
        req.body.appointment_mesaage,
        req.body.appointment_date,
        req.body.phone_number,
        req.body.service,
        req.body.appoinment_time,
      ]
    );
    return res.status(201).json({ message: "book appointment sucessfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}

async function addcontact(req, res) {
  console.log(typeof req.body);

  try {
    //    let currentTime=moment().format('MM-DD-YYYY')
    // let appDate = new Date(req.body.appointment_date);
    //  let ha=moment(appDate).format("MM-DD-YYYY");

    await db.none(
      `insert into "contact"
    ("firstname","lastname","email","usermeassgae") VALUES ($1,$2,$3,$4)`,

      [
        
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.usermeassgae,

      ]
    );
    return res.status(201).json({ message: "Addedd Data sucessfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}




async function getallappointment(req, res){
  try {
    var queryparameter=req.query
    // console.log(res)
    const result = await db.many("select * from book_appointment");
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}

async function getsinglesappointment(req, res){
  try {
  
      //  const fname= JSON.stringify(req.body.first_name)
      console.log(req.params.id)
    const result = await db.one('SELECT * FROM book_appointment WHERE id= $1',req.params.id)
  
    return res.status(200).json(result);
    console.log(result)
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}

async function deleteappointment(req, res){
  try {
    const result = await db.none("delete from book_appointment where id="+req.params.id);
    
    return res.status(200).json({message: "delete appointment sucessfully"} );
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}

async function getalldoctor(req, res){
  try {
    var queryparameter=req.query
    // console.log(res)
    const result = await db.many("select * from  doctor_profile");
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message ? error.message : "somthing went wrong" });
  }
}



module.exports = {
  getappointmentid,
  addappointment,
  getallappointment,
  getsinglesappointment,
  deleteappointment,
  addcontact,
  getalldoctor
};
