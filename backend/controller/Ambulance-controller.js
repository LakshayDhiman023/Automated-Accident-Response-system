import connection from "../database/db.config.js";

export const fetchAmbulanceInfo = async (req, res) => {
  const q =
    "SELECT a.*, h.hospital_name, h.contact FROM ambulances a JOIN hospitals h ON h.hospital_id = a.hospital_id;";
  await connection.query(q, (error, result, fields) => {
    if (error) throw error;
    res.send(result);
  });
};



