import { useState, useEffect } from 'react';

const Header = () => {
    const [y, setY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => setY(window.scrollY);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = ['about', 'services', 'testimonials'];

    const scrollToSection = (id) => {
        let targetId = id;

        if (id === 'location') {
            targetId = 'infographics';
        }

        if (id === 'top') {
            window.scrollTo({
            top: 0,
            behavior: 'smooth',
            });
            return;
        }

        const section = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };
  
    return (
        <header
            className={`duration-200 sticky top-0 relative border-b border-solid z-20 ${
            y > 0 ? 'bg-white border-[#4f8f3e] shadow' : 'border-transparent'
            }`}
            style={{ height: '80px' }}
        >
            <div
            className={`max-w-[1200px] mx-auto w-full flex items-center justify-between gap-4 duration-200 px-6 sm:px-8 h-full`}
            >
            <a
                onClick={() => scrollToSection('top')}
                className="flex text-center flex-row gap-1 font-medium sm:text-lg cursor-pointer hover:text-[#79b75c]"
            >
                <h2>Lance Nguyen Tennis Coaching</h2>
            </a>
            <nav className="hidden sm:text-sm lg:text-base md:flex items-center gap-2 sm:gap-4 md:gap-5">
                {navLinks.map((navLink) => (
                <a
                    key={navLink}
                    onClick={() => scrollToSection(navLink)}
                    className="capitalize relative cursor-pointer overflow-hidden group"
                >
                    <p>{navLink}</p>
                    <div className="absolute bottom-0 right-full group-hover:translate-x-full duration-300 h-[1.5px] w-full bg-slate-800" />
                </a>
                ))}
                <a
                onClick={() => scrollToSection('contact')}
                className="bg-[#4f8f3e] text-white text-lg px-4 py-2 rounded-lg hover:bg-[#79b75c] duration-200 border-2 border-solid border-[#90c978] cursor-pointer"
                >
                Contact me
                </a>
            </nav>
            </div>
        </header>
    );
}
  
export default Header;