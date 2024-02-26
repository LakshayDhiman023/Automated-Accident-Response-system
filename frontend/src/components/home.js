import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNearByHospital, setShowNearByHospital] = useState(false);
  const hospitalsPerPage = 5;

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000");
        const sortedHospitals = response.data.sort((a, b) => {
          const distanceA = calculateDistance(
            latitude,
            longitude,
            a.latitude,
            a.longitude
          );
          const distanceB = calculateDistance(
            latitude,
            longitude,
            b.latitude,
            b.longitude
          );
          return distanceA - distanceB;
        });
        setHospitals(sortedHospitals);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [latitude, longitude]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col ">
      <div className="bg-yellow-400 text-center text-4xl p-4 mb-8">
        Automated Accident Response System
      </div>
      <div className="text-center">
        {latitude == null && longitude == null ? (
          <>
            <div className="text-4xl">Get Live Location </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={getLocation}
            >
              Fetch Current Location
            </button>
          </>
        ) : (
          <div className="text-lg">
            <div>Your Current Location: </div>
            <p>
              Latitude: {latitude} | Longitude: {longitude}
            </p>
            {!showNearByHospital && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => setShowNearByHospital(true)}
              >
                Find Nearby Hospitals
              </button>
            )}

            {showNearByHospital &&
            hospitals.length > 0 &&
            hospitals.length > (currentPage - 1) * 5 ? (
              <div className="mt-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Nearby Hospitals:</h2>

                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border p-2">Hospital Name</th>
                        <th className="border p-2">Contact</th>
                        <th className="border p-2">Distance (km)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hospitals
                        .slice(
                          (currentPage - 1) * hospitalsPerPage,
                          (currentPage - 1) * hospitalsPerPage + 5
                        )
                        .map((hospital) => (
                          <tr key={hospital.id}>
                            <td className="border p-2">
                              {hospital.hospital_name}
                            </td>
                            <td className="border p-2">{hospital.contact}</td>
                            <td className="border p-2">
                              {calculateDistance(
                                latitude,
                                longitude,
                                hospital.latitude,
                                hospital.longitude
                              ).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              showNearByHospital && (
                <>
                  <div className="text-lg">No more hospital info available</div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
