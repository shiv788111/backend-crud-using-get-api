
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",      
  user: "root",           
  password: "Shiv@199",           
  database: "getDB",    
});


db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully!");
    
  }
});

export default db;
