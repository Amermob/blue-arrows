export default function Contact(props) {
  return (
    <>
      <section id="contact" className="contact">
        <h2>{props.title}</h2>
        <img src="imgs/contact.jpg" alt="blue-arrow-team" />
        <div className="box">
          <div className="socials">
            <iframe
              className="hide-in-mobile"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.219189733611!2d46.6742791!3d24.684990799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a1ff362627%3A0x3b14e5ce847657a6!2zQmx1ZSBBcnJvdyBFdmVudHMg2KfZhNiz2YfZhSDYp9mE2KPYstix2YIg2YTYqtmG2LjZitmFINin2YTZhdi52KfYsdi2INmI2KfZhNmF2KTYqtmF2LHYp9iq!5e0!3m2!1sen!2ssa!4v1746872323808!5m2!1sen!2ssa"
              loading="lazy"
              title="blue arrows office location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
            <h3>Our Socials:</h3>
            <div className="network">
              <a
                aria-label="instgrame"
                target="_blank"
                href="https://www.instagram.com/blue_arrowksa?igsh=MWl6ZGVzZ3c1YzNscQ=="
              >
                <img src="imgs/instagram.svg" alt="instagram-logo" />
              </a>
              <a
                target="_blank"
                aria-label="linkedin"
                href="https://www.linkedin.com/company/bluearrowksa/"
              >
                <img src="imgs/linkedin.svg" alt="linkedin-logo" />
              </a>
              <a
                target="_blank"
                aria-label="x aka twitter"
                href="https://x.com/Blue_Arrowksa?t=-v3Jcdq5NyqaRfrN_9Y8iA&s=09"
              >
                <img src="imgs/X.svg" alt="x-aka-twitter-logo" />
              </a>
              <a
                aria-label="a call"
                target="_blank"
                href="tel:+966-55-565-2302"
              >
                <img src="imgs/call.svg" alt="call-icon" />
              </a>
              <a
                aria-label="location"
                target="_blank"
                href="https://maps.app.goo.gl/tRgjgesdS8zPJ7m79"
              >
                <img
                  className="show-in-mobile"
                  src="imgs/location.svg"
                  alt="location-icon"
                />
              </a>
            </div>
          </div>
          <form
            action="https://formspree.io/f/mknegpzg"
            target="_blank"
            method="POST"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" name="name:" id="name" required />
            <label htmlFor="e-mail">E-mail:</label>
            <input type="email" name="e-mail:" id="e-mail" />
            <label htmlFor="phone">Mobile:</label>
            <input type="tel" inputMode="numeric" name="phone:" id="phone" />
            <label htmlFor="from-who">Representative:</label>
            <input type="text" name="from-who:" id="from-who" />
            <label htmlFor="more-info">
              For More Information Please Let Us Know:
            </label>
            <textarea name="more-info:" id="more-info"></textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
    </>
  );
}
