import img1 from "../assets/cv.png";
import img2 from "../assets/phone1.png";
import img3 from "../assets/self_driving_car.png";


export const portfolio = [
    {
        links : "#",
        imgs : <img src={img1} alt="img"/>,
        github : "https://github.com/ifeanyiD/codeVoltage",
        title : "codeVoltage Website",
        about : " A responsive portfolio website that bridge the gap between web designer and developer",
        tech : ["Reactjs", "Sass", "Mongodb", "Nodejs"]
    },
    {
        links : "#",
        imgs : <img src={img2} alt="img"/>,
        github : "https://github.com/ifeanyiD/phone-accessories",
        title : "codeVoltage Website",
        about : " A responsive portfolio website that bridge the gap between web designer and developer",
        tech : ["Reactjs", "Sass", "Mongodb", "Nodejs"]
    },
     {
        links : "https://github.com/ifeanyiD/Self-Driving-Car-Neural-Network-JavaScript-",
        imgs : <img src={img3} alt="img"/>,
        github : "#",
        title : "Self-Driving Car Neural Network (JavaScript)",
        about : " An experimental project that builds a neural network from scratch in JavaScript to power a self-driving car simulation. No ML frameworks—just pure math, logic, and code to explore how neural networks learn and make decisions.",
        tech : ["Javascript + Math"]
    },
     {
        links : "#",
        imgs : "",
        github : "https://github.com/ifeanyiD/calendar-based-app",
        title : "calendar-based-app",
        about : "it is any application where time, scheduling, or date tracking is a central feature.",
        tech : ["Reactjs", "Sass", "Mongodb", "Nodejs"]
    }
]

