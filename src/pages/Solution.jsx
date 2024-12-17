import React, { useState } from "react";

const Solution = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const solutions = [
    {
      title: "RRR (Reduce, Reuse and Recycle)",
      image: "https://cdn.pixabay.com/photo/2024/07/18/16/43/recycling-8904664_1280.png",
      description: "Reduce, Reuse, and Recycle principles help conserve natural resources and reduce waste.",
      moreDetails: `Reduce, Reuse, and Recycle are essential principles for waste management and conserving natural resources. Recycling helps divert waste from landfills, reducing the environmental burden. Reducing involves using fewer resources by buying fewer disposable items or choosing products with less packaging. These actions promote a circular economy where resources are used more efficiently and help reduce the strain on the planet's ecosystems. Recycling programs reduce waste sent to landfills and help save energy. Recycling can also generate economic benefits by creating jobs in the recycling industry and reducing the demand for raw materials. Reducing consumption, reusing items, and recycling help build a more sustainable and resource-efficient world. These practices reduce the carbon footprint, conserve natural resources, and reduce pollution in the environment. By participating in recycling, we are also preserving biodiversity and reducing the harmful effects of climate change. This helps to foster a culture of sustainability, where every small action counts toward a greater collective effort in protecting the planet for future generations.`,
    },
    {
      title: "Sustainable Development",
      image: "https://plus.unsplash.com/premium_photo-1661368421663-13b2d8115241?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VzdGFpbmFibGUlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Sustainable development balances economic growth, environmental protection, and social equity.",
      moreDetails: `Sustainable development ensures that we meet the needs of the present without compromising future generations. It involves balancing economic growth, environmental protection, and social equity. By integrating sustainable practices into everyday life, we can create a more resilient society for future generations while preserving the planet's ecosystems. Sustainable development is an approach that integrates the idea of social inclusion, environmental protection, and economic growth. It encourages businesses and governments to be mindful of the long-term impacts of their decisions on the environment and society. Sustainable development emphasizes clean energy, sustainable agriculture, green building practices, and equitable distribution of resources. By ensuring that we use resources wisely, we help reduce inequality and promote a sustainable future. This approach is crucial as it helps in reducing poverty, ensuring health and education, and ultimately achieving peace and stability in a globally connected world.`,
    },
    {
      title: "Awareness Program",
      image: "https://images.unsplash.com/photo-1674574124345-02c525664b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF3YXJlbmVzYyUyMHByb2dyYW18ZW58MHx8MHx8fDA%3D",
      description: "Environmental awareness programs educate communities about the importance of protecting the planet.",
      moreDetails: `Environmental awareness programs educate communities about the importance of protecting the planet. These programs aim to inform the public about issues like climate change and encourage sustainable practices like reducing waste and conserving energy. Raising awareness helps individuals make informed decisions and participate in protecting the environment. These programs aim to create a societal shift toward sustainable living by promoting eco-friendly behaviors and practices. Education campaigns may include topics such as climate change, resource conservation, waste reduction, and the use of renewable energy. By spreading awareness, these programs inspire people to adopt sustainable lifestyles and reduce their carbon footprints. These initiatives also encourage policy changes at the local, national, and global levels to combat environmental degradation and promote sustainability. They are instrumental in educating people about the importance of actions like waste segregation, energy conservation, and reducing the overuse of single-use plastics.`,
    },
    {
      title: "Eco-Friendly Products",
      image: "https://www.bigsmall.in/cdn/shop/articles/Eco-Friendly-1024x926_1_9bebf656-81f3-4be1-bef0-5dc1b108d139_1024x.jpg?v=1563484623",
      description: "Eco-friendly products use sustainable materials and reduce environmental impact.",
      moreDetails: `Eco-friendly products are designed to reduce their environmental impact throughout their lifecycle. They use sustainable materials and conserve resources. Choosing eco-friendly products helps reduce pollution and promotes businesses that prioritize the planet’s health. Supporting these products encourages manufacturers to invest in sustainable production processes. Eco-friendly products are designed with sustainability in mind, using materials that are biodegradable, recyclable, or renewable. These products help conserve energy, reduce waste, and minimize pollution. By choosing eco-friendly products, consumers reduce the demand for harmful substances, such as plastics and toxic chemicals. Supporting companies that produce such products also promotes environmentally responsible practices and drives the market toward a sustainable future. Eco-friendly alternatives, such as reusable bags, organic food, and energy-efficient appliances, can contribute to a healthier planet. By opting for these products, we actively reduce our ecological footprint and contribute toward a cleaner and more sustainable future.`,
    },
    {
      title: "Energy Conservation",
      image: "https://plus.unsplash.com/premium_photo-1716913071146-aa6d22d0fb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RW5lcmd5JTIwQ29uc2VydmF0aW9ufGVufDB8fDB8fHww",
      description: "Energy conservation reduces greenhouse gas emissions and saves resources.",
      moreDetails: `Conserving energy reduces greenhouse gas emissions and saves resources. By switching off lights when not in use and using energy-efficient appliances, we can minimize environmental impact and reduce energy consumption. These practices also contribute to economic sustainability in the long run. Energy conservation plays a critical role in mitigating climate change by reducing carbon emissions and decreasing our reliance on non-renewable energy sources. Simple actions like turning off lights, using public transportation, and utilizing energy-efficient appliances can result in significant reductions in energy usage. By prioritizing renewable energy sources like wind and solar, we can transition toward a greener, more sustainable energy infrastructure. Ultimately, energy conservation helps preserve the environment while reducing household and business energy costs. Moreover, as energy-efficient technologies continue to improve, we will experience more substantial reductions in overall energy consumption across the globe.`,
    },
    {
      title: "Afforestation and Reforestation",
      image: "https://img.freepik.com/free-photo/planting-new-trees-planting-new-trees-open-area-mountain-conifer-trees_632498-1255.jpg?semt=ais_hybrid",
      description: "Planting trees and restoring forests mitigate climate change and preserve biodiversity.",
      moreDetails: `Planting trees and restoring forests are effective ways to combat climate change. Trees absorb carbon dioxide and provide habitats for wildlife. Afforestation and reforestation efforts mitigate deforestation, preserve biodiversity, and foster sustainable land management practices. Forests play a crucial role in balancing the Earth's climate by absorbing large amounts of carbon dioxide, a major greenhouse gas. Reforestation efforts aim to restore areas that have been deforested, while afforestation involves planting trees in areas that were not previously forested. Both efforts are vital for increasing the planet's carbon sink capacity and reducing climate change impacts. By preserving forests and planting new trees, we help protect biodiversity, maintain soil health, and provide clean air and water for future generations. These efforts can also help prevent soil erosion and contribute to the overall health of ecosystems.`,
    },
    {
      title: "Electric Vehicles (EVs)",
      image: "https://cdn.pixabay.com/photo/2020/11/01/17/27/ev-5704430_640.jpg",
      description: "Electric vehicles offer a cleaner alternative to petrol and diesel cars.",
      moreDetails: `Electric vehicles offer a cleaner alternative to petrol and diesel cars. By reducing reliance on fossil fuels, EVs help reduce air pollution and greenhouse gas emissions. Supporting EV development is key to reducing the carbon footprint of the transportation sector and creating a more sustainable future. Electric vehicles (EVs) run on electricity stored in batteries, making them a clean alternative to traditional vehicles that run on gasoline or diesel. EVs produce no tailpipe emissions, reducing air pollution and promoting healthier urban environments. Additionally, as the grid becomes greener and incorporates more renewable energy, EVs will continue to contribute to reducing global greenhouse gas emissions. Many countries are investing in EV infrastructure to make them more accessible, and the technology is improving rapidly, with longer driving ranges and faster charging times. The widespread adoption of EVs is critical to meeting international climate goals and reducing our reliance on fossil fuels.`,
    },
    {
      title: "Plastic Reduction",
      image: "https://media.istockphoto.com/id/1439441839/photo/woman-drop-plastic-cup-into-recycling-bins-concept-of-global-environmental-protection-and.jpg?s=612x612&w=0&k=20&c=fX5dbGktlIXWNfe5vefYCRWSvol2-kKzZWPgZaBQTKU=",
      description: "Reducing plastic usage reduces pollution and protects ecosystems.",
      moreDetails: `Reducing plastic usage is crucial to tackling plastic pollution. By using reusable alternatives, reducing single-use plastics, and supporting policies that ban harmful plastics, we can decrease plastic waste and protect ecosystems. Promoting sustainable alternatives minimizes the environmental impact of plastic waste. Plastic pollution is a major environmental issue, as plastics take hundreds of years to degrade and can cause harm to wildlife and ecosystems. By reducing plastic usage and opting for sustainable alternatives such as reusable bags, bottles, and containers, we can reduce waste and conserve resources. Reducing plastic production and encouraging recycling helps to alleviate the harmful impacts of plastic pollution. Supporting legislation to reduce single-use plastics and promoting sustainable alternatives are key steps in creating a cleaner, healthier environment. Moreover, public awareness campaigns on plastic pollution can drive systemic changes at the global level to combat this issue.`,
    }
  ];

  const handleClick = (solution) => setSelectedSolution(solution);
  const closeModal = () => setSelectedSolution(null);

  return (
    <div className="bg-gradient-to-br from-green-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-screen flex items-center justify-center">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 text-center text-white px-4">
  <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            Solutions to Environmental Problems
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Together, we can create a better, greener future.
          </p>
        </header>
    <a
      href="#solutions"
      className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold transition"
    >
      Explore Solutions
    </a>
  </div>
</section>


      {/* Main Content */}
      <div id="solutions" className="bg-gradient-to-br from-green-50 to-gray-100 p-8 sm:p-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            Solutions to Problems
          </h1>
        </header>

        {/* Grid of Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col sm:flex-row"
              onClick={() => handleClick(solution)}
            >
              {/* Image on Left */}
              <div className="w-full sm:w-1/2">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-60 object-cover sm:h-full"
                />
              </div>

              {/* Content on Right */}
              <div className="p-6 flex flex-col justify-between w-full sm:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {solution.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {solution.description}
                </p>
                <button
                  onClick={() => handleClick(solution)}
                  className="self-start px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 relative animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              {selectedSolution.title}
            </h2>
            <img
              src={selectedSolution.image}
              alt={selectedSolution.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 leading-relaxed max-h-60 overflow-y-auto">
              {selectedSolution.moreDetails}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
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

export default Solution;
