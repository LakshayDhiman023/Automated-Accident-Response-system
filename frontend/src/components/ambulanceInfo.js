import axios from "axios";
import { useEffect, useState } from "react";

export const UpdateForm = ({ ambulanceInfoById, setShowUpdateForm }) => {
  const [ambulanceInfo, setAmbulanceInfo] = useState({
    driver_name: ambulanceInfo.driver_name,
    contact: ambulanceInfo.contact,
    latitude: ambulanceInfo.latitude,
    longitude: ambulanceInfo.longitude,
    hospital_name: ambulanceInfo.hospital_name,
    number_plate_no: ambulanceInfo.number_plate_no,
  });
  return (
    <>
      {/* <form className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Driver Name"
          >
            Driver Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="driver_name"
            type="text"
            placeholder="Driver Name"
            name=""
            value={hospitalInfo.hospital_name}
            onChange={onValueChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contact"
          >
            Contact:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contact"
            type="text"
            placeholder="Contact"
            name="contact"
            value={hospitalInfo.contact}
            onChange={onValueChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="latitude"
          >
            Latitude:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="latitude"
            type="text"
            placeholder="Latitude"
            name="latitude"
            value={hospitalInfo.latitude}
            onChange={onValueChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="longitude"
          >
            Longitude:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="longitude"
            type="text"
            placeholder="Longitude"
            name="longitude"
            value={hospitalInfo.longitude}
            onChange={onValueChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </form> */}
    </>
  );
};

const AmbulanceInfo = () => {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    const fetchAmbulanceInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/ambulanceInfo");
        setAmbulances(response.data);
        console.log(ambulances);
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
