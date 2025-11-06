import { useState } from "react";
import banner1 from "../../../assets/banner1.jpg"
import banner2 from "../../../assets/banner2.jpg"
import banner3 from "../../../assets/banner3.jpg"
import { useEffect } from "react";

const slides = [
    {image: banner1,},
    {image: banner2,},
    {image: banner3,}
];

const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[200px] sm:h-[330px] md:h-[330px] lg:h-[520px] 2xl:h-[850px] overflow-hidden ">

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover pt-8"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{slide.title}</h2>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">{slide.description}</p>

                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                    />

                ))}
            </div>
        </div>
    );
};

export default Banner;