import React, { useState } from 'react';

const Testimonials = () => {
    const [showTestimonial, setShowTestimonial] = useState(0);
    const testimonials = [
        {
        text: "I can’t recommend Coach Lance highly enough as a tennis coach. He’s incredibly patient and always takes the time to break down even the most complex techniques into simple steps I can understand. For example, when I struggled with my backhand, he calmly worked with me, adjusting my grip and footwork until I felt confident.\n" +

        "Coach Lance is also exceptionally knowledgeable about the game. Whether it’s the technical aspects of a serve or the mental strategies for match play, he always has valuable insights to share. During one lesson, he explained the biomechanics of my forehand in a way that immediately improved my swing and power.\n" +

        "What truly sets him apart is how easygoing and approachable he is. No matter how many questions I ask or how many times I mess up a drill, he always responds with encouragement and a smile. Lessons with him are both productive and enjoyable, and I always leave feeling motivated and excited to improve.\n" +

        "If you’re looking for a skilled and supportive tennis coach, Coach Lance is the perfect choice!",
        name: "Xiao",
        },
        {
        text: "I enjoy taking tennis lessons with Lance. He has a great technique on all of the strokes and by doing constant drills with him, gradually my own technique is improving as well.  The progress in tennis in adulthood is not easy but if you put persistent efforts and are passionate about it, there is a chance.",
        name: "Vlad",
        },
        {
        text: "The best tennis coaching I've ever had! Highly recommend!",
        name: "Emily",
        },

    ];

    return (
        <section
        id="testimonials"
        // style={{ minHeight: 'calc(100vh - 80px)' }}
        className="flex flex-col gap-8 sm:gap-10 md:gap-14 py-14 sm:py-14 bg-white px-6 sm:px-8 min-h-[420px]"
        >
        <p className="text-4xl sm:text-5xl md:text-6xl text-[#4f8f3e] font-semibold max-w-[700px] mx-auto w-full text-center">
            Testimonials
        </p>
        <div className="flex flex-col gap-4 sm:gap-8">
            <p className="text-slate-600 italic max-w-[500px] w-full mx-auto font-light text-center">
            {testimonials[showTestimonial].text}
            </p>
            <p className="text-[#4f8f3e] font-semibold text-center">
            {testimonials[showTestimonial].name}
            </p>
            <div className="flex items-center mx-auto gap-2">
            {testimonials.map((item, index) => (
                <button
                key={index}
                onClick={() => setShowTestimonial(index)}
                className={`w-3 sm:w-3.5 rounded-full aspect-square border border-2 border-[#4f8f3e] duration-200 ${
                    index === showTestimonial ? 'bg-[#4f8f3e]' : 'hover:bg-[#4f8f3e]'
                }`}
                ></button>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Testimonials;
