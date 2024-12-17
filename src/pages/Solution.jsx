import React, { useState } from "react";

const Solution = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      title: "RRR (Reduce, Reuse and Recycle)",
      description: "Reduce, Reuse, and Recycle principles help conserve natural resources and reduce waste.",
      moreDetails: "Reduce, Reuse, and Recycle are essential principles for waste management and conserving natural resources. Recycling helps divert waste from landfills, reducing the environmental burden. Reducing involves using fewer resources by buying fewer disposable items or choosing products with less packaging. These actions promote a circular economy where resources are used more efficiently and help reduce the strain on the planet's ecosystems. Recycling programs reduce waste sent to landfills and help save energy. Recycling can also generate economic benefits by creating jobs in the recycling industry and reducing the demand for raw materials. Reducing consumption, reusing items, and recycling help build a more sustainable and resource-efficient world. These practices reduce the carbon footprint, conserve natural resources, and reduce pollution in the environment. By participating in recycling, we are also preserving biodiversity and reducing the harmful effects of climate change. This helps to foster a culture of sustainability, where every small action counts toward a greater collective effort in protecting the planet for future generations.",
    },
    {
      title: "Sustainable Development",
      description: "Sustainable development balances economic growth, environmental protection, and social equity.",
      moreDetails: "Sustainable development ensures that we meet the needs of the present without compromising future generations. It involves balancing economic growth, environmental protection, and social equity. By integrating sustainable practices into everyday life, we can create a more resilient society for future generations while preserving the planet's ecosystems. Sustainable development is an approach that integrates the idea of social inclusion, environmental protection, and economic growth. It encourages businesses and governments to be mindful of the long-term impacts of their decisions on the environment and society. Sustainable development emphasizes clean energy, sustainable agriculture, green building practices, and equitable distribution of resources. By ensuring that we use resources wisely, we help reduce inequality and promote a sustainable future. This approach is crucial as it helps in reducing poverty, ensuring health and education, and ultimately achieving peace and stability in a globally connected world.",
    },
    {
      title: "Clean Energy",
      description: "Transitioning to clean, renewable energy sources helps reduce carbon emissions and dependence on fossil fuels.",
      moreDetails: "Clean energy refers to energy derived from renewable, zero-emission sources such as wind, solar, hydro, and geothermal. Transitioning to clean energy is essential for reducing carbon emissions, combating climate change, and promoting sustainable energy systems. By investing in renewable energy infrastructure, we can reduce the reliance on fossil fuels, which contribute significantly to environmental degradation. Clean energy technologies also offer long-term economic benefits, including the creation of green jobs and a reduction in energy costs. Renewable energy sources are abundant and have a smaller environmental footprint compared to traditional energy sources, making them crucial for ensuring energy security and environmental sustainability.",
    },
    {
      title: "Circular Economy",
      description: "A circular economy minimizes waste and promotes the continual use of resources through recycling, reuse, and redesign.",
      moreDetails: "A circular economy is an alternative to the traditional linear economy, where resources are used, then discarded as waste. In a circular economy, products and materials are kept in use for as long as possible, reducing waste and the consumption of new resources. This system relies on strategies such as recycling, reusing, and remanufacturing to extend the lifecycle of products and materials. The circular economy also encourages redesigning products for durability, ease of repair, and recycling. By promoting a circular economy, we reduce environmental impact, create economic opportunities, and promote sustainability by minimizing the extraction of raw materials.",
    },
    {
      title: "Conservation of Biodiversity",
      description: "Protecting biodiversity ensures the health of ecosystems and promotes the balance of natural processes.",
      moreDetails: "Biodiversity refers to the variety of life on Earth, including the diversity of species, ecosystems, and genetic variation. Conservation of biodiversity is critical for maintaining ecosystem health, as every species plays a role in sustaining ecological balance. Protecting biodiversity involves safeguarding habitats, preventing species extinction, and addressing threats such as habitat destruction, pollution, and climate change. Conserving biodiversity also has economic benefits, as healthy ecosystems provide vital services such as clean air, water, pollination of crops, and carbon sequestration. By preserving biodiversity, we ensure that ecosystems can continue to function properly and provide essential resources for future generations.",
    },
    {
      title: "Waste Reduction",
      description: "Reducing waste through sustainable practices helps conserve resources and reduce pollution.",
      moreDetails: "Waste reduction is a crucial part of sustainability, as it minimizes the amount of waste sent to landfills and incinerators, which can have harmful environmental impacts. Reducing waste involves practices such as buying products with less packaging, using reusable items, and composting organic waste. It also includes encouraging industries to adopt more sustainable production practices and reducing single-use plastics. By reducing waste, we conserve valuable resources, reduce the carbon footprint, and decrease pollution in landfills and oceans. Additionally, waste reduction contributes to the creation of a circular economy by promoting recycling and the reuse of materials.",
    },
  ];

  const handleClick = (solution, event) => {
    event.stopPropagation();
    setSelectedSolution(solution);
  };

  const closeModal = () => setSelectedSolution(null);

  return (
    <div className="bg-gradient-to-br from-green-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Hero Section Background Waves */}
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>

        {/* Content */}
        <div className="absolute inset-0 bg-green-900"></div>
        <div className="relative z-10 text-center text-white px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              Solutions to Environmental Problems
            </h1>
            <p className="mt-4 text-lg text-white">
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
              onClick={(event) => handleClick(solution, event)} // Pass event to stop propagation
            >
              <div className="p-6 flex flex-col justify-between w-full sm:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {solution.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {solution.description}
                </p>
                <button
                  onClick={(event) => handleClick(solution, event)}
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
              className="absolute top-4 right-4 text-white hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              {selectedSolution.title}
            </h2>
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
