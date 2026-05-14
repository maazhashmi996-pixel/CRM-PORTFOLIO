import { PROJECTS } from "@/constants/project";
import ProjectCard from "@/components/CRMCard";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-gray-900">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className="font-bold text-xl tracking-tight">SoftHub <span className="text-gray-400 font-medium text-sm">Pvt. Ltd</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
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
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-black transition-all">
              View My Projects <ArrowRight size={20} />
            </button>
            <button className="border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
              Contact Me
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-blue-600/5 rounded-[40px] p-8 aspect-square flex items-center justify-center">
            {/* Mockup Image space like in image 833d044d-ed44-4190-94d6-53734a9236f9.png */}
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

      {/* Projects Grid */}
      <section className="bg-white py-32">
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
    </div>
  );
}