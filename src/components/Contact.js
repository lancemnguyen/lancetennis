const Contact = () => {
    return (
        <section
            id="contact"
            // style={{ minHeight: 'calc(100vh - 80px)' }}
            className="flex flex-col gap-8 sm:gap-10 md:gap-12 py-14 sm:py-14 text-white bg-[#4f8f3e] px-6 sm:px-8"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-[700px] mx-auto w-full text-center">
                Contact me
            </h1>
            <p className="text-sm sm:text-base max-w-[500px] mx-auto w-full text-center">
                Have questions or ready to take your tennis to the next level? Feel free to reach out with any inquiries or to schedule a lesson.
            </p>
            
            <form
                name="contact"
                method="POST"
                className="flex flex-col gap-4 max-w-[500px] w-full mx-auto text-slate-800 text-xs sm:text-sm"
                action="https://formsubmit.co/66fbec6409c7ff2dd1b3b2495e28f7dc"
            >
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="outline-none bg-white p-2 rounded border-2 border-transparent hover:border-[#90c978] focus:border-[#90c978] duration-200"
                />
                <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="outline-none bg-white p-2 rounded border-2 border-transparent hover:border-[#90c978] focus:border-[#90c978] duration-200"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                />
                <input
                    name="subject"
                    type="text"
                    placeholder="Phone Number"
                    className="outline-none bg-white p-2 rounded border-2 border-transparent hover:border-[#90c978] focus:border-[#90c978] duration-200"
                />
                <textarea
                    required
                    name="message"
                    placeholder="Your message"
                    className="outline-none bg-white p-2 rounded border-2 border-transparent hover:border-[#90c978] focus:border-[#90c978] duration-200 h-32 resize-none"
                />
                <button
                    type="submit"
                    className="border-white border-[1.5px] text-white px-4 py-2 rounded duration-200 hover:border-[#90c978]"
                >
                    Submit
                </button>
            </form>
            
            <div className="flex items-center mx-auto">
                <p>Or get in touch at lancemnguyen@gmail.com</p>
            </div>
        </section>
    );
};
  
  export default Contact;
  