import cover from '../../assets/AboutUsBanner.png'
import { HiSparkles } from "react-icons/hi2";
// import { productsAndServices } from './prooductsAndServices';

const AboutUs = () => {
    return (
        <div className="mt-20">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${cover})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content ">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold text-center">About Us</h1>
                        <p className="mb-5">
                            Digital Square Ltd is a visionary technology company at the forefront of FTTX innovation, delivering advanced networking devices and solutions that empower the way people and businesses connect. Our purpose is simple yet powerful to provide fast, reliable and secure connectivity that enables growth, drives  digital transformation and bridges the gap between today's needs and tomorrow's possibilities.
                        </p>
                        <p className='mb-5'>
                            We operate with a deep-rooted commitment to excellence, built upon decades of proven expertise in the IT and telecommunications sector. We form part of a powerful and diversified technology ecosystem that enables us to deliver compete, end-to-end solutions.

                        </p>
                        <p>
                            Together, these synergies enable Digital Square Ltd to serve diverse market segments from residential users to enterprise client, from ISPs to government networks with unmatched efficiency, flexibility and reliability.
                        </p>
                    </div>
                </div>
            </div>
            <div className="font-sans">

                <p className="px-10 lg:px-28 my-10">
                    <h1 className="text-2xl text-orange-600  mb-6 font-bold ">Our Uniqueness</h1>
                    <h3 className="text-orange-400 text-xl flex items-center gap-2 pb-5 font-semibold"><HiSparkles className="text-yellow-400 text-2xl" /> Innovation at the Core</h3>
                    <p>We continuously invest in research and development to deliver cutting-edge FTTH solutions that anticipate and meet emerging connectivity needs. </p>
                    <h3 className="text-orange-400 flex items-center gap-2 text-xl py-5 font-semibold"><HiSparkles className="text-yellow-400 text-2xl" /> Proven Experience</h3>
                    <p>Our leadership and technical teams bring decades of industry knowledge, having successfully delivered complex network projects in challenging environments.</p>
                    <h3 className="text-orange-400 flex items-center gap-2 text-xl py-5 font-semibold"><HiSparkles className="text-yellow-400 text-2xl" /> Uncompromising Quality</h3>
                    <p>All Products undergo rigorous testing to meet international standards for durability, efficiency and safety.</p>
                    <h3 className="text-orange-400 flex items-center gap-2 text-xl py-5 font-semibold">
                        <HiSparkles className="text-yellow-400 text-2xl" /> Customer-First Approach
                    </h3>
                    <p>We pride ourselves on understanding our client's unique requirements and delivering tailor-made solutions with responsive after-sales support.</p>
                    <h3 className="text-orange-400 flex items-center gap-2 text-xl py-5 font-semibold"><HiSparkles className="text-yellow-400 text-2xl" /> Competitive Advantage</h3>
                    <p>Through local assembly and strategic joint ventures, we provide faster delivery, cost effieciency and greater flexibility in product customization</p>
                    <h3 className="text-orange-400 flex items-center gap-2 text-xl py-5 font-semibold"><HiSparkles className="text-yellow-400 text-2xl" /> Sustainable Practices</h3>
                    <p>We integrate environmentally responsible process into our operations, reflecting our commitment to corporate social responsibility. </p>
                </p>
            </div>
            {/* <div>
                <p className="px-10 lg:px-28 my-10 font-sans">
                    <h1 className="text-2xl text-orange-600  mb-6 font-bold ">Our Mission</h1>
                    
                </p>
            </div> */}
        </div>
    );
};

export default AboutUs;