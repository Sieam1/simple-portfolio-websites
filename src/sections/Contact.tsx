import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle title="Contact Me" subtitle="Get in touch" />
        <p className="text-gray-600 mb-4">
          Feel free to reach out via email or social media.
        </p>
        <Button href="mailto:sieama317@gmail.com">Send Email</Button>
      </div>
    </section>
  );
};

export default Contact;
