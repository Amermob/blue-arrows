import { FaPlus } from "react-icons/fa6";
import { motion, animate } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Projects(props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: "AlUla Race",
      img: "./public/imgs/porjects/alula-race.png",
      date: "2024",
      alt: "alula-race",
    },
    {
      id: 2,
      title: "Alpha Star Annual Celebration",
      img: "./public/imgs/porjects/anual-blue-alpha.png",
      date: "2024",
      alt: "blue alpha",
    },
    {
      id: 3,
      title: "Jisr Annual Celebration",
      img: "./public/imgs/porjects/anual-jisr.png",
      date: "2024",
      alt: "molhim",
    },
    {
      id: 4,
      title: "Art Museum",
      img: "./public/imgs/porjects/art-museum.png",
      date: "2021-2022",
      alt: "a picture about Art Museum",
    },
    {
      id: 5,
      title: "Lunch of Geospatial Infomation",
      img: "./public/imgs/porjects/geospatial-info.png",
      date: "2023",
      alt: "Geospatial Infomation picture",
    },
    {
      id: 6,
      title: "The Ceremony of the Distinguished Qualification Programs",
      img: "./public/imgs/porjects/ministry-of-finance.png",
      date: "2023",
      alt: "Ceremony of the Distinguished Qualification Program",
    },
    {
      id: 7,
      title: "Saudi Central Bank",
      img: "./public/imgs/porjects/saudi-centeral-bank.png",
      date: "2024",
      alt: "Saudi Central Bank picture",
    },
    {
      id: 8,
      title: "Zid Booth",
      img: "./public/imgs/porjects/zid.png",
      date: "2023",
      alt: "Zid Booth picture",
    },
    {
      id: 9,
      title: "Ceremony of the Model of Health Care Forum",
      img: "./public/imgs/porjects/health.png",
      date: "2024",
      alt: "Health Holding picture",
    },
  ];

  const projectsElement = projects.map((project, index) => {
    return (
      <motion.div
        initial={{ transform: "translateY(200px)", opacity: 0 }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 1 },
        }}
        viewport={{ margin: `-${index}0px`, once: true }}
        key={project.id}
        className="text-section"
      >
        <img src={project.img} alt="" />
        <p>
          {project.title} <span>{project.date}</span>
        </p>
      </motion.div>
    );
  });
  return (
    <section id="projects" className="projects">

      <h2>{props.title}</h2>
      <div className="project">{projectsElement}</div>

      <section className="icons">
        <div>
          {inView && (
            <CountUp enableScrollSpy duration={5} start={0} end={3161} />
          )}{" "}
          <span>+</span>
          <p>Customers</p>
        </div>
        <div>
          {inView && (
            <CountUp enableScrollSpy duration={5} start={0} end={8999} />
          )}
          <span>+</span>
          <p>Experiences</p>
        </div>
        <div>
          <p className="num" ref={ref}>
            {inView && (
              <CountUp enableScrollSpy duration={5} start={0} end={9999} />
            )}
            <span>+</span>
          </p>
          <p>Events</p>
        </div>
        <div>
          <p className="num">
            {inView && (
              <CountUp enableScrollSpy duration={7} start={0} end={55} />
            )}
            <span>+</span>
          </p>
          <p>Employees</p>
        </div>
      </section>

      <h2>Our Clients:</h2>

      <div className="logos">
        <div className="logos-slider">
          <img
            src="./public/imgs/companies logo/Alula-01.png"
            alt="Alula-logo"
          />
          <img src="./public/imgs/companies logo/anb-01.png" alt="anb-logo" />
          <img src="./public/imgs/companies logo/Hawi-01.png" alt="hawi-logo" />
          <img
            src="./public/imgs/companies logo/Heights.png"
            alt="Heights-logo"
          />
          <img src="./public/imgs/companies logo/Jisr.png" alt="Jisr-logo" />
          <img
            src="./public/imgs/companies logo/Ministry-of-Finance.png"
            alt="Ministry-of-Finance-logo"
          />
          <img src="./public/imgs/companies logo/neom (2).png" alt="neom" />
          <img src="./public/imgs/companies logo/Nuss.png" alt="nuss-logo" />
          <img
            src="./public/imgs/companies logo/Riyadh Holding.png"
            alt="Riyadh Holding-logo"
          />
          <img
            src="./public/imgs/companies logo/Riyadh Season 2024-01.png"
            alt="riyadh-season-logo"
          />
          <img
            src="./public/imgs/companies logo/Saudi Business Center-01.png"
            alt="Saudi Business Center-logo"
          />
          <img
            src="./public/imgs/companies logo/saudi central bank.png"
            alt="saudi central bank-logo"
          />
          <img
            src="./public/imgs/companies logo/STC-pay-01.png"
            alt="stc-pay-logo"
          />
          <img
            src="./public/imgs/companies logo/vocally.png"
            alt="vocally-logo"
          />
          <img
            src="./public/imgs/companies logo/Zid-En-01.png"
            alt="Zid-logo"
          />
        </div>
        <div className="logos-slider">
          <img
            src="./public/imgs/companies logo/Alula-01.png"
            alt="Alula-logo"
          />
          <img src="./public/imgs/companies logo/anb-01.png" alt="anb-logo" />
          <img src="./public/imgs/companies logo/Hawi-01.png" alt="hawi-logo" />
          <img
            src="./public/imgs/companies logo/Heights.png"
            alt="Heights-logo"
          />
          <img src="./public/imgs/companies logo/Jisr.png" alt="Jisr-logo" />
          <img
            src="./public/imgs/companies logo/Ministry-of-Finance.png"
            alt="Ministry-of-Finance-logo"
          />
          <img src="./public/imgs/companies logo/neom (2).png" alt="neom" />
          <img src="./public/imgs/companies logo/Nuss.png" alt="nuss-logo" />
          <img
            src="./public/imgs/companies logo/Riyadh Holding.png"
            alt="Riyadh Holding-logo"
          />
          <img
            src="./public/imgs/companies logo/Riyadh Season 2024-01.png"
            alt="riyadh-season-logo"
          />
          <img
            src="./public/imgs/companies logo/Saudi Business Center-01.png"
            alt="Saudi Business Center-logo"
          />
          <img
            src="./public/imgs/companies logo/saudi central bank.png"
            alt="saudi central bank-logo"
          />
          <img
            src="./public/imgs/companies logo/STC-pay-01.png"
            alt="stc-pay-logo"
          />
          <img
            src="./public/imgs/companies logo/vocally.png"
            alt="vocally-logo"
          />
          <img
            src="./public/imgs/companies logo/Zid-En-01.png"
            alt="Zid-logo"
          />
        </div>
      </div>
    </section>
  );
}
