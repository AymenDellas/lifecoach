import { motion, easeOut } from "motion/react";
const Path = () => {
  const path = [
    {
      title: "Discover",
      description:
        "We begin with a deep dive into your current challenges and aspirations.",
    },
    {
      title: "Transform",
      description:
        "Implement proven strategies tailored to your unique situation.",
    },
    {
      title: "Thrive",
      description:
        "Experience sustainable success with ongoing support and accountability.",
    },
  ];
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ ease: easeOut, duration: 0.8 }}
      className="flex flex-col justify-center space-y-6 max-lg:px-2 lg:w-[60%] mx-auto my-40 text-center font-poppins"
    >
      <h2 className="text-3xl lg:text-4xl text-blue-950/90  font-bold font-ptserif">
        Your Path to Elevated Living
      </h2>
      <ol className="relative border-l-2 border-blue-950/20 ml-4">
        {path.map((stage, i) => (
          <li className="mb-10 ml-6" key={i}>
            <div className="absolute w-4 h-4 bg-blue-950 rounded-full -left-[9px] mt-1" />
            <h3 className="font-bold text-lg">{stage.title}</h3>
            <p className="text-gray-600">{stage.description}</p>
          </li>
        ))}
      </ol>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg text-center">
          <p className="text-2xl font-bold text-blue-950">2.3x</p>
          <p className="text-sm">Average productivity increase</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <p className="text-2xl font-bold text-blue-950">11h</p>
          <p className="text-sm">Weekly time reclaimed</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Path;
