import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import "../styles/skill.scss";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
   <section className="skills">
        <div className="skills-left">
            <h2>My skills</h2>
        </div>

        <motion.div 
            className="skills-right"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            >
            {[
                <FaHtml5 color="#E34C26"/>,
                <FaCss3 color="purple"/>,
                <FaNodeJs color="#3C873A"/>,
                <FaReact color="rgb(93,212,243)"/>,
                <FaSass color="#CD6799"/>,
                <IoLogoJavascript color="F0DB4F"/>,
                <BiLogoMongodb color="#4DB33D"/>,
            ].map((skill, i) => (
            <motion.span key={i} variants={item}>
                {skill}
            </motion.span>
            ))}
        </motion.div>
    </section>
  );
}
