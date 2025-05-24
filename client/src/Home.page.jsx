// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../Components/Header.component.jsx';
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaSquareGithub } from "react-icons/fa6";
// import FormComponent from '../Components/Form.component.jsx';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Home = () => {
//     const projectsData = [
//         {
//             imageUrl: "/Project_Images/create.png",
//             title: "Create Your Own Blog",
//             description: "This website is a dynamic, full-stack blogging platform built with the MERN stack. The application features secure authentication using JWT, integrated image uploads through Cloudinary, and a responsive design for seamless use across devices. Real-time post rendering and rich text editing enhance the user experience, making it an ideal platform for publishing personal blogs.\nTools Used: MongoDB, Express.js, React.js, Node.js, Cloudinary",
//             year: 2025,
//             role: "Full Stack Developer",
//         },
//         {
//             imageUrl: "/Project_Images/subscription.png",
//             title: "Subscription Tracker",
//             description: "A user-friendly web application designed to help users manage and monitor their digital subscriptions efficiently. The Subscription Tracker enables users to add, edit, and delete subscriptions, view billing cycles, and receive reminders for upcoming payments. Built with the MERN stack, it includes user authentication, responsive UI, and integration with external services for reminders.\nTools Used: MongoDB, Express.js, React.js, Node.js",
//             year: 2025,
//             role: "Full Stack Developer",
//         },
//         {
//             imageUrl: "/Project_Images/movie.png",
//             title: "Movie Search API",
//             description: "Developed a Movie Search Web Application using React and The Movie Database (TMDb) API. Implemented dynamic search functionality, interactive UI with hover effects, and optimized API calls for better performance and user experience.\nTools Used: React, API, JavaScript, CSS",
//             year: 2025,
//             role: "Frontend Developer",
//         },
//         {
//             imageUrl: "/Project_Images/weather.png",
//             title: "Weather App",
//             description: "I created a dynamic weather app using JavaScript, HTML, CSS, and EJS. The app fetches real-time weather data from a reliable weather API and displays it in a user-friendly interface.\nTools Used: API, JavaScript, CSS, Express.js, Node.js, EJS",
//             year: 2024,
//             role: "Full Stack Developer",
//         },
//         {
//             imageUrl: "/Project_Images/todo.png",
//             title: "To Do List",
//             description: "The React To-Do List Application is a dynamic and user-friendly task management tool designed to help you organize your daily activities efficiently. Built using the powerful React library, this application offers a seamless experience with a sleek interface and intuitive functionality.\nTools Used: React.js, HTML, CSS",
//             year: 2024,
//             role: "Frontend Developer",
//         },
//         {
//             imageUrl: "/Project_Images/capital.png",
//             title: "Capital Quiz",
//             description: "The Capital Quiz Game is an interactive web application designed to test users’ knowledge of world capitals. Built with Node.js and Express for the backend and PostgreSQL for database management, it offers a smooth and engaging experience with dynamically generated quizzes, real-time feedback, and leaderboards.\nTools Used: Node.js, Express.js, PostgreSQL, HTML, CSS",
//             year: 2024,
//             role: "Backend Developer",
//         },
//         {
//             imageUrl: "/Project_Images/drum.png",
//             title: "Drum Kit",
//             description: "Developed a dynamic drum kit using JavaScript, HTML, and CSS that allows users to play various drum sounds by clicking on virtual pads or using corresponding keyboard keys. This project demonstrates proficiency in JavaScript programming and front-end web development.\nTools Used: JavaScript, CSS, HTML",
//             year: 2024,
//             role: "Frontend Developer",
//         }
//     ];


//     const navigate = useNavigate();
//     const [seeMore, setSeeMore] = useState(false);

//     const clickedSeeMore = () => {
//         if (seeMore === false) {
//             setSeeMore(true);
//         }
//         else {
//             setSeeMore(false);
//         }
//     }

//     const clickedMoreAbout = () => {
//         navigate("/about");
//     }

//     return (
//         <div className="bg-black">
//             <style>
//                 {`
//                 @media (max-width: 576px) {
//                    .intro-name {
//                        font-size: 57px; 
//                    }
//                 }

//                 @media (min-width: 1200px) {
//                     .intro-name {
//                       font-size: 101px;
//                     }
//                 }
//                 `}
//             </style>
//             <Header />


//             {/* Introduction data */}
//             <div className='d-flex flex-wrap gap-5 text-white justify-content-center align-items-center mt-5 pb-5'>
//                 <div className='d-flex flex-column gap-4 mx-5' style={{ width: "544px", height: "360px" }}>
//                     <div>
//                         <h1 className='intro-name' style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "101px", lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>HI, I AM <br /> GANESH S.</h1>
//                         <p style={{ color: "#C7C7C7" }}>Full-stack developer passionate about building responsive and user-friendly web applications.</p>
//                     </div>
//                     <div className='d-flex flex-wrap gap-4'>
//                         <button className='btn  rounded-pill px-4 py-2' style={{ backgroundColor: "#D3E97A" }}><a href='#contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact Me</a></button>
//                         <div className='d-flex gap-4'>
//                             <a href='https://www.linkedin.com/in/ganesh-s-95b848273/'><FaLinkedinIn style={{ width: "34px", height: "44px", color: "#D3E97A" }} /></a>
//                             <a href='https://github.com/Ganesh6811'><FaSquareGithub style={{ width: "34px", height: "44px", color: "#D3E97A" }} /></a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Profile Image */}
//                 <div>
//                     <img src='/myPic.jpg' alt='Loading' className='rounded-4' style={{ width: "600px", height: "663px" }} />
//                 </div>
//             </div>

//             <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />

//             <div className='d-flex flex-column  align-items-center gap-5 pb-5'>
//                 {/* My projects */}
//                 <div className='d-flex flex-column pt-5' >
//                     <h2 className='intro-name text-white' style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "76px", lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>FEATURED PROJECTS</h2>
//                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>Here are some of the selected projects that showcase my passion for the web development.</p>
//                 </div>

//                 {/* Displaying the projects */}
//                 <div className='d-flex flex-column gap-5'>
//                     <div className='d-flex gap-5 mb-5'>
//                         <div className='d-flex justify-content-center align-items-center rounded-4' style={{ width: "600px", height: "600px", backgroundColor: "#1A1A1A" }}>
//                             <img className='rounded-4' src='/Project_Images/RealEsate.png' style={{ width: "488px", height: "347px" }} alt='loading.......' />
//                         </div>
//                         <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif", }}>
//                             <div className='d-flex flex-column gap-3' style={{ width: "700px" }}>
//                                 <h1 className='text-white' style={{}}>Real estate website</h1>
//                                 <p style={{ color: "#C7C7C7", fontSize: "18px" }}> Developed a Real Estate Web Application using React for the frontend, Express.js for the backend, and MongoDB
//                                     for data storage. Implemented property listings with detailed views, search and filter functionality, and a contact
//                                     form to collect user inquiries. Designed the interface using Bootstrap for a clean and structured layout.</p>
//                             </div>
//                             <div className='d-flex flex-column justify-content-center'>
//                                 <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
//                                 <div className='d-flex justify-content-between'>
//                                     <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>2025</p>
//                                 </div>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
//                                 <div className='d-flex justify-content-between'>
//                                     <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>FullStack Developer</p>
//                                 </div>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />

//                                 <a href='#about' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span></a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='d-flex gap-5 mb-5'>
//                         <div className='d-flex justify-content-center align-items-center rounded-4' style={{ width: "600px", height: "600px", backgroundColor: "#1A1A1A" }}>
//                             <img className='rounded-4' src='/Project_Images/ChatApplication.png' style={{ width: "488px", height: "347px" }} alt='loading.......' />
//                         </div>
//                         <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif", }}>
//                             <div className='d-flex flex-column gap-3' style={{ width: "700px" }}>
//                                 <h1 className='text-white' style={{}}>Chat Application</h1>
//                                 <p style={{ color: "#C7C7C7", fontSize: "18px" }}>  The Real-Time Chat Application is an interactive platform designed for seamless communication. Built with
//                                     React.js and TailwindCSS on the frontend, it offers a responsive and user-friendly interface. The backend,
//                                     powered by Express.js and MongoDB, ensures secure and efficient data management, while Socket.IO facilitates
//                                     real-time messaging. This comprehensive integration provides users with an engaging and dynamic chat
//                                     experience.</p>
//                             </div>
//                             <div className='d-flex flex-column justify-content-center'>
//                                 <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
//                                 <div className='d-flex justify-content-between'>
//                                     <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>2025</p>
//                                 </div>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
//                                 <div className='d-flex justify-content-between'>
//                                     <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>FullStack Developer</p>
//                                 </div>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />

//                                 <a href='#about' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span></a>
//                             </div>
//                         </div>
//                     </div>


//                     <div className='d-flex gap-5 mb-5'>
//                         <div className='d-flex justify-content-center align-items-center rounded-4' style={{ width: "600px", height: "600px", backgroundColor: "#1A1A1A" }}>
//                             <img className='rounded-4' src='/Project_Images/EmailShedulingSequence.png' style={{ width: "488px", height: "347px" }} alt='loading.......' />
//                         </div>
//                         <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif", }}>
//                             <div className='d-flex flex-column gap-3' style={{ width: "700px" }}>
//                                 <h1 className='text-white' style={{}}>Email Sheduling Sequence</h1>
//                                 <p style={{ color: "#C7C7C7", fontSize: "18px" }}>Built an Email Scheduling Web Application that allows users to create custom email sequences with time delays
//                                     and breaks between messages. Developed the frontend using React and Bootstrap, and implemented backend
//                                     logic using Express.js and MongoDB. Utilized Nodemailer for sending emails and Agenda for managing
//                                     scheduled tasks and delayed execution of email workflows.</p>
//                             </div>
//                             <div className='d-flex flex-column justify-content-center'>
//                                 <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
//                                 <div className='d-flex justify-content-between'>
//                                     <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>2025</p>
//                                 </div>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
//                                 <div className='d-flex justify-content-between'>
//                                     <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>FullStack Developer</p>
//                                 </div>
//                                 <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />

//                                 <a href='#about' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span></a>
//                             </div>
//                         </div>
//                     </div>


//                     {seeMore && projectsData.map((project, index) => (
//                         <div key={index} className='d-flex gap-5 mb-5'>
//                             <div className='d-flex justify-content-center align-items-center rounded-4' style={{ width: "600px", height: "600px", backgroundColor: "#1A1A1A" }}>
//                                 <img className='rounded-4' src={project.imageUrl} style={{ width: "488px", height: "347px" }} alt='loading.......' />
//                             </div>
//                             <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif" }}>
//                                 <div className='d-flex flex-column gap-3' style={{ width: "700px" }}>
//                                     <h1 className='text-white'>{project.title}</h1>
//                                     <p style={{ color: "#C7C7C7", fontSize: "18px" }}>{project.description}</p>
//                                 </div>
//                                 <div className='d-flex flex-column justify-content-center'>
//                                     <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
//                                     <hr className='d-flex mt-3' style={{ color: "#C7C7C7" }} />
//                                     <div className='d-flex justify-content-between'>
//                                         <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
//                                         <p style={{ color: "#C7C7C7", fontSize: "18px" }}>{project.year}</p>
//                                     </div>
//                                     <hr className='d-flex mt-3' style={{ color: "#C7C7C7" }} />
//                                     <div className='d-flex justify-content-between'>
//                                         <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
//                                         <p style={{ color: "#C7C7C7", fontSize: "18px" }}>{project.role}</p>
//                                     </div>
//                                     <hr className='d-flex mt-3' style={{ color: "#C7C7C7" }} />
//                                     <a href='#about' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>
//                                         VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}


//                     <div className='d-flex justify-content-center'>
//                         <button className='btn  rounded-pill px-4 py-2' style={{ backgroundColor: "#D3E97A", width: "10vw", padding: "20%", textAlign: "center" }} onClick={() => clickedSeeMore()}>{seeMore ? "SEE LESS" : "SEE MORE"}</button>
//                     </div>

//                 </div>
//             </div>


//             <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />

//             {/* About me */}
//             <div className='d-flex pt-5 justify-content-center' style={{ height: "90vh" }}>
//                 {/* Left side data in about me  */}
//                 <div className="d-flex justify-content-center" style={{ width: "50vw" }}>
//                     <h1 className='intro-name text-white' style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "101px", lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>ABOUT ME</h1>
//                 </div>
//                 {/* Right side data in about me */}
//                 <div className='d-flex flex-column' style={{ width: "50vw", paddingRight: "5vw" }}>
//                     <div>
//                         <p className='text-white' style={{ fontSize: "32px", fontFamily: "'Manrope', sans-serif" }}>I am a full-stack developer focused on building responsive and user-friendly web applications.</p>
//                         <p style={{ fontSize: "18px", color: "#C7C7C7", fontFamily: "'Manrope', sans-serif" }}>Hi, I'm a full-stack developer specializing in building dynamic and scalable web applications from front to back. With a strong focus on clean, maintainable code and seamless user experiences, I develop responsive interfaces and robust backend systems that perform across all devices and platforms.</p>
//                     </div>
//                     <div>
//                         <a href='#aboutme' onClick={() => clickedMoreAbout()} style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>MORE ABOUT ME</a>
//                     </div>
//                 </div>
//             </div>


//             <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />


//             {/* Contact Me */}
//             <div className='d-flex justify-content-between pb-5' style={{ marginLeft: "5vw", marginRight: "5vw" }}>
//                 {/* Left side data in the contact me */}
//                 <div>
//                     <h2 className='text-white' style={{ fontSize: "76px" }}>LET'S CONNECT</h2>
//                     <p style={{ fontSize: "16px", color: "#C7C7C7" }}>Say hello at <span><a href="mailto:ganeshsudhanagunta68@gmail.com" style={{ textDecoration: "underline", color: "inherit", textUnderlineOffset: "10px", textDecorationColor: "#D3E97A" }}>ganeshsudhanagunta68@gmail.com</a></span></p>
//                     <p style={{ fontSize: "16px", color: "#C7C7C7" }}>For more info, here's my <span><a href='https://drive.google.com/file/d/1vi0omq20T5NPTnJYiJcKMAWw66LjvbML/view?usp=sharing' style={{ textDecoration: "underline", color: 'inherit', textUnderlineOffset: "10px", textDecorationColor: "#D3E97A" }}>resume</a></span></p>
//                 </div>

//                 {/* Right side data of contact me */}
//                 <div>
//                     <FormComponent />
//                 </div>
//             </div>


//             <p style={{ fontSize: "16px", color: "#C7C7C7" }} className='p-5'> Designed by Ganesh Sudhanagunta</p>
//         </div>
//     );
// }

// export default Home;




import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.component.jsx';
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import FormComponent from './Components/Form.component.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Home.css";

const Home = () => {
    const projectsData = [
        {
            imageUrl: "/Project_Images/create.png",
            title: "Create Your Own Blog",
            description: "This website is a dynamic, full-stack blogging platform built with the MERN stack. The application features secure authentication using JWT, integrated image uploads through Cloudinary, and a responsive design for seamless use across devices. Real-time post rendering and rich text editing enhance the user experience, making it an ideal platform for publishing personal blogs.\nTools Used: MongoDB, Express.js, React.js, Node.js, Cloudinary",
            year: 2025,
            role: "Full Stack Developer",
            projectUrl:"https://create-your-own-blog-frontend.onrender.com",
        },
        {
            imageUrl: "/Project_Images/subscription.png",
            title: "Subscription Tracker",
            description: "A user-friendly web application designed to help users manage and monitor their digital subscriptions efficiently. The Subscription Tracker enables users to add, edit, and delete subscriptions, view billing cycles, and receive reminders for upcoming payments. Built with the MERN stack, it includes user authentication, responsive UI, and integration with external services for reminders.\nTools Used: MongoDB, Express.js, React.js, Node.js",
            year: 2025,
            role: "Full Stack Developer",
            projectUrl:"https://github.com/Ganesh6811/Subscription-Tracker",
        },
        {
            imageUrl: "/Project_Images/movie.png",
            title: "Movie Search API",
            description: "Developed a Movie Search Web Application using React and The Movie Database (TMDb) API. Implemented dynamic search functionality, interactive UI with hover effects, and optimized API calls for better performance and user experience.\nTools Used: React, API, JavaScript, CSS",
            year: 2025,
            role: "Frontend Developer",
            projectUrl:"https://movie-search-api-4kee.onrender.com",
        },
        {
            imageUrl: "/Project_Images/weather.png",
            title: "Weather App",
            description: "I created a dynamic weather app using JavaScript, HTML, CSS, and EJS. The app fetches real-time weather data from a reliable weather API and displays it in a user-friendly interface.\nTools Used: API, JavaScript, CSS, Express.js, Node.js, EJS",
            year: 2024,
            role: "Full Stack Developer",
            projectUrl:"https://github.com/Ganesh6811/Weather-APP",
        },
        {
            imageUrl: "/Project_Images/todo.png",
            title: "To Do List",
            description: "The React To-Do List Application is a dynamic and user-friendly task management tool designed to help you organize your daily activities efficiently. Built using the powerful React library, this application offers a seamless experience with a sleek interface and intuitive functionality.\nTools Used: React.js, HTML, CSS",
            year: 2024,
            role: "Frontend Developer",
            projectUrl:"https://to-do-list-zqm1.onrender.com",
        },
        {
            imageUrl: "/Project_Images/capital.png",
            title: "Capital Quiz",
            description: "The Capital Quiz Game is an interactive web application designed to test users’ knowledge of world capitals. Built with Node.js and Express for the backend and PostgreSQL for database management, it offers a smooth and engaging experience with dynamically generated quizzes, real-time feedback, and leaderboards.\nTools Used: Node.js, Express.js, PostgreSQL, HTML, CSS",
            year: 2024,
            role: "Backend Developer",
            projectUrl:"https://github.com/Ganesh6811/Capital-Quiz",
        },
        {
            imageUrl: "/Project_Images/drum.png",
            title: "Drum Kit",
            description: "Developed a dynamic drum kit using JavaScript, HTML, and CSS that allows users to play various drum sounds by clicking on virtual pads or using corresponding keyboard keys. This project demonstrates proficiency in JavaScript programming and front-end web development.\nTools Used: JavaScript, CSS, HTML",
            year: 2024,
            role: "Frontend Developer",
            projectUrl:"https://ganesh6811.github.io/DrumKit/",
        }
    ];


    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(false);

    const clickedSeeMore = () => {
        if (seeMore === false) {
            setSeeMore(true);
        }
        else {
            setSeeMore(false);
        }
    }

    const clickedMoreAbout = () => {
        navigate("/about");
    }

    return (
        <div className="bg-black">
            <Header />


            {/* Introduction data */}
            <div className='intro-container d-flex flex-wrap gap-5 text-white justify-content-center align-items-center mt-5 pb-5'>
                <div className='d-flex flex-column gap-4 mx-5' style={{ width: "544px", height: "360px" }}>
                    <div>
                        <h1 className='intro-name' style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>HI, I AM <br /> GANESH S.</h1>
                        <p style={{ color: "#C7C7C7" }}>Full-stack developer passionate about building responsive and user-friendly web applications.</p>
                    </div>
                    <div className='d-flex flex-wrap gap-4'>
                        <button className='btn  rounded-pill px-4 py-2' style={{ backgroundColor: "#D3E97A" }}><a href='#contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact Me</a></button>
                        <div className='d-flex gap-4'>
                            <a href='https://www.linkedin.com/in/ganesh-s-95b848273/'><FaLinkedinIn style={{ width: "34px", height: "44px", color: "#D3E97A" }} /></a>
                            <a href='https://github.com/Ganesh6811'><FaSquareGithub style={{ width: "34px", height: "44px", color: "#D3E97A" }} /></a>
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div>
                    <img className="intro-image rounded-4" src='/myPic.jpg' alt='Loading'  style={{  }} />
                </div>
            </div>

            <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />

            <div className='projects-container d-flex flex-column  align-items-center gap-5 pb-5'>
                {/* My projects */}
                <div className='projects1st-sub d-flex flex-column pt-5' >
                    <h2 className='project-heading intro-name text-white' style={{ fontFamily: "'Bebas Neue', sans-serif",  lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>FEATURED PROJECTS</h2>
                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>Here are some of the selected projects that showcase my passion for the web development.</p>
                </div>

                {/* Displaying the projects */}
                <div className='d-flex flex-column gap-5 flex-wrap'>
                    <div className='indi-container d-flex flex-wrap gap-5 mb-5'>
                        <div className='indi-image-container d-flex justify-content-center align-items-center rounded-4' style={{  backgroundColor: "#1A1A1A" }}>
                            <img className='indi-image rounded-4' src='/Project_Images/RealEsate.png' style={{  }} alt='loading.......' />
                        </div>
                        <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif", }}>
                            <div className='indi-details-container d-flex flex-column gap-3' style={{ }}>
                                <h1 className='text-white' style={{}}>Real estate website</h1>
                                <p style={{ color: "#C7C7C7", fontSize: "18px" }}> Developed a Real Estate Web Application using React for the frontend, Express.js for the backend, and MongoDB
                                    for data storage. Implemented property listings with detailed views, search and filter functionality, and a contact
                                    form to collect user inquiries. Designed the interface using Bootstrap for a clean and structured layout.</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>2025</p>
                                </div>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>FullStack Developer</p>
                                </div>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />

                                <a href='https://real-estate-website-frontend-9sr3.onrender.com' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span></a>
                            </div>
                        </div>
                    </div>

                    <div className='indi-container d-flex flex-wrap gap-5 mb-5'>
                        <div className='indi-image-container d-flex justify-content-center align-items-center rounded-4' style={{  backgroundColor: "#1A1A1A" }}>
                            <img className='indi-image rounded-4' src='/Project_Images/ChatApplication.png' style={{  }} alt='loading.......' />
                        </div>
                        <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif", }}>
                            <div className='indi-details-container d-flex flex-column gap-3' style={{}}>
                                <h1 className='text-white' style={{}}>Chat Application</h1>
                                <p style={{ color: "#C7C7C7", fontSize: "18px" }}>  The Real-Time Chat Application is an interactive platform designed for seamless communication. Built with
                                    React.js and TailwindCSS on the frontend, it offers a responsive and user-friendly interface. The backend,
                                    powered by Express.js and MongoDB, ensures secure and efficient data management, while Socket.IO facilitates
                                    real-time messaging. This comprehensive integration provides users with an engaging and dynamic chat
                                    experience.</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>2025</p>
                                </div>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>FullStack Developer</p>
                                </div>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />

                                <a href='https://github.com/Ganesh6811/Chat-Application' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span></a>
                            </div>
                        </div>
                    </div>


                    <div className='indi-container d-flex flex-wrap gap-5 mb-5'>
                        <div className='indi-image-container d-flex justify-content-center align-items-center rounded-4' style={{  backgroundColor: "#1A1A1A" }}>
                            <img className='indi-image rounded-4' src='/Project_Images/EmailShedulingSequence.png' style={{  }} alt='loading.......' />
                        </div>
                        <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif", }}>
                            <div className='indi-details-container d-flex flex-column gap-3' style={{}}>
                                <h1 className='text-white' style={{}}>Email Sheduling Sequence</h1>
                                <p style={{ color: "#C7C7C7", fontSize: "18px" }}>Built an Email Scheduling Web Application that allows users to create custom email sequences with time delays
                                    and breaks between messages. Developed the frontend using React and Bootstrap, and implemented backend
                                    logic using Express.js and MongoDB. Utilized Nodemailer for sending emails and Agenda for managing
                                    scheduled tasks and delayed execution of email workflows.</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>2025</p>
                                </div>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />
                                <div className='d-flex justify-content-between'>
                                    <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>FullStack Developer</p>
                                </div>
                                <hr className='d-flex mt-3' style={{ color: "#C7C7C7", }} />

                                <a href='https://email-marketing-sequene-frontend.onrender.com' className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span></a>
                            </div>
                        </div>
                    </div>


                    {seeMore && projectsData.map((project, index) => (
                        <div key={index} className='indi-container d-flex flex-wrap gap-5 mb-5'>
                            <div className='indi-image-container d-flex justify-content-center align-items-center rounded-4' style={{  backgroundColor: "#1A1A1A" }}>
                                <img className='indi-image rounded-4' src={project.imageUrl} style={{ }} alt='loading.......' />
                            </div>
                            <div className='d-flex flex-column justify-content-center' style={{ fontFamily: "'Manrope', sans-serif" }}>
                                <div className=' indi-details-container d-flex flex-column gap-3' style={{}}>
                                    <h1 className='text-white'>{project.title}</h1>
                                    <p style={{ color: "#C7C7C7", fontSize: "18px" }}>{project.description}</p>
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h3 className='text-white' style={{ fontSize: "18px" }}>PROJECT INFO</h3>
                                    <hr className='d-flex mt-3' style={{ color: "#C7C7C7" }} />
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='text-white' style={{ fontSize: "18px" }}>Year</h4>
                                        <p style={{ color: "#C7C7C7", fontSize: "18px" }}>{project.year}</p>
                                    </div>
                                    <hr className='d-flex mt-3' style={{ color: "#C7C7C7" }} />
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='text-white' style={{ fontSize: "18px" }}>Role</h4>
                                        <p style={{ color: "#C7C7C7", fontSize: "18px" }}>{project.role}</p>
                                    </div>
                                    <hr className='d-flex mt-3' style={{ color: "#C7C7C7" }} />
                                    <a href={project.projectUrl} className='mt-5' style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>
                                        VIEW PROJECT <span style={{ fontSize: "25px", color: "#D3E97A", marginLeft: "6px" }}>↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div className='d-flex justify-content-center'>
                        <button className='seemore-button btn  rounded-pill px-4 py-2' style={{ backgroundColor: "#D3E97A", padding: "20%", textAlign: "center" }} onClick={() => clickedSeeMore()}>{seeMore ? "SEE LESS" : "SEE MORE"}</button>
                    </div>

                </div>
            </div>


            <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />

            {/* About me */}
            <div className='about-container d-flex pt-5 justify-content-center' style={{  }}>
                {/* Left side data in about me  */}
                <div className="about1st-sub " style={{}}>
                    <h1 className='about-heading intro-name text-white' style={{ fontFamily: "'Bebas Neue', sans-serif",  lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>ABOUT ME</h1>
                </div>
                {/* Right side data in about me */}
                <div className='about2nd-sub d-flex flex-column' style={{}}>
                    <div>
                        <p className='about-main-heading text-white' style={{ fontSize: "32px", fontFamily: "'Manrope', sans-serif" }}>I am a full-stack developer focused on building responsive and user-friendly web applications.</p>
                        <p style={{ fontSize: "18px", color: "#C7C7C7", fontFamily: "'Manrope', sans-serif" }}>Hi, I'm a full-stack developer specializing in building dynamic and scalable web applications from front to back. With a strong focus on clean, maintainable code and seamless user experiences, I develop responsive interfaces and robust backend systems that perform across all devices and platforms.</p>
                    </div>
                    <div>
                        <a href='#aboutme' onClick={() => clickedMoreAbout()} style={{ color: "#D3E97A", textDecoration: "underline", textUnderlineOffset: "10px" }}>MORE ABOUT ME</a>
                    </div>
                </div>
            </div>


            <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />


            {/* Contact Me */}
            <div className='let-container  pt-5' style={{ marginLeft: "5vw", marginRight: "5vw" }}>
                {/* Left side data in the contact me */}
                <div>
                    <h2 className='let-name text-white' style={{  }}>LET'S CONNECT</h2>
                    <p style={{ fontSize: "16px", color: "#C7C7C7" }}>Say hello at <span><a href="mailto:ganeshsudhanagunta68@gmail.com" style={{ textDecoration: "underline", color: "inherit", textUnderlineOffset: "10px", textDecorationColor: "#D3E97A" }}>ganeshsudhanagunta68@gmail.com</a></span></p>
                    <p style={{ fontSize: "16px", color: "#C7C7C7" }}>For more info, here's my <span><a href='https://drive.google.com/file/d/1vi0omq20T5NPTnJYiJcKMAWw66LjvbML/view?usp=sharing' style={{ textDecoration: "underline", color: 'inherit', textUnderlineOffset: "10px", textDecorationColor: "#D3E97A" }}>resume</a></span></p>
                </div>

                {/* Right side data of contact me */}
                <div>
                    <FormComponent />
                </div>
            </div>


            <p style={{ fontSize: "16px", color: "#C7C7C7" }} className='p-5'> Designed by Ganesh Sudhanagunta</p>
        </div>
    );
}

export default Home;