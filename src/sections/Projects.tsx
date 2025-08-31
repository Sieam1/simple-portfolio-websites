import SectionTitle from "../components/SectionTitle";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    description: "Weather forecasting app using API",
    link: "https://github.com/Sieam1/Weather-App",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with React + Tailwind",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <SectionTitle title="Projects" subtitle="Some of my works" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
