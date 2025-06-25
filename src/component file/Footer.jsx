export default function Footer() {
  return (
    <footer>
      <h2>
        &copy; Copyright <span>{new Date().getFullYear()}</span> blue arrow
        events Ltd.
      </h2>
      <div className="network-footer">
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
          <img src="imgs/X.svg" alt="-twitter-loog" />
        </a>
        <a aria-label="a call" target="_blank" href="tel:+966-50-467-5153">
          <img src="imgs/call.svg" alt="call-icon" />
        </a>
        <a
          aria-label="location"
          target="_blank"
          href="https://maps.app.goo.gl/tRgjgesdS8zPJ7m79"
        >
          <img className="show-in-mobile" src="imgs/location.svg" alt="location-logo" />
        </a>
      </div>
    </footer>
  );
}
