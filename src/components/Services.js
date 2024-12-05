import React, { useState } from 'react';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the currently expanded service
    const services = [
        { 
            name: 'private lessons', 
            content: 'Master the fundamentals and refine your technique',
            details: ['- Various strokes', '- Muscle memory', '- Eye-hand coordination', '- Dexterity'] 
        },
        { 
            name: 'hitting partner', 
            content: 'Engage in live ball drills designed to prepare you for tournaments',
            details: ['- Strategy & tactics', '- Shot selection', '- Court positioning', '- Patterns'] 
        },
        { 
            name: 'fitness', 
            content: 'Enhance your agility, strength, and endurance for peak performance',
            details: ['- Cardio/Conditioning', '- Footwork', '- Agility ladder', '- Lifting weights'] 
        },
    ];

    const toggleService = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle the clicked service
    };

    return (
        <section
            id="services"
            // style={{ minHeight: 'calc(100vh - 80px)' }}
            className="flex flex-col gap-8 sm:gap-10 md:gap-20 py-14 sm:py-14 text-white bg-[#79b75c] px-6 sm:px-8 min-h-[600px]"
        >
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold mx-auto">My services</p>
            {/* Grid layout with three columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1000px] mx-auto w-full">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`p-2 sm:p-4 text-slate-800 rounded-lg bg-white specialShadow flex flex-col gap-2 sm:gap-4 transition-all duration-300 ease-in-out cursor-pointer ${
                            activeIndex === index ? 'h-auto' : 'h-40'
                        }`}
                        onClick={() => toggleService(index)}
                    >
                        <div
                            className="flex items-center text-[#4f8f3e] justify-center gap-4 text-lg sm:text-xl md:text-2xl font-semibold capitalize"
                        >
                            <h3>{service.name}</h3>
                        </div>
                        <div className="flex items-center flex-1 justify-center mt-2">
                            <p className="text-center">{service.content}</p>
                        </div>
                        {/* Expanded content with scrollable details */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="flex flex-col items-center mt-4 overflow-y-auto max-h-40">
                                {service.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-center text-slate-800">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
