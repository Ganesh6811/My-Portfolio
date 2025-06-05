import Header from "./Components/Header.component.jsx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import FormComponent from "./Components/Form.component.jsx";
import { useEffect } from "react";
import "./About.css";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (<div>
        <div className="bg-black">

            <Header />

            {/* About me  */}
            <div className='about-container  pb-5' style={{ }}>
                {/* Left side data in about me  */}
                <div className="about1st-sub" style={{  }}>
                    <h1 className='about-heading text-white' style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>ABOUT ME</h1>
                </div>
                {/* Right side data in about me */}
                <div className='about2nd-sub d-flex flex-column' style={{}}>
                    <div>
                        <p className='about1st-intro text-white' style={{ fontFamily: "'Manrope', sans-serif" }}>I am a full-stack developer focused on building responsive and user-friendly web applications.</p>
                        <p className="about2nd-intro" style={{  color: "#C7C7C7", fontFamily: "'Manrope', sans-serif", }}>Hi, I'm a full-stack developer specializing in building dynamic and scalable web applications from front to back. With a strong focus on clean, maintainable code and seamless user experiences, I develop responsive interfaces and robust backend systems that perform across all devices and platforms.</p>
                    </div>
                    <div className='d-flex flex-wrap gap-4 mt-5'>
                        <button className='btn  rounded-pill px-4 py-2 fw-semibold' style={{ backgroundColor: "#D3E97A" }}><a href="https://drive.google.com/file/d/1tuIiYBxF9cb9rgDJlO4YPW2G-8oWwbq3/view?usp=sharing" style={{ color: "inherit", textDecoration: "none" }}>DOWNLOAD RESUME</a></button>
                        <div className='d-flex gap-4'>
                            <a href='https://www.linkedin.com/in/ganesh-s-95b848273/'><FaLinkedinIn style={{ width: "34px", height: "44px", color: "#D3E97A" }} /></a>
                            <a href='https://github.com/Ganesh6811'><FaSquareGithub style={{ width: "34px", height: "44px", color: "#D3E97A" }} /></a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Large Image */}
            <div className="d-flex justify-content-center align-items-center mt-5 pt-3  pb-5">
                <img className="center-image rounded-5" src="/myPic2.png"  />
            </div>


            {/* My capabilities */}
            <div className='capabilities-container d-flex justify-content-center pb-5 mt-5' style={{}}>
                {/* Left side data in about me  */}
                <div className="capabilities1st-sub" style={{  }}>
                    <h1 className='capabilities-name text-white' style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: "1.0", overflow: "clip", fontWeight: "600"}}>MY CAPABILITIES</h1>
                </div>
                {/* Right side data in about me */}
                <div className='capabilities2nd-sub d-flex flex-column' style={{}}>
                    <div>
                        <p className="capabilities-para" style={{ color: "#C7C7C7", fontFamily: "'Manrope', sans-serif", }}>I specialize in building scalable, efficient, and user-centric full-stack applications. From designing intuitive frontend interfaces to developing robust backend services and APIs, I bring a holistic approach to web development. My capabilities include building responsive UI with React, managing data with MongoDB, and ensuring seamless integration with RESTful APIs and third-party services.</p>
                    </div>
                    <div className='d-flex flex-wrap gap-4 mt-5'>
                        <div class="d-flex flex-wrap gap-3 p-4">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">HTML</a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">CSS</a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">JavaScript</a>
                            <a href="https://getbootstrap.com/docs/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">Bootstrap</a>
                            <a href="https://tailwindcss.com/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">TailwindCss</a>
                            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">React</a>
                            <a href="https://www.mongodb.com/docs/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">MongoDB</a>
                            <a href="https://www.w3schools.com/sql/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">SQL</a>
                            <a href="https://www.postgresql.org/docs/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">PostgreSQL</a>
                            <a href="https://expressjs.com/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">Express</a>
                            <a href="https://nodejs.org/en/docs" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">Node.js</a>
                            <a href="https://www.figma.com/learn/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">Figma</a>
                            <a href="https://docs.github.com/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">GitHub</a>
                            <a href="https://cplusplus.com/doc/tutorial/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">C++</a>
                            <a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target="_blank" class="px-4 py-2 rounded-pill border border-light text-light fw-semibold text-decoration-none">DSA</a>
                        </div>
                    </div>
                </div>
            </div>


            <hr className='d-flex mt-5 mb-5' style={{ color: "#C7C7C7", }} />


            {/* My Experience */}
            <div className='experience-container pt-5 ' style={{}}>
                {/* Left side data in about me  */}
                <div className="experience1st-sub " style={{ }}>
                    <h1 className='experience-name text-white' style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: "1.0", overflow: "clip", fontWeight: "600", }}>MY EXPERIENCE</h1>
                </div>
                {/* Right side data in about me */}
                <div className='experience-right d-flex flex-column' style={{ }}>
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className='experience-web text-white' style={{ fontSize: "32px", fontFamily: "'Manrope', sans-serif" }}>Web Developer</p>
                            <p className=" experience-data mt-3" style={{ fontSize: "18px", color: "#C7C7C7", fontFamily: "'Manrope', sans-serif" }}>Mar 2023 - Present</p>
                        </div>
                        <p className="experience-data" style={{ fontSize: "18px", color: "#C7C7C7", fontFamily: "'Manrope', sans-serif", height:"auto" }}>As a passionate Full-Stack Web Developer, I have independently designed, developed, and deployed multiple real-world projects using modern technologies such as React.js, Node.js, Express, MongoDB, and PostgreSQL. I specialize in building responsive and user-friendly interfaces combined with robust backend APIs, ensuring seamless performance and security through JWT-based authentication and efficient database management. My hands-on experience includes integrating third-party APIs,
                            optimizing application performance, and following best practices in version control using Git. With a strong commitment to continuous learning and adaptability, I have successfully delivered end-to-end solutions across various domains, demonstrating my ability to manage the full software development lifecycle while collaborating effectively in team environments.</p>
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
                    <p style={{ fontSize: "16px", color: "#C7C7C7" }}>For more info, here's my <span><a href='https://drive.google.com/file/d/1vi0omq20T5NPTnJYiJcKMAWw66LjvbML/view?usp=sharing' style={{ textDecoration: "underline", color: "inherit", textUnderlineOffset: "10px", textDecorationColor: "#D3E97A" }}>resume</a></span></p>
                </div>

                {/* Right side data of contact me */}
                <div>
                    <FormComponent />
                </div>
            </div>


            <p style={{ fontSize: "16px", color: "#C7C7C7" }} className='p-5'> Designed by Ganesh Sudhanagunta</p>

        </div>
    </div>)
}

export default AboutPage;

