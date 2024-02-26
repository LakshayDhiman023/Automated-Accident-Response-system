import axios from "axios";
import { useState, useEffect } from "react";




const UpdateForm = ({ hospitalInfoById }) => {
  // State variables to hold updated values
  const [hospitalName, setHospitalName] = useState(hospitalInfoById.hospital_name);
  const [contact, setContact] = useState(hospitalInfoById.contact);
  const [latitude, setLatitude] = useState(hospitalInfoById.latitude);
  const [longitude, setLongitude] = useState(hospitalInfoById.longitude);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create an object with updated values
    const updatedHospitalInfo = {
      hospital_id: hospitalInfoById.hospital_id,
      hospital_name: hospitalName,
      contact,
      latitude,
      longitude
    };
    // Here you can send the updated data back to the server for processing
    console.log("Updated Hospital Info:", updatedHospitalInfo);
    // You may send a request to your API endpoint to update the data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hospital Name:
        <input 
          type="text" 
          value={hospitalName} 
          onChange={(e) => setHospitalName(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Contact:
        <input 
          type="text" 
          value={contact} 
          onChange={(e) => setContact(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Latitude:
        <input 
          type="text" 
          value={latitude} 
          onChange={(e) => setLatitude(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Longitude:
        <input 
          type="text" 
          value={longitude} 
          onChange={(e) => setLongitude(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};




const HospitalInfo = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hospitalInfoById, setHospitalInfoById] = useState({});

  const handleUpdate = (hospital_id) => {
    console.log(hospital_id);
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/hospitalInfo/${hospital_id}`
        );
        setHospitalInfoById(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  console.log(hospitalInfoById);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/hospitalInfo");
        setHospitals(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.hospital_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Hospital Information</h2>
      <div className="mb-4">
        <label className="mr-2">Search by Hospital Name:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2"
        />
      </div>
      {filteredHospitals.length > 0 ? (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Hospital Name</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Latitude</th>
              <th className="border p-2">Longitude</th>
              <th className="border p-2">Update / Delete</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {filteredHospitals.map((hospital) => (
              <tr key={hospital.hospital_id}>
                <td className="border p-2">{hospital.hospital_name}</td>
                <td className="border p-2">{hospital.contact}</td>
                <td className="border p-2">{hospital.latitude}</td>
                <td className="border p-2">{hospital.longitude}</td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => handleUpdate(hospital.hospital_id)}
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Delete
                  </button>
                </td>

                {/* Add more cells based on your data structure */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No matching hospitals found.</p>
      )}
    </div>
  );
};

export default HospitalInfo;
