import connection from "../database/db.config.js";

export const fetchAmbulanceInfo = async (req, res) => {
  const q =
    "SELECT a.*, h.hospital_name, h.contact FROM ambulances a JOIN hospitals h ON h.hospital_id = a.hospital_id;";
  await connection.query(q, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
  });
};

export const fetchAmbulanceInfoById = (req, res) => {
  const hospital_id = req.params.id;
  const q = `SELECT * FROM hospitals WHERE hospital_id = ${hospital_id}`;
  connection.query(q, (error, result, fields) => {
    if (error) {
      // Handle the error appropriately, for example:
      console.error("Error fetching ambulance info:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(result);
  });
};

