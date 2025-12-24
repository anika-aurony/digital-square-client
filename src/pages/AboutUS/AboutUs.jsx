import cover from '../../assets/AboutUsBanner.png'
import { HiSparkles } from "react-icons/hi2";

const AboutUs = () => {
  return (
    <div className="mt-16 pt-4 font-sans bg-white">
      {/* Hero Section */}
      <div
        className="hero min-h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative hero-content text-neutral-content text-center px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-white animate-fadeIn">
            <h1 className="mb-5 text-4xl md:text-6xl font-bold text-orange-400 drop-shadow-lg">
              About Us
            </h1>
            <p className="mb-5 leading-relaxed text-gray-200">
              Digital Square Ltd is a visionary technology company at the forefront of FTTX innovation, delivering advanced networking devices and solutions that empower the way people and businesses connect. 
              Our purpose is simple yet powerful — to provide fast, reliable, and secure connectivity that enables growth, drives digital transformation, and bridges the gap between today's needs and tomorrow's possibilities.
            </p>
            <p className="mb-5 leading-relaxed text-gray-200">
              We operate with a deep-rooted commitment to excellence, built upon decades of proven expertise in the IT and telecommunications sector. 
              We form part of a powerful and diversified technology ecosystem that enables us to deliver complete, end-to-end solutions.
            </p>
            <p className="leading-relaxed text-gray-200">
              Together, these synergies enable Digital Square Ltd to serve diverse market segments — from residential users to enterprise clients, from ISPs to government networks — with unmatched efficiency, flexibility, and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Our Uniqueness Section */}
      <div className="px-6 md:px-20 lg:px-28 py-14 animate-slideUp">
        <h1 className="text-3xl text-orange-600 mb-6 font-bold text-center">
          Our Uniqueness
        </h1>

        <div className="space-y-8">
          {[
            {
              title: "Innovation at the Core",
              text: "We continuously invest in research and development to deliver cutting-edge FTTH solutions that anticipate and meet emerging connectivity needs."
            },
            {
              title: "Proven Experience",
              text: "Our leadership and technical teams bring decades of industry knowledge, having successfully delivered complex network projects in challenging environments."
            },
            {
              title: "Uncompromising Quality",
              text: "All products undergo rigorous testing to meet international standards for durability, efficiency, and safety."
            },
            {
              title: "Customer-First Approach",
              text: "We pride ourselves on understanding our clients' unique requirements and delivering tailor-made solutions with responsive after-sales support."
            },
            {
              title: "Competitive Advantage",
              text: "Through local assembly and strategic joint ventures, we provide faster delivery, cost efficiency, and greater flexibility in product customization."
            },
            {
              title: "Sustainable Practices",
              text: "We integrate environmentally responsible processes into our operations, reflecting our commitment to corporate social responsibility."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-orange-400 pl-4 hover:pl-6 transition-all duration-300 hover:bg-orange-50 rounded-md py-2"
            >
              <h3 className="text-orange-500 text-xl flex items-center gap-2 font-semibold">
                <HiSparkles className="text-yellow-400 text-2xl" /> {item.title}
              </h3>
              <p className="text-gray-700 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
