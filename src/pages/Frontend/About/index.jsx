import {
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
  FaLightbulb,
  FaPalette,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} className="text-sky-500" />,
    title: "Web App Development",
    desc: "We develop beautiful web applications tailored for your business needs.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-purple-500" />,
    title: "Mobile App Development",
    desc: "We develop beautiful mobile applications tailored for your business needs.",
  },
  {
    icon: <FaBolt size={40} className="text-cyan-500" />,
    title: "Realtime App Development",
    desc: "We develop super fast & realtime applications for your business needs.",
  },
  {
    icon: <FaLightbulb size={40} className="text-yellow-500" />,
    title: "Product Development",
    desc: "We offer strategic product development to transform your idea into a product.",
  },
  {
    icon: <FaPalette size={40} className="text-pink-500" />,
    title: "UI/UX Design",
    desc: "We craft visually stunning and user-friendly interfaces focused on great user experience.",
  },
  {
    icon: <FaPlug size={40} className="text-green-500" />,
    title: "API Integration",
    desc: "We integrate and optimize APIs to make your web and mobile apps more powerful and connected.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-[#0a0a0a] text-center px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
        About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
