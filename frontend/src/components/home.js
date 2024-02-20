import { useState } from "react";


const Home = () =>{
    const [latitude, setLatitude ]= useState(null);
    const [longitude, setLongitude ]= useState(null);
    
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, (error) => {
                console.error("Error getting location:", error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <>
            <div>Automated Accident Response System</div>
            {latitude == null && longitude == null ? (
                <>
                    <div>Get your current Location</div>
                    <button onClick={getLocation}>Fetch Current Location</button>
                </>
            ) : (
                <div>
                    Latitude : {latitude}
                    Longitude : {longitude}
                </div>
            )}
        </>
    );
};

export default Home;
