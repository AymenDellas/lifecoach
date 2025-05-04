import { Star, UserCheck } from "lucide-react";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="flex flex-col justify-center space-y-6 max-lg:px-2 lg:w-[50%] mx-auto py-40 text-center font-poppins">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="space-y-4"
      >
        <h1 className="text-5xl lg:text-6xl text-blue-950/90  font-bold font-ptserif">
          Transform Your Success Without Sacrificing Your Balance
        </h1>
        <p className="text-lg text-gray-700">
          Expert guidance for entrepreneurs seeking peak performance and peace
          of mind
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex items-center justify-center space-x-4 text-sm text-gray-600"
      >
        <span className="flex items-center">
          <Star className="w-4 h-4 mr-1 text-blue-950/90" /> 4.9/5 Rating
        </span>
        <span>•</span>
        <span className="flex items-center">
          <UserCheck className="w-4 h-4 mr-1 text-blue-950/90" /> 850+ Clients
          Transformed
        </span>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        href="#form"
        className="px-6 py-3 w-fit mx-auto bg-gradient-to-r  from-blue-950/90 to-blue-800 rounded-md text-white group relative cursor-pointer"
      >
        <span className="z-10 relative">Book Your Free Strategy Call</span>
        <div className="absolute inset-0 bg-blue-950/80 opacity-0 group-hover:opacity-100 rounded-md transition-opacity" />
      </motion.a>
    </section>
  );
};

export default Hero;
