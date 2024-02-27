import connection from "../database/db.config.js";
export const fetchHospitalInfo = async (req, res) => {
  const q = "select * from hospitals";
  await connection.query(q, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
  });
  // res.send("hello")
};

export const fetchHospitalInfoById = async (req, res) => {
  const hospital_id = req.params.id;
  const q = `SELECT * FROM hospitals WHERE hospital_id = ${hospital_id}`;
  await connection.query(q, (error, result, fields) => {
    if (error) {
      // Handle the error appropriately, for example:
      console.error("Error fetching Hospital info:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(result);
  });
};

export const updateHospitalInfo = (req, res) => {
  const { hospital_id, hospital_name, latitude, longitude, contact } = req.body;

  const q = `UPDATE hospitals SET hospital_name = ?, contact = ?, latitude = ?, longitude = ? WHERE hospital_id = ?`;

  connection.query(
    q,
    [hospital_name, contact, latitude, longitude, hospital_id],
    (error, result, fields) => {
      if (error) {
        console.error("Error while updating Hospital Info:", error);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).send("Data updated");
    }
  );
};

export const deleteHospitalInfoById = (req, res) => {
  const  hospital_id  = req.params.id; // Assuming hospital_id is in the URL parameters
  
  const q1 = `DELETE FROM ambulances WHERE hospital_id = ${hospital_id}`;
  const q2 = `DELETE FROM hospitals WHERE hospital_id = ${hospital_id}`;
  
  connection.query(q1, (error1, result1) => {
    if (error1) {
      console.error("Error while deleting ambulances:", error1);
      res.status(500).send("Internal Server Error");
      return;
    }
    
    connection.query(q2, (error2, result2) => {
      if (error2) {
        console.error("Error while deleting hospitals:", error2);
        res.status(500).send("Internal Server Error");
        return;
      }
      
      res.status(200).send("Hospital Info deleted");
    });
  });
};

