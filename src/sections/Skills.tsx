import SectionTitle from "../components/SectionTitle";

const skills = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "TypeScript"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <SectionTitle title="My Skills" subtitle="Technologies I use" />
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
