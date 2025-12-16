import e, { json } from "express";
import db from "../config/db.js";

// CREATE
export async function createData(req, res) {
  const { name, email, phone } = req.query;

  db.query(
    "INSERT INTO student (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone],
    (err, result) => {
      if (err)
        return (
          res.status(400),
          json({
            message: "failed ..",
            success: false,
            err,
          })
        );

      res.status(201).json({
        message: "Data added successfully",
        success: true,
        id: result.insertId,
      });
    }
  );
}

// get data

export async function getData(req, res) {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      res.status(400).json({
        message: "some thing went wrong !",
        success: false,
        err,
      });
    } else {
      return res.status(200).json({
        message: "data fetching successfully.",
        success: true,
        result,
      });
    }
  });
}


//get single data
export async function getSingleData(req, res) {
  const { id } = req.query; 

  db.query("SELECT * FROM student WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(400).json({
        message: "Something went wrong!",
        success: false,
        err,
      });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "Data Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Data fetched successfully.",
      success: true,
      result: result[0], 
    });
  });
}



//update data

export function updateData(req, res) {
  const { id } = req.query;  
  const { name, email, phone } = req.query; 
  db.query(
    "UPDATE student SET name=?, email=?, phone=? WHERE id=?",
    [name, email, phone, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong",
          success: false,
          err,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Not found ",
          success: false,
        });
      }

      return res.status(200).json({
        message: "Updated successfully",
        success: true,
      });
    }
  );
}


//delete data

export function deleteData(req, res) {
  const { id } = req.query;  

  db.query(
    "DELETE FROM  student WHERE id=?",
  [id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong",
          success: false,
          err,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Not found ",
          success: false,
        });
      }

      return res.status(200).json({
        message: "delete successfully",
        success: true,
      });
    }
  )
}