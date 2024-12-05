import React, { useEffect, useRef } from 'react';

const Gallery = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const scrollGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollLeft += 1; // scroll speed
            if (galleryRef.current.scrollLeft >= galleryRef.current.scrollWidth / 2) {
            galleryRef.current.scrollLeft = 0; // infinite loop
            }
        }
        };
        const interval = setInterval(scrollGallery, 10); // interval
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="gallery" className="flex flex-col gap-8 py-8 sm:py-8 px-6 sm:px-8 bg-white">
        <div
            ref={galleryRef}
            className="flex overflow-hidden gap-4 whitespace-nowrap"
            style={{ scrollBehavior: 'smooth' }}
        >
            {/* Duplicate images for infinite scrolling effect */}
            {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
                <img
                src="/images/jackson.jpg"
                alt="gallery-img-1"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/riki.jpg"
                alt="gallery-img-2"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/jasper.jpg"
                alt="gallery-img-3"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/test1.jpg"
                alt="gallery-img-4"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/test2.jpg"
                alt="gallery-img-5"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/test3.jpg"
                alt="gallery-img-6"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/test4.png"
                alt="gallery-img-7"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
                <img
                src="/images/test5.png"
                alt="gallery-img-8"
                className="rounded-lg object-contain h-[200px] shadow-md"
                />
            </React.Fragment>
            ))}
        </div>
        </section>
    );
};

export default Gallery;
