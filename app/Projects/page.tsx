import Navbar from "../Navbar/page";
import Link from "next/link";
import "../Projects/projects.css"

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="pb-7">
        {/* Start Projects */}
        <div className="py-7">
          <p className="section-heading">My Latest Projects</p>
        </div>

        <section id="projects" className="py-12">
          <div className="container">
            <div className="project-grid">
              {/* Project Card */}
              <div className="project-card">
                <img
                  src="/initiative.png"
                  alt="Responsive initiative web"
                />
                <div className="project-card-content">
                  <h4 className="project-card-title">
                    <Link
                      href="https://github.com/Ansharahkhan76/responsive-initiative-web"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Governor Initiative Web
                    </Link>
                  </h4>
                  <p className="project-card-desc">
                    "I&apos;ve built a responsive Governor&apos;s Initiative website using Next.js and custom CSS, offering seamless performance across devices."
                  </p>
                  <Link
                    href="https://responsive-initiative-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-btn"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>

              {/* Repeat for other projects */}
              <div className="project-card">
                <img
                  src="/ageCalculater.png"
                  alt="Age Calculator"
                />
                <div className="project-card-content">
                  <h4 className="project-card-title">
                    <Link
                      href="https://github.com/Ansharahkhan76/Age-Calculater-using-HTML-CSS-JavaScript"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Age Calculator
                    </Link>
                  </h4>
                  <p className="project-card-desc">
                    "I&apos;ve built a responsive Age Calculator using HTML, JavaScript and custom CSS with fully responsive, ensuring seamless functionality across devices."
                  </p>
                  <Link
                    href="https://ansharahkhan76.github.io/Age-Calculater-using-HTML-CSS-JavaScript/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-btn"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>


              <div className="project-card">
                <img
                  src="/portfolio.png"
                  alt="My Portfolio"
                />
                <div className="project-card-content">
                  <h4 className="project-card-title">
                    <Link
                      href="https://github.com/Ansharahkhan76/Ansharahkhan-PortFolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     My Portfolio
                    </Link>
                  </h4>
                  <p className="project-card-desc">
                  "I&apos;ve created a personal portfolio website using custom CSS, showcasing my skills, projects,
                  and achievements in a clean and professional layout."
                  </p>
                  <Link
                    href="https://ansharahkhan76.github.io/Ansharahkhan-PortFolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-btn"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>

              {/* Second roww start */}
              <div className="project-card">
                <img
                  src="/landingPage.png"
                  alt="Landing Page"
                />
                <div className="project-card-content">
                  <h4 className="project-card-title">
                    <Link
                      href="https://github.com/Ansharahkhan76/LandingPage-CodSoft-internship-task/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Landing Page
                    </Link>
                  </h4>
                  <p className="project-card-desc">
                  "I&apos;ve designed a modern and responsive landing page with custom CSS, offering a clean,
                 engaging, and user-friendly experience."
                  </p>
                  <Link
                    href="https://ansharahkhan76.github.io/E-shop-res/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-btn"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="project-card">
                <img
                  src="/E-res.png"
                  alt="E commerce Website"
                />
                <div className="project-card-content">
                  <h4 className="project-card-title">
                    <Link
                      href="https://github.com/Ansharahkhan76/E-shop-res"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     E-commerce responsive Website
                    </Link>
                  </h4>
                  <p className="project-card-desc">
                  I&apos;ve built an E-Commerce website using HTML, CSS, and JavaScript. It allows users to
                   browse products and includes basic functionality for an online store.
                  </p>
                  <Link
                    href="https://ansharahkhan76.github.io/E-shop-res/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-btn"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>





              <div className="project-card">
                <img
                  src="/resumeB.png"
                  alt="Resume Builder"
                />
                <div className="project-card-content">
                  <h4 className="project-card-title">
                    <Link
                      href="https://github.com/Ansharahkhan76/hackathon-milestone-4-5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Resume Builder
                    </Link>
                  </h4>
                  <p className="project-card-desc">
                  "I&apos;ve developed an editable Resume Builder using custom CSS, offering a seamless and user-friendly experience for creating and updating resumes."
                  </p>
                  <Link
                    href="https://hackathon-editable-resume-builder.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-btn"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <center>
        <Link href="https://github.com/Ansharahkhan76" className="justify-center">
          <button className="view-more-btn justify-center">View More Projects on Github</button>
        </Link>
        </center>
      </div>
    </>
  );
}
