
import connection from "../database/db.config.js";
export const fetchHospitalInfo = (req, res) =>{
    
    
    const q = 'select * from hospitals'
    connection.query(q, (error, result, fields) => {
        if(error) throw error;
        res.send(result)
    })
    // res.send("hello")
}

// module.exports = fetchHospitalInfo






// export const fetchHospitalInfo = async(req, res) =>{
//     const q = 'select * from hospitals'
//     connection.query(q, (error, result, fields) => {
//         if(error) throw error;
//         res.send(result)
//     })
// }