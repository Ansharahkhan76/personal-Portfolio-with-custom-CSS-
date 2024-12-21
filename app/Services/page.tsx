import "../Services/services.css"
import Navbar from "../Navbar/page";
import { Code, Figma, Frame, HeartHandshake, Ratio, Settings2 } from "lucide-react";

export default function Services() {
  return (
    <>
      <Navbar />
      {/* Skills Section */}
      <section id="services" className="py-12">
        <h2 className="section-heading">
          My <span>Services</span>
        </h2>
        <div className="container">
          <div className="service-grid">
            {/* Service Item 1 */}
            <div className="service-item">
              <center>
              <div className="icon">
                <Frame size={44} strokeWidth={1.25} />
              </div>
              </center>
              <h3>Web Design</h3>
              <p>Creating visually appealing websites with a focus on user experience.</p>
            </div>

            {/* Service Item 2 */}
            <div className="service-item">
              <center>
              <div className="icon">
                <Code size={44} strokeWidth={1.25} />
              </div>
              </center>
              <h3>Development</h3>
              <p>Building efficient and functional web applications using modern technologies.</p>
            </div>

            {/* Service Item 3 */}
            <div className="service-item">
              <center>
              <div className="icon">
                <Settings2 size={44} strokeWidth={1.25} />
              </div>
              </center>
              <h3>Graphic Design</h3>
              <p>Designing engaging visuals, logos, and branding elements to enhance your business.</p>
            </div>

            {/* Service Item 4 */}
            <div className="service-item">
              <center>
              <div className="icon">
                <Ratio size={44} strokeWidth={1.25} />
              </div>
              </center>
              <h3>Responsive Design</h3>
              <p>Ensuring a smooth and optimized experience across all devices and screen sizes.</p>
            </div>

            {/* Service Item 5 */}
            <div className="service-item">
              <center>
              <div className="icon">
                <Figma size={44} strokeWidth={1.25} />
              </div>
              </center>
              <h3>UX/UI</h3>
              <p>Focusing on user-centered design to deliver intuitive and seamless interfaces.</p>
            </div>

            {/* Service Item 6 */}
            <div className="service-item">
              <center>
              <div className="icon">
                <HeartHandshake size={44} strokeWidth={1.25} />
              </div>
              </center>
              <h3>Support</h3>
              <p>Providing ongoing support to ensure the functionality and success of your website.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section End */}
    </>
  );
}
