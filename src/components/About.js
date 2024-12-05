const About = () => {
    return (
        <section
            id="about"
            // style={{ minHeight: 'calc(100vh - 80px)' }}
            className="py-14 sm:py-14 flex flex-col gap-8 sm:gap-10 md:gap-14 pb-12 sm:pb-16 md:pb-20 px-6 sm:px-8 max-w-[1200px] mx-auto w-full"
        >
        {/* <p className="font-semibold text-lg sm:text-xl md:text-3xl mx-auto">About me</p> */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl -mt-4 font-semibold max-w-[700px] mx-auto w-full text-center">
            <b className="text-[#4f8f3e]">Master of</b> <b className="text-[#4f8f3e]">Tennis</b>
        </h1>
        <div className="flex flex-col gap-4 text-sm sm:text-base max-w-[700px] mx-auto w-full text-center sm:text-center">
            <p>
                With over 10 years of tennis coaching experience in the Bay Area, 
                I have empowered hundreds of students and improved their tournament ratings up to Blue Chip, 13.5 UTR, and 5.5 NTRP.
                Whether you're recreational, competitive, or you just want to become a better athlete,
                I am committed to working with you and helping you reach your full potential.
            </p>
        </div>
        </section>
    )
};

export default About;
