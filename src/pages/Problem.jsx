import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";

const Problem = () => {
  const [activeSection, setActiveSection] = useState("map");
  const [selectedProblem, setSelectedProblem] = useState(null);

  const problems = [
    {
      title: "Deforestation",
      description:
        "Nepal is losing its forests due to urbanization, agriculture, and illegal logging. This leads to soil erosion, habitat loss, and climate imbalance.",
    },
    {
      title: "Air Pollution",
      description:
        "Major cities like Kathmandu face severe air pollution caused by vehicular emissions, industrial waste, and burning of biomass.",
    },
    {
      title: "Water Pollution",
      description:
        "Rivers and water bodies are polluted with industrial discharge, sewage, and waste, harming aquatic life and making water unsafe for consumption.",
    },
    {
      title: "Waste Management",
      description:
        "Poor waste management systems result in littering, overflowing landfills, and improper disposal of hazardous materials.",
    },
    {
      title: "Climate Change",
      description:
        "Nepal's glaciers are melting, affecting water availability and increasing the risk of floods. Climate change also impacts agriculture and biodiversity.",
    },
    {
      title: "Loss of Biodiversity",
      description:
        "Human activities such as deforestation, poaching, and urbanization are endangering Nepal's rich biodiversity.",
    },
    {
      title: "Soil Erosion",
      description:
        "Unsustainable agricultural practices and deforestation are causing soil erosion, reducing land fertility and increasing flood risks.",
    },
  ];

  const generateRandomPosition = () => {
    const latRange = 0.1; // Latitude range for randomness
    const lonRange = 0.1; // Longitude range for randomness

    // Random latitude and longitude near Kathmandu (27.7172, 85.324)
    const lat = 27.7172 + (Math.random() - 0.5) * latRange;
    const lon = 85.324 + (Math.random() - 0.5) * lonRange;
    return [lat, lon];
  };

  const circleData = Array.from({ length: 8 }, () => ({
    position: generateRandomPosition(),
    radius: 500,
    color: "red", // All circles will be red
    title: "Pollution Issue",
  }));

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProblem(problem)}
              >
                <h3 className="text-2xl font-bold text-gray-700">{problem.title}</h3>
                <p className="text-gray-600 mt-2">{problem.description}</p>
              </div>
            ))}
          </div>
          {selectedProblem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedProblem.title}
                </h3>
                <p className="text-gray-600">{selectedProblem.description}</p>
                <button
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={() => setSelectedProblem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
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
              {circleData.map((circle, index) => (
                <Circle
                  key={index}
                  center={circle.position}
                  radius={circle.radius}
                  color={circle.color}
                  fillColor={circle.color}
                  fillOpacity={0.3}
                >
                  <Popup>{circle.title}</Popup>
                </Circle>
              ))}
            </MapContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Problem;
