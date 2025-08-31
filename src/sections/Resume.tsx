import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle title="Resume" subtitle="Download my CV" />
        <p className="text-gray-600 mb-6">
          You can download my updated resume below.
        </p>
        <Button href="/resume.pdf">Download Resume</Button>
      </div>
    </section>
  );
};

export default Resume;
