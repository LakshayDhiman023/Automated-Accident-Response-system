import axios from "axios";
import { useState, useEffect } from "react";

export const UpdateForm = ({ hospitalInfoById, setShowUpdateForm }) => {
  // State variables to hold updated values

  // console.log(hospitalInfoById);
  const [hospitalInfo, setHospitalInfo] = useState({
    hospital_id:
      hospitalInfoById.hospital_id === undefined
        ? ""
        : hospitalInfoById.hospital_id,
    hospital_name:
      hospitalInfoById.hospital_name === undefined
        ? ""
        : hospitalInfoById.hospital_name,
    contact:
      hospitalInfoById.contact === undefined ? "" : hospitalInfoById.contact,
    latitude:
      hospitalInfoById.latitude === undefined ? "" : hospitalInfoById.latitude,
    longitude:
      hospitalInfoById.longitude === undefined
        ? ""
        : hospitalInfoById.longitude,
  });
  // console.log(hospitalInfo);

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setHospitalInfo({ ...hospitalInfo, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowUpdateForm(false);
    console.log(hospitalInfo);
    if (hospitalInfo.hospital_id !== undefined) {
      try {
        const response = await axios.post(
          `http://localhost:8000/hospitalInfo/${hospitalInfo.hospital_id}`,
          hospitalInfo
        );
        if (response.status == 200) {
          window.location.reload(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="hospitalName"
        >
          Hospital Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hospitalName"
          type="text"
          placeholder="Hospital Name"
          name="hospital_name"
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
    </form>
  );
};

const HospitalInfo = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hospitalInfoById, setHospitalInfoById] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdate = (hospital_id) => {
    // console.log(hospital_id);
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

  // console.log(hospitalInfoById);

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
      {showUpdateForm && (
        <UpdateForm
          hospitalInfoById={hospitalInfoById}
          setShowUpdateForm={setShowUpdateForm}
        />
      )}
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
                    onClick={() => {
                      setShowUpdateForm(true);
                      handleUpdate(hospital.hospital_id);
                    }}
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
