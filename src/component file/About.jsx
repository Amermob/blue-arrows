import { motion } from "framer-motion";

export default function About(props) {
  return (
    <section id="about" className="abouts">
      <div className="bg-icon-about">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1080 1080"
        >
          <path
            fill="#001F54"
            className="st1"
            d="M584.1,362.6v83.4c0,7.4,8,12.1,14.4,8.4l71.5-41.7c4.6-2.7,10.4-1.1,13.1,3.5l34.6,60.5c2.6,4.6,1.1,10.5-3.5,13.2l-51.8,30.2c-3,1.7-6.6,1.7-9.6,0l-10.1-5.9c-6.4-3.7-6.4-13,0-16.8l31.5-18.4c4.6-2.7,6.1-8.6,3.5-13.2l-5.3-9.3c-2.6-4.6-8.5-6.2-13.1-3.5l-56,32.7c-3,1.7-6.6,1.7-9.6,0l-34-19.8c-3-1.7-4.8-4.9-4.8-8.4v-65.3c0-5.3-4.3-9.7-9.6-9.7h-10.6c-5.3,0-9.6,4.3-9.6,9.7v36.8c0,7.4-8,12.1-14.4,8.4l-10.1-5.9c-3-1.7-4.8-4.9-4.8-8.4v-60.4c0-5.3,4.3-9.7,9.6-9.7h69.1c5.3,0,9.6,4.3,9.6,9.7Z"
          />
          <path
            fill="#001F54"
            className="st1"
            d="M407.7,456.6l-5.3,9.3c-2.6,4.6-1.1,10.5,3.5,13.2l56,32.7c3,1.7,4.8,4.9,4.8,8.4v39.7c0,3.5-1.8,6.6-4.8,8.4l-56,32.7c-4.6,2.7-6.1,8.6-3.5,13.2l5.3,9.3c2.6,4.6,8.5,6.2,13.1,3.5l31.5-18.4c6.4-3.7,14.4.9,14.4,8.4v11.8c0,3.5-1.8,6.6-4.8,8.4l-51.8,30.2c-4.6,2.7-10.4,1.1-13.1-3.5l-34.6-60.5c-2.6-4.6-1.1-10.5,3.5-13.2l71.5-41.7c6.4-3.7,6.4-13,0-16.8l-71.5-41.7c-4.6-2.7-6.1-8.6-3.5-13.2l34.6-60.5c2.6-4.6,8.5-6.2,13.1-3.5l51.8,30.2c3,1.7,4.8,4.9,4.8,8.4v11.8c0,7.4-8,12.1-14.4,8.4l-31.5-18.4c-4.6-2.7-10.4-1.1-13.1,3.5Z"
          />
          <path
            fill="#001F54"
            className="st0"
            d="M525.1,479.8l-14.9-8.7c-6.4-3.7-14.4.9-14.4,8.4v237.8c0,5.3,4.3,9.7,9.6,9.7h69.1c5.3,0,9.6-4.3,9.6-9.7v-83.4c0-7.4,8-12.1,14.4-8.4l71.5,41.7c4.6,2.7,10.4,1.1,13.1-3.5l34.6-60.5c2.6-4.6,1.1-10.5-3.5-13.2l-56.6-33-58.5-34.1-29.8-17.4-14.4-8.4-29.8-17.4ZM525.1,687.8v-157.1c0-7.4,8-12.1,14.4-8.4l30.3,17.7,29.2,17.1,29.2,17,45.9,26.8c4.6,2.7,6.1,8.6,3.5,13.2l-5.3,9.3c-2.6,4.6-8.5,6.2-13.1,3.5l-60.8-35.5-29.2-17.1h0c-6.4-3.7-14.4.9-14.4,8.4v105c0,5.3-4.3,9.7-9.6,9.7h-10.6c-5.3,0-9.6-4.3-9.6-9.7Z"
          />
        </svg>
      </div>
      <h2>{props.title}</h2>
      <div className="about-container">
        <motion.div
          initial={{ transform: "translateY(200px)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-100px", once: true }}
          className="about"
        >
          <img src="imgs/about.jpg" alt="a picture in al ula" />
          <p>
            {" "}
            <span>What we Represent:</span> <br />
            Delivered through an approved and innovative operational framework,
            through which we aim to elevate the concept of event organization
            and management, meet both local and global market demands, and guide
            the exhibitions and events industry toward sustainability.
          </p>
        </motion.div>

        <motion.div
          initial={{ transform: "translateY(200px)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-100px", once: true }}
          className="vision"
        >
          <img src="imgs/goal.jpg" alt="alula race" />

          <p>
            {" "}
            <span>Our Vision:</span> <br />
            To be the undisputed number-one choice for event organizers; to
            transform an ordinary event into something beyond expectations.
          </p>
        </motion.div>

        <motion.div
          initial={{ transform: "translateY(200px)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-100px", once: true }}
          className="goal"
        >
          <img src="imgs/vision.jpg" alt="ibn-qasim-center" />

          <p>
            {" "}
            <span>Our Goals:</span> <br />
            To deeply embed all of our thinking minds, physical resources,
            world-class technologies, and exceptional services to create an
            extraordinary event.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
