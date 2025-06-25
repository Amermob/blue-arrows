import { motion } from "framer-motion";

export default function Services(props) {
  return (
    <section id="services" className="services">
      <div className="bg-icon-services">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1080 1080"
        >
          <path
            fill="#fff"
            className="st1"
            d="M584.1,362.6v83.4c0,7.4,8,12.1,14.4,8.4l71.5-41.7c4.6-2.7,10.4-1.1,13.1,3.5l34.6,60.5c2.6,4.6,1.1,10.5-3.5,13.2l-51.8,30.2c-3,1.7-6.6,1.7-9.6,0l-10.1-5.9c-6.4-3.7-6.4-13,0-16.8l31.5-18.4c4.6-2.7,6.1-8.6,3.5-13.2l-5.3-9.3c-2.6-4.6-8.5-6.2-13.1-3.5l-56,32.7c-3,1.7-6.6,1.7-9.6,0l-34-19.8c-3-1.7-4.8-4.9-4.8-8.4v-65.3c0-5.3-4.3-9.7-9.6-9.7h-10.6c-5.3,0-9.6,4.3-9.6,9.7v36.8c0,7.4-8,12.1-14.4,8.4l-10.1-5.9c-3-1.7-4.8-4.9-4.8-8.4v-60.4c0-5.3,4.3-9.7,9.6-9.7h69.1c5.3,0,9.6,4.3,9.6,9.7Z"
          />
          <path
            fill="#fff"
            className="st1"
            d="M407.7,456.6l-5.3,9.3c-2.6,4.6-1.1,10.5,3.5,13.2l56,32.7c3,1.7,4.8,4.9,4.8,8.4v39.7c0,3.5-1.8,6.6-4.8,8.4l-56,32.7c-4.6,2.7-6.1,8.6-3.5,13.2l5.3,9.3c2.6,4.6,8.5,6.2,13.1,3.5l31.5-18.4c6.4-3.7,14.4.9,14.4,8.4v11.8c0,3.5-1.8,6.6-4.8,8.4l-51.8,30.2c-4.6,2.7-10.4,1.1-13.1-3.5l-34.6-60.5c-2.6-4.6-1.1-10.5,3.5-13.2l71.5-41.7c6.4-3.7,6.4-13,0-16.8l-71.5-41.7c-4.6-2.7-6.1-8.6-3.5-13.2l34.6-60.5c2.6-4.6,8.5-6.2,13.1-3.5l51.8,30.2c3,1.7,4.8,4.9,4.8,8.4v11.8c0,7.4-8,12.1-14.4,8.4l-31.5-18.4c-4.6-2.7-10.4-1.1-13.1,3.5Z"
          />
          <path
            fill="#fff"
            className="st0"
            d="M525.1,479.8l-14.9-8.7c-6.4-3.7-14.4.9-14.4,8.4v237.8c0,5.3,4.3,9.7,9.6,9.7h69.1c5.3,0,9.6-4.3,9.6-9.7v-83.4c0-7.4,8-12.1,14.4-8.4l71.5,41.7c4.6,2.7,10.4,1.1,13.1-3.5l34.6-60.5c2.6-4.6,1.1-10.5-3.5-13.2l-56.6-33-58.5-34.1-29.8-17.4-14.4-8.4-29.8-17.4ZM525.1,687.8v-157.1c0-7.4,8-12.1,14.4-8.4l30.3,17.7,29.2,17.1,29.2,17,45.9,26.8c4.6,2.7,6.1,8.6,3.5,13.2l-5.3,9.3c-2.6,4.6-8.5,6.2-13.1,3.5l-60.8-35.5-29.2-17.1h0c-6.4-3.7-14.4.9-14.4,8.4v105c0,5.3-4.3,9.7-9.6,9.7h-10.6c-5.3,0-9.6-4.3-9.6-9.7Z"
          />
        </svg>
      </div>
      <h2>{props.title}</h2>
      <div className="box">
        <motion.div
          initial={{ transform: "scale(0)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "scale(1)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-100px", once: true }}
          className="box-element"
        >
          <p>Exhibition & Booth Design</p>
          <img src="imgs/services/booth.png" alt="Exhibition & Booth Design" />
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "scale(1)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-110px", once: true }}
          className="box-element"
        >
          <p>Light & Sound System</p>
          <img
            src="./public/imgs/services/logistecs.png"
            alt="Light & Sound System"
          />
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "scale(1)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-130px", once: true }}
          className="box-element"
        >
          <p>Parties & Celebration</p>
          <img
            src="./public/imgs/services/party.png"
            alt="Weddings & Parties"
          />
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)", opacity: 0 }}
          whileInView={{
            opacity: 1,
            transform: "scale(1)",
            transition: { duration: 1 },
          }}
          viewport={{ margin: "-150px", once: true }}
          className="box-element"
        >
          <p>Corporation Events & Conference</p>
          <img
            src="./public/imgs/services/conf.png"
            alt="Corporation Events & Conference"
          />
        </motion.div>
      </div>
    </section>
  );
}
