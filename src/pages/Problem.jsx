import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle, Popup, useMap } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";

const Problem = () => {
  const [activeSection, setActiveSection] = useState("map");
  const [randomCirclePosition, setRandomCirclePosition] = useState(null);
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [map, setMap] = useState(null); // Track map instance

  const sections = [
    {
      id: "map",
      title: "Map",
      content: (
        <div style={{ height: "400px", width: "100%" }}>
          <MapContainer
            center={[27.7172, 85.324]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            whenCreated={setMap} // Save the map instance
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {randomCirclePosition && (
              <Circle
                center={randomCirclePosition}
                radius={hoveredCircle ? 1000 : 500} // Increase radius when hovered
                color={hoveredCircle ? "blue" : "red"}
                fillColor={hoveredCircle ? "blue" : "red"}
                fillOpacity={0.2}
                eventHandlers={{
                  mouseover: () => {
                    setHoveredCircle(true);
                    if (map) map.setZoom(15); // Zoom in on hover
                  },
                  mouseout: () => {
                    setHoveredCircle(false);
                    if (map) map.setZoom(12); // Reset zoom level on mouseout
                  },
                  click: () => {
                    openModal({
                      title: "Pollution Problem in Kathmandu",
                      problems: "Hover to zoom in and click to learn more.",
                      causes: "",
                      effects: "",
                      solutions: "",
                    });
                  },
                }}
              >
                <Popup>
                  <div>
                    <h3>Pollution Problem in Kathmandu</h3>
                    <p>Click to learn more.</p>
                  </div>
                </Popup>
              </Circle>
            )}
          </MapContainer>
        </div>
      ),
    },
    {
      id: "pollution",
      title: "Pollution",
      subsections: [
        {
          title: "Land Pollution",
          problems:
            "Improper waste disposal, illegal dumping, and lack of recycling contribute to land pollution.",
          causes:
            "Increased plastic use, industrial waste, and improper disposal of household waste.",
          effects:
            "Degradation of soil quality, contamination of groundwater, and health risks due to exposure to hazardous waste.",
          solutions:
            "Promoting recycling, waste segregation, and proper waste disposal practices. Increasing awareness about sustainable practices.",
        },
        {
          title: "Air Pollution",
          problems:
            "Vehicle emissions, brick kilns, and construction dust are major contributors to air pollution.",
          causes:
            "Fossil fuel use, industrial emissions, and unregulated construction activities are key causes.",
          effects:
            "Respiratory diseases, poor air quality, reduced visibility, and environmental damage, including acid rain.",
          solutions:
            "Encouraging the use of cleaner energy sources, enforcing pollution control laws, and promoting sustainable transportation.",
        },
        {
          title: "Water Pollution",
          problems:
            "Untreated sewage, industrial discharge, and plastic waste are the primary causes of water pollution.",
          causes:
            "Inadequate waste treatment facilities, improper disposal of waste, and overuse of water resources.",
          effects:
            "Health crises like waterborne diseases, harm to aquatic life, and disruption of the ecosystem.",
          solutions:
            "Improving waste treatment facilities, promoting water conservation, and reducing plastic usage.",
        },
      ],
    },
  ];

  useEffect(() => {
    const kathmanduBounds = new LatLngBounds(
      [27.6125, 85.1403],
      [27.8600, 85.3967]
    );

    const randomLat =
      Math.random() * (kathmanduBounds.getNorth() - kathmanduBounds.getSouth()) +
      kathmanduBounds.getSouth();
    const randomLng =
      Math.random() * (kathmanduBounds.getEast() - kathmanduBounds.getWest()) +
      kathmanduBounds.getWest();

    setRandomCirclePosition([randomLat, randomLng]);
  }, []);

  // Handle opening the modal with the selected pollution data
  const openModal = (subsection) => {
    setModalContent(subsection);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white text-center pt-20 pb-8">
        <h1 className="text-4xl font-bold">Environmental Awareness in Nepal</h1>
        <p className="text-lg mt-2">
          Addressing key challenges for a sustainable future
        </p>
      </header>

      <nav className="bg-green-500 sticky top-0 flex justify-center space-x-4 py-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-md font-medium text-white ${
              activeSection === section.id
                ? "bg-green-700"
                : "hover:bg-green-600"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <main className="py-8 px-4">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`${activeSection === section.id ? "block" : "hidden"}`}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {section.title}
            </h2>
            {section.content ||
              (section.subsections &&
                section.subsections.map((sub, index) => (
                  <div
                    className={`bg-white rounded-lg overflow-hidden mb-6 flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    key={index}
                  >
                    {sub.img && (
                      <div
                        className="w-full md:w-1/3"
                        onClick={() => openModal(sub)}
                      >
                        {sub.img}
                      </div>
                    )}
                    <div className="p-4 flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {sub.title}
                      </h3>
                      <p className="text-gray-600">
                        <b>Problems:</b> {sub.problems}
                      </p>
                      <p className="text-gray-600 mt-2">
                        <b>Effects:</b> {sub.effects}
                      </p>
                    </div>
                  </div>
                )))}
          </section>
        ))}
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <h3 className="text-2xl font-bold text-gray-800">{modalContent.title}</h3>
            <p className="text-gray-600 mt-4">
              <b>Problems:</b> {modalContent.problems}
            </p>
            <p className="text-gray-600 mt-2">
              <b>Causes:</b> {modalContent.causes}
            </p>
            <p className="text-gray-600 mt-2">
              <b>Effects:</b> {modalContent.effects}
            </p>
            <p className="text-gray-600 mt-2">
              <b>Solutions:</b> {modalContent.solutions}
            </p>
            <div className="mt-4 text-right">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem;
