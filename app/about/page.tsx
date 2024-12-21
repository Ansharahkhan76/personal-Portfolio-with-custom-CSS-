import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar/page";
import "./about.css";

function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                {/* First section */}
                <div className="section-row">
                    {/* About section */}
                    <div className="about-box about-section">
                        <p className="section-title">About</p>
                        <p className="about-text">
                            I&apos;m Ansharah Khan, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, TypeScript, and Next.js. I specialize in creating responsive, user-friendly websites and web applications. My focus is on writing clean, efficient code and turning designs into fully functional, seamless user experiences. I am always eager to learn new technologies of frontend frameworks, particularly Next.js, to build dynamic web applications.
                        </p>
                    </div>

                    {/* Education section */}
                    <div className="about-box education-section">
                        <p className="section-title">Education</p>
                        <p className="education-item">Matriculation</p>
                        <p className="education-item">Intermediate</p>
                        <p className="education-item">Bachelor in Arts</p>
                        <p className="education-item">AI-GenEng (GIAIC)</p>
                    </div>
                </div>

                {/* Second section */}
                <div className="section-row">
                    {/* Contact section */}
                    <center>
                    <div className="about-box contact-section">
                        <p className="section-title">Contact</p>
                        <p>Email: <b><Link href="mailto:anshrahkhan29@gmail.com">anshrahkhan29@gmail.com</Link></b></p>
                        <p>Contact: <b><Link href="">03123456789</Link></b></p>
                        <p><b>Karachi, Pakistan</b></p>
                        <div className="social-links">
                            <Link href="https://github.com/Ansharahkhan76">
                                <Image alt="Github" height={40} width={40} src="/github.png" className="social-icon" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7">
                                <Image alt="LinkedIn" height={40} width={40} src="/linkedin.webp" className="social-icon" />
                            </Link>
                            <Link href="mailto:anshrahkhan29@gmail.com">
                                <Image alt="Email" height={40} width={40} src="/email.jpg" className="social-icon" />
                            </Link>
                            <Link href="https://www.instagram.com/_ansharah.khan_">
                                <Image alt="Instagram" height={40} width={40} src="/insta.png" className="social-icon" />
                            </Link>
                        </div>
                    </div>
                    </center>

                    {/* Skills section */}
                    <div className="about-box skills-section">
                        <p className="section-title">Skills</p>
                        <div className="skills-container">
                            <div className="skills-column">
                                <p>HTML</p>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: "85%" }}></div>
                                </div>
                                <p>Tailwind CSS</p>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: "70%" }}></div>
                                </div>
                                <p>NextJs</p>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: "65%" }}></div>
                                </div>
                            </div>
                            <div className="skills-column">
                                <p>JavaScript</p>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: "55%" }}></div>
                                </div>
                                <p>Typescript</p>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: "60%" }}></div>
                                </div>
                                <p>Bootstrap-5</p>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
