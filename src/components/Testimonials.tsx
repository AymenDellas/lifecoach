import { Quote } from "lucide-react";
import { motion, easeOut } from "motion/react";
const Testimonials = () => {
  const clients = [
    {
      feedback:
        "Working with Jordan transformed both my business and personal life. I've doubled my productivity while actually working less hours.",
      clientName: "Sarah Martinez",
      company: "CEO, TechFlow Solutions",
      imageSrc: "/sarah.png",
    },
    {
      feedback:
        "Jordan's approach to balance and success is revolutionary. In just three months, I've achieved more than I did in the past year.",
      clientName: "Michael Chen",
      company: "Founder, Innovation Labs",
      imageSrc: "/mah.png",
    },
  ];
  return (
    <motion.section
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ ease: easeOut, duration: 0.8 }}
      className="flex flex-col justify-center space-y-6 max-lg:px-2 w-full lg:px-72 py-20 mx-auto my-20  font-poppins bg-gray-200"
    >
      <h2 className="text-3xl lg:text-4xl text-blue-950/90  font-bold font-ptserif text-center">
        Client Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 md:space-x-20 my-20">
        {clients.map((client, i) => {
          return (
            <div
              key={i}
              className="p-6 rounded-lg shadow-lg mx-4 bg-white space-y-4 relative"
            >
              <span className="absolute -top-4 -left-4 bg-blue-950 text-white p-2 rounded-full">
                <Quote />
              </span>
              <p className="text-gray-600">"{client.feedback}"</p>
              <div className="flex items-center space-x-2">
                <img
                  src={client.imageSrc}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-950/30"
                  alt={client.clientName}
                />
                <div>
                  {" "}
                  <h3 className="text-lg font-bold font-ptserif text-blue-950/80">
                    {client.clientName}
                  </h3>
                  <h4 className="text-gray-600">{client.company}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Testimonials;
