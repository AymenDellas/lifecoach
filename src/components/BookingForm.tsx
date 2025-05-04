import { AlertCircle, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      setError("Please fill out all the fields");
      setTimeout(() => {
        setError("");
      }, 2500);
      return;
    }
    try {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormMessage("Details Submitted Successfully");
      }, 2000);
    } catch (error) {
      if (error) console.error("Error : ", error);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.4, // Delay between each child animation
        delayChildren: 0.3, // Initial delay before first child animates
      },
    },
  };
  return (
    <motion.section
      id="form"
      className="flex flex-col justify-center space-y-6 max-lg:px-6 w-full lg:w-[60%] mx-auto my-40 font-poppins"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="text-center space-y-2 my-12"
      >
        {" "}
        <h2 className="text-3xl lg:text-4xl text-blue-950/90  font-bold font-ptserif">
          Ready to Transform Your Life?
        </h2>
        <p className="text-lg text-gray-600">
          Take the first step towards balanced success with a free strategy
          session.
        </p>
      </motion.div>
      <form onSubmit={handleSubmit} className="w-full lg:w-[50%] mx-auto ">
        {isSubmitting ? (
          <div className="flex justify-center">
            <span className="loader"></span>
          </div>
        ) : formMessage ? (
          <div className="flex flex-col items-center justify-center space-y-6 py-16 text-center">
            <span className="p-4 rounded-full bg-green-100 w-fit mx-auto">
              <CheckCircle className="text-green-600" size={30} />
            </span>
            <h3 className="font-bold text-xl text-green-700 font-ptserif">
              Thank You!
            </h3>
            <p className="text-gray-700 max-w-sm">
              Your details have been submitted successfully. We'll contact you
              soon to schedule your free strategy session.
            </p>
            <button
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors duration-300"
              type="button"
              onClick={() => setFormMessage("")}
            >
              Send another request
            </button>
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-8 flex flex-col"
            >
              <motion.div
                variants={containerVariants}
                className="flex flex-col space-y-1"
              >
                <label htmlFor="fullName" className="text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="fullName"
                  className="p-2 outline-none rounded-lg border  border-blue-950/30 ring-blue-950/80 focus:ring-2"
                />
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="flex flex-col space-y-1"
              >
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email Adress
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="p-2 outline-none rounded-lg border  border-blue-950/30 ring-blue-950/80 focus:ring-2"
                />
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="flex flex-col space-y-1"
              >
                <label htmlFor="message" className="text-sm text-gray-600">
                  What would you like to discuss?
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  name="message"
                  className="p-2 outline-none rounded-lg border  border-blue-950/30 ring-blue-950/80 focus:ring-2"
                />
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-950/90 to-blue-800 rounded-md text-white group relative cursor-pointer"
              >
                <span className="relative z-10">Schedule Your Call</span>
                <div className="absolute inset-0 bg-blue-950/80 opacity-0 group-hover:opacity-100 rounded-md transition-opacity" />
              </motion.button>
            </motion.div>
          </>
        )}
        {error && (
          <div className="flex items-center space-x-1 bg-red-200 rounded-lg border-l-5 border-red-400 text-red-500 p-3">
            <AlertCircle />
            <p>{error}</p>
          </div>
        )}
      </form>
    </motion.section>
  );
};

export default BookingForm;
