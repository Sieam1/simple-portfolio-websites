import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle title="About Me" subtitle="Who I am" />
        <p className="text-gray-600 leading-relaxed">
          I am a passionate Frontend Developer skilled in HTML, CSS, JavaScript, 
          Tailwind CSS, React, and TypeScript. I love building modern and 
          responsive web applications that deliver great user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
