const Main = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <main className="flex flex-col gap-10 text-sm sm:text-base">
        <section
            style={{ minHeight: 'calc(100vh - 80px)' }}
            className="flex flex-1 flex-col items-center justify-center md:flex-row gap-4 md:gap-10 lg:gap-14 px-6 sm:px-8 max-w-[1200px] mx-auto w-full"
        >
            <div className="flex flex-col md:flex-1 justify-center items-center gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                Be the <b className="text-[#4f8f3e]">best</b> version of <b className="text-[#4f8f3e]">yourself</b>
            </h1>
            <p className="text-sm sm:text-base">
                Unleash your inner <b className="font-normal text-[#4f8f3e]">champion </b>
                and discover the joy of tennis through <b className="font-normal text-[#4f8f3e]">personalized coaching</b> in San Jose, CA.
            </p>
            <a
                onClick={() => scrollToSection('contact')}
                className="bg-[#4f8f3e] text-white text-lg sm:text-xl md:text-2xl font-medium border-2 border-solid border-[#90c978] rounded-lg px-4 py-2 mx-auto md:mr-auto md:ml-0 hover:bg-[#79b75c] duration-200 cursor-pointer"
            >
                Contact me
            </a>
            </div>
            <div className="flex max-w-[60vw] sm:max-w-[50vw] md:max-w-[40vw] mx-auto w-full flex-col md:flex-1 lg:justify-center lg:items-center">
            <img
                src="/images/profile-img.jpg"
                alt="profile-img"
                className="rounded-full object-cover aspect-square shadow-xl"
            />
            </div>
        </section>
        </main>
    );
};

export default Main;
