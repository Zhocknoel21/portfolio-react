import SectionKicker from './SectionKicker.jsx';
import ContactLink from './ContactLink.jsx';
import ContactForm from './ContactForm.jsx';
import { contactLinks } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact">
      <SectionKicker file="contact.sh" />
      <div className="contact-grid">
        <div className="contact-copy">
          <h2 className="sec-head" style={{ marginBottom: 0 }}>
            Let's <span className="accent">connect</span>
          </h2>
          <p>
            Have a project idea or want to get in touch? Send a message directly, or reach me
            through any of the links below.
          </p>
          <div className="links">
            {contactLinks.map((link) => (
              <ContactLink key={link.label} {...link} />
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
