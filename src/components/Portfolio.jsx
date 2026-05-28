import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import myphoto from "../assets/myphoto.jpg";

function Portfolio() {

  const skills = [
    { name: "HTML", percent: "95%" },
    { name: "CSS", percent: "95%" },
    { name: "JavaScript", percent: "80%" },
    { name: "React", percent: "85%" },
    { name: "Python", percent: "75%" },
    { name: "C", percent: "80%" },
    { name: "C++", percent: "85%" },
    { name: "DSA", percent: "70%" },
    { name: "GitHub", percent: "90%" },
  ];

  const projects = [
    {
      title: "Kanban Board",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      desc: "Responsive task management board built using React and Tailwind CSS.",
    },

    {
      title: "Auction Platform",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc: "Football auction system using JavaScript, HTML and CSS.",
    },

    {
      title: "AI Healthcare App",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      desc: "Hackathon healthcare solution with modern frontend design.",
    },

    {
      title: "Peta Website Replica",
      image:
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1200&auto=format&fit=crop",
      desc: "Responsive clone website using HTML and CSS.",
    },
  ];

  return (
    <div className="relative text-white overflow-hidden bg-[#050816]">

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            Antara's Portfolio<span className="text-purple-400">.</span>
          </h1>

          <div className="hidden md:flex gap-10 text-lg">

            <a href="#home" className="hover:text-purple-400 duration-300">
              Home
            </a>

            <a href="#about" className="hover:text-purple-400 duration-300">
              About
            </a>

            <a href="#skills" className="hover:text-purple-400 duration-300">
              Skills
            </a>

            <a href="#projects" className="hover:text-purple-400 duration-300">
              Projects
            </a>

            <a href="#contact" className="hover:text-purple-400 duration-300">
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >

        {/* BACKGROUND IMAGE */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')",
          }}
        ></div>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        {/* PURPLE GLOW */}

        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-[140px]"></div>

        {/* CONTENT */}

        <div className="relative z-10">

   

          <p className="uppercase tracking-[6px] text-purple-300 mb-6 text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight text-white">

            Hi, I'm{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Antara
            </span>

          </h1>

          <h2 className="text-2xl md:text-4xl mt-6 text-gray-200 font-light">
            CSE Student & Creative Web Learner
          </h2>

          <p className="max-w-3xl mt-8 text-gray-300 leading-9 text-lg mx-auto">

            First-year Computer Science Engineering student passionate
            about frontend development, creative UI/UX design and building
            modern responsive websites using React and JavaScript.

          </p>

          <div className="flex gap-5 mt-12 flex-wrap justify-center">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 duration-300 shadow-xl shadow-purple-500/30"
            >
              View My Work
            </a>

            <a
              href="PASTE_YOUR_RESUME_LINK"
              target="_blank"
              className="px-8 py-4 rounded-full border border-white hover:bg-white/10 duration-300"
            >
              Resume
            </a>

          </div>

        </div>

        {/* SCROLL */}

        <div className="absolute bottom-10 animate-bounce z-10">
          <FaArrowDown className="text-white text-3xl" />
        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <h2 className="text-5xl font-bold text-center mb-20">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">

            <p className="text-gray-300 text-lg leading-9">

              I’m Antara Palwankar, a first-year Computer Science
              Engineering student exploring frontend development,
              modern UI/UX design and creative web experiences.

              <br /><br />

              I enjoy transforming ideas into responsive and interactive
              websites while continuously improving my coding,
              problem-solving and design skills.

            </p>

          </div>

          <div className="grid gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400 duration-300">

              <h3 className="text-2xl font-semibold mb-3">
                Web Development
              </h3>

              <p className="text-gray-400 leading-7">
                Creating responsive websites and modern frontend applications.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400 duration-300">

              <h3 className="text-2xl font-semibold mb-3">
                UI/UX Design
              </h3>

              <p className="text-gray-400 leading-7">
                Designing clean, aesthetic and user-friendly interfaces.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400 duration-300">

              <h3 className="text-2xl font-semibold mb-3">
                Project Building
              </h3>

              <p className="text-gray-400 leading-7">
                Building creative projects while learning modern technologies.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <h2 className="text-5xl font-bold text-center mb-20">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md hover:border-purple-400 duration-300"
            >

              <div className="flex justify-between mb-4">

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <span className="text-purple-300">
                  {skill.percent}
                </span>

              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"
                  style={{ width: skill.percent }}
                ></div>

              </div>

            </div>

          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <h2 className="text-5xl font-bold text-center mb-20">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-purple-400 duration-300"
            >

              <img
                src={project.image}
                alt=""
                className="w-full h-[220px] object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {project.desc}
                </p>

              </div>
            </div>

          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-32 text-center"
      >

        <h2 className="text-5xl font-bold mb-10">
          Contact <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-gray-400 text-lg mb-14">
          Let’s connect and build something creative together.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">

          <div className="flex flex-col gap-6 text-lg">

            <a
              href="mailto:2025.antaray@isu.ac.in"
              className="hover:text-purple-400 duration-300"
            >
              2025.antaray@isu.ac.in
            </a>

            <p className="text-gray-400">
              New Panvel, Maharashtra
            </p>

            <div className="flex justify-center gap-8 mt-6">

              <a
                href="https://github.com/Antaraaaa14"
                target="_blank"
                className="text-3xl hover:text-purple-400 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/antara-palwankar-406214385"
                target="_blank"
                className="text-3xl hover:text-purple-400 duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;