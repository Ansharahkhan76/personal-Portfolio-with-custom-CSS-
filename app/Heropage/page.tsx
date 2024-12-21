"use client"

import "../HeroPage/heroPage.css"
import Link from "next/link";
import Image from "next/image";


function HeroPage() {
  const handleDownloadCV = () => {
    const filePath = "/cv.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "AnsharahCV.pdf";
    link.click();
  };

  return (
    <>
      <div className="main pt-10">
        {/* Left section */}
        <div className="left">
          <p className="intro-text">Hey I&apos;m</p>
          <p className="name">Ansharah Khan</p>
          <p className="description">
            I&apos;m a Passionate <b>Frontend Developer</b> with expertise in
            HTML, CSS, TypeScript, and JavaScript. Skilled in building dynamic
            and responsive web applications, currently enhancing skills with
            NextJs/ReactJs. Dedicated to crafting clean, efficient code and
            seamless user experiences.
          </p>
          <div className="social-links">
            <Link href="https://github.com/Ansharahkhan76">
              <Image
                alt="Github"
                height={40}
                width={40}
                src="/github.png"
                className="social-icon"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7">
              <Image
                alt="LinkedIn"
                height={40}
                width={40}
                src="/linkedin.webp"
                className="social-icon"
              />
            </Link>

            <Link href="mailto:anshrahkhan29@gmail.com">
              <Image
                alt="Email"
                height={40}
                width={40}
                src="/email.jpg"
                className="social-icon"
              />
            </Link>

            <Link href="https://www.instagram.com/_ansharah.khan_">
              <Image
                alt="Instagram"
                height={40}
                width={40}
                src="/insta.png"
                className="social-icon"
              />
            </Link>
          </div>
          <div className="download-btn-container">
            <button onClick={handleDownloadCV} className="download-btn">
              Download CV
            </button>
          </div>
        </div>
        {/* Right Section My Image */}
        <div className="right">
          <Image
            src="/Ansharah.jpg"
            alt="Ansharah"
            height={400}
            width={400}
            className="profile-image"
          />
        </div>
      </div>
    </>
  );
}

export default HeroPage;
