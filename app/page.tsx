import { PROJECTS } from "@/constants/project";
import ProjectCard from "@/components/CRMCard";
import { ArrowRight, Mail, Code2, Globe, Database, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-gray-900 scroll-smooth">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center sticky top-0 bg-[#fcfcfd]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className="font-bold text-xl tracking-tight">SoftHub <span className="text-gray-400 font-medium text-sm">Pvt. Ltd</span></span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
        </div>

        <button className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-100 transition-all flex items-center gap-2">
          Contact Me <Mail size={16} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Full Stack Developer | CRM Specialist
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold mt-6 leading-[1.1]">
            Building Powerful <br />
            <span className="text-blue-600">CRM & ERP Systems</span>
          </h1>
          <p className="text-gray-500 mt-8 text-lg max-w-md leading-relaxed">
            I build modern, scalable and high-performance solutions that help businesses automate, manage and grow efficiently.
          </p>
          <div className="flex gap-4 mt-10">
            <a href="#projects" className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-black transition-all">
              View My Projects <ArrowRight size={20} />
            </a>
            <button className="border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
              Contact Me
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-blue-600/5 rounded-[40px] p-8 aspect-square flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-4">
              <div className="w-full h-4 bg-gray-100 rounded-full mb-4"></div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="h-20 bg-blue-50 rounded-2xl"></div>
                <div className="h-20 bg-green-50 rounded-2xl"></div>
                <div className="h-20 bg-purple-50 rounded-2xl"></div>
              </div>
              <div className="h-40 bg-gray-50 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <Globe className="text-blue-600 mb-4" />
                  <h4 className="font-bold">Web Solutions</h4>
                  <p className="text-sm text-gray-500">MERN Stack Expertise</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <Database className="text-green-600 mb-4" />
                  <h4 className="font-bold">Architecture</h4>
                  <p className="text-sm text-gray-500">Scalable Databases</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <Code2 className="text-purple-600 mb-4" />
                  <h4 className="font-bold">Clean Code</h4>
                  <p className="text-sm text-gray-500">TypeScript & Next.js</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <Cpu className="text-orange-600 mb-4" />
                  <h4 className="font-bold">Automation</h4>
                  <p className="text-sm text-gray-500">AI Integration</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">About Me</span>
              <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">Software Engineer Specializing in Business Management Systems</h2>
              <p className="text-gray-600 text-lg mb-6">
                Assalam-o-Alaikum! I'm Maaz Hashmi, a dedicated Software Engineer and MERN Stack Developer.
                I specialize in creating complex Lead Management, Account Management, and CRM systems that bridge the gap between efficiency and technology.
              </p>
              <p className="text-gray-600 text-lg">
                With a strong foundation in Next.js, TypeScript, and Full-stack deployment, I build tools that don't just look good, but solve real-world business problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold text-sm uppercase">My Work</span>
            <h2 className="text-4xl font-bold mt-2">Featured CRM & ERP Projects</h2>
            <p className="text-gray-500 mt-4">Explore my latest systems. Click on any project to view live demo.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-gray-400 mb-8">Let's discuss how a custom CRM can scale your operations.</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}