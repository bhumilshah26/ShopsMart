import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <motion.div
        className="flex flex-col space-y-4"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          About Us: Empowering Informed Decisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <p className="text-lg leading-relaxed text-black-700 hover:bg-gray-400 hover:text-white-900 p-4 transition">
              We're passionate about helping you make informed choices when it
              comes to online shopping. We believe that transparent and
              reliable product comparisons are essential for getting the best
              value for your money.
            </p>
            <p className="text-lg leading-relaxed text-black-700 hover:bg-gray-400 hover:text-white-900 p-4 transition">
              That's why we built this platform using React and Tailwind CSS.
              React allows us to create a dynamic and user-friendly experience,
              while Tailwind CSS provides a powerful and efficient utility-first
              approach to styling.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-lg leading-relaxed text-black-700 hover:bg-gray-400 hover:text-white-900 p-4 transition">
              Our team of experts meticulously analyzes products across various
              categories. We consider factors like features, performance, user
              reviews, brand reputation, and value for money. We then present
              this information in a clear and concise manner, allowing you to
              easily compare options and make confident purchasing decisions.
            </p>
            <p className="text-lg leading-relaxed text-white-700 hover:bg-gray-400 hover:text-white-900 p-4 transition">
              Whether you're a seasoned tech enthusiast or a casual shopper, we
              strive to be your one-stop resource for insightful product
              comparisons and in-depth analyses. Don't settle for guesswork when
              it comes to buying online - rely on us to guide you towards the
              perfect pick!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;