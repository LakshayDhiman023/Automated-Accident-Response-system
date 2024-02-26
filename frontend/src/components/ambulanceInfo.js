import axios from "axios";
import { useEffect, useState } from "react";

const AmbulanceInfo = () => {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    const fetchAmbulanceInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/ambulanceInfo");
        setAmbulances(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAmbulanceInfo();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ambulance Information:</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Driver Name</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Hospital Name</th>
            <th className="border p-2">Latitude</th>
            <th className="border p-2">Longitude</th>
            <th className="border p-2">Number Plate No</th>
          </tr>
        </thead>
        <tbody>
          {ambulances.map((ambulance) => (
            <tr key={ambulance.ambulance_id}>
                <td className="border p-2">{ambulance.driver}</td>
              <td className="border p-2">{ambulance.contact}</td>
              <td className="border p-2">{ambulance.hospital_name}</td>
              <td className="border p-2">{ambulance.latitude}</td>
              <td className="border p-2">{ambulance.longitude}</td>
              <td className="border p-2">{ambulance.number_plate_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmbulanceInfo;
