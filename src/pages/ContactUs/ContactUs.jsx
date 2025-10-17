import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br  from-orange-50 to-orange-100 min-h-screen flex flex-col justify-center items-center mt-12 px-6 py-10">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-orange-500 text-white py-6 text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-sm mt-1">We’d love to hear from you</p>
        </div>

        {/* Contact Info */}
        <div className="p-10 grid md:grid-cols-2 gap-6 text-gray-800">
          <div className="flex items-center gap-4">
            <FaBuilding className="text-orange-500 text-2xl" />
            <div>
              <h2 className="text-xl font-semibold">Digital Square Ltd.</h2>
              <p className="text-gray-600">
                Impetus Center, 7th Floor (North Side), <br />
                242/B Tejgaon-Gulshan Link Road, <br />
                Tejgaon I/A, Dhaka-1208.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <p className="text-gray-600">sales@digitalsquare.ltd</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-medium text-lg">Phone</h3>
              <p className="text-gray-600">+8801332811580</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-medium text-lg">Location</h3>
              <p className="text-gray-600">Tejgaon, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
