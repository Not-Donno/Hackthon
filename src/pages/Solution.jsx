import React from 'react';

const Solution = () => {
  const solutions = [
    {
      title: "RRR (Reduce, Reuse and Recycle)",
      image: "https://cdn.pixabay.com/photo/2024/07/18/16/43/recycling-8904664_1280.png",
      description: `Reduce, Reuse and Recycle are essential principles for waste management and conserving natural resources. Recycling helps divert waste from landfills, reducing the environmental burden. Reducing involves using fewer resources by buying fewer disposable items or choosing products with less packaging. These actions promote a circular economy where resources are used more efficiently and help reduce the strain on the planet's ecosystems.`
    },
    {
      title: "Sustainable Development",
      image: "https://plus.unsplash.com/premium_photo-1661368421663-13b2d8115241?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VzdGFpbmFibGUlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      description: `Sustainable development ensures that we meet the needs of the present without compromising future generations. It involves balancing economic growth, environmental protection, and social equity. By integrating sustainable practices into everyday life, we can create a more resilient society for future generations while preserving the planet's ecosystems.`
    },
    {
      title: "Awareness Program",
      image: "https://images.unsplash.com/photo-1674574124345-02c525664b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF3YXJlbmVzYyUyMHByb2dyYW18ZW58MHx8MHx8fDA%3D",
      description: `Environmental awareness programs educate communities about the importance of protecting the planet. These programs aim to inform the public about issues like climate change and encourage sustainable practices like reducing waste and conserving energy. Raising awareness helps individuals make informed decisions and participate in protecting the environment.`
    },
    {
      title: "Eco-Friendly Products",
      image: "https://www.bigsmall.in/cdn/shop/articles/Eco-Friendly-1024x926_1_9bebf656-81f3-4be1-bef0-5dc1b108d139_1024x.jpg?v=1563484623",
      description: `Eco-friendly products are designed to reduce their environmental impact throughout their lifecycle. They use sustainable materials and conserve resources. Choosing eco-friendly products helps reduce pollution and promotes businesses that prioritize the planet’s health. Supporting these products encourages manufacturers to invest in sustainable production processes.`
    },
    {
      title: "Energy Conservation",
      image: "https://plus.unsplash.com/premium_photo-1716913071146-aa6d22d0fb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RW5lcmd5JTIwQ29uc2VydmF0aW9ufGVufDB8fDB8fHww",
      description: `Conserving energy reduces greenhouse gas emissions and saves resources. By switching off lights when not in use and using energy-efficient appliances, we can minimize environmental impact and reduce energy consumption. These practices also contribute to economic sustainability in the long run.`
    },
    {
      title: "Afforestation and Reforestation",
      image: "https://img.freepik.com/free-photo/planting-new-trees-planting-new-trees-open-area-mountain-conifer-trees_632498-1255.jpg?semt=ais_hybrid",
      description: `Planting trees and restoring forests are effective ways to combat climate change. Trees absorb carbon dioxide and provide habitats for wildlife. Afforestation and reforestation efforts mitigate deforestation, preserve biodiversity, and foster sustainable land management practices.`
    },
    {
      title: "Electric Vehicles (EVs)",
      image: "https://cdn.pixabay.com/photo/2020/11/01/17/27/ev-5704430_640.jpg",
      description: `Electric vehicles offer a cleaner alternative to petrol and diesel cars. By reducing reliance on fossil fuels, EVs help reduce air pollution and greenhouse gas emissions. Supporting EV development is key to reducing the carbon footprint of the transportation sector and creating a more sustainable future.`
    },
    {
      title: "Plastic Reduction",
      image: "https://media.istockphoto.com/id/1439441839/photo/woman-drop-plastic-cup-into-recycling-bins-concept-of-global-environmental-protection-and.jpg?s=612x612&w=0&k=20&c=fX5dbGktlIXWNfe5vefYCRWSvol2-kKzZWPgZaBQTKU=",
      description: `Reducing plastic usage is crucial to tackling plastic pollution. By using reusable alternatives, reducing single-use plastics, and supporting policies that ban harmful plastics, we can decrease plastic waste and protect ecosystems. Promoting sustainable alternatives minimizes the environmental impact of plastic waste.`
    }
  ];

  return (
    <div className="app bg-gray-50 p-12 md:p-36 pt-20">
      <div className='flex justify-center'>
        <header className="mt-12 mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-green-600 text-center">Solutions to Environmental Problems</h1>
        </header>
      </div>

      <div className="solutions grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
        {solutions.map((solution, index) => (
          <section className="solution bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl" key={index}>
            <div className="heading-with-image relative">
              <img
                className="w-full h-56 object-cover rounded-t-lg"
                src={solution.image}
                alt={solution.title}
              />
              <h2 className="absolute bottom-4 left-4 text-xl text-white font-semibold bg-opacity-60 bg-black px-4 py-2 rounded-md">{solution.title}</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-base">{solution.description}</p>
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>© 2024 Environmental Awareness in Nepal | Developed for Hackathon</p>
      </footer>
    </div>
  );
};

export default Solution;
