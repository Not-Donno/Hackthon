import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css"; 

const Problem = () => {
  const [activeSection, setActiveSection] = useState("map");

  return (
    <div className="relative">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="content">
        <section
          className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?nature,environment')",
          }}
        >
          <h1 className="text-6xl font-bold mb-4 text-center">Save Our Planet</h1>
          <p className="text-xl mb-8 text-center">
            Discover the problems, understand their causes, and take action for a
            sustainable future.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg"
            onClick={() =>
              document.getElementById("problems").scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Challenges
          </button>
        </section>

        {/* Problems Section */}
        <section id="problems" className="py-16 px-8 bg-gray-50">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            Environmental Problems in Nepal
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Deforestation</h3>
              <p className="text-gray-600 mt-2">
                Nepal is losing its forests due to urbanization, agriculture, and
                illegal logging. This leads to soil erosion, habitat loss, and climate
                imbalance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Air Pollution</h3>
              <p className="text-gray-600 mt-2">
                Major cities like Kathmandu face severe air pollution caused by
                vehicular emissions, industrial waste, and burning of biomass.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Water Pollution</h3>
              <p className="text-gray-600 mt-2">
                Rivers and water bodies are polluted with industrial discharge, sewage,
                and waste, harming aquatic life and making water unsafe for
                consumption.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Waste Management</h3>
              <p className="text-gray-600 mt-2">
                Poor waste management systems result in littering, overflowing
                landfills, and improper disposal of hazardous materials.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-16 px-8 bg-white">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            Visualizing Environmental Issues
          </h2>
          <div style={{ height: "500px", width: "100%" }}>
            <MapContainer
              center={[27.7172, 85.324]}
              zoom={12}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Circle
                center={[27.7172, 85.324]}
                radius={500}
                color="red"
                fillColor="red"
                fillOpacity={0.3}
              >
                <Popup>
                  <h3>Pollution Issue at Location 1</h3>
                </Popup>
              </Circle>
            </MapContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Problem;
