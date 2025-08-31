import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-50"
    >
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-600">Iftekhar Sieam</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Frontend Developer | React | TypeScript
      </p>
      <div className="mt-6 flex gap-4">
        <Button href="#projects">View My Work</Button>
        <Button href="#contact">Contact Me</Button>
      </div>
    </section>
  );
};

export default Hero;
