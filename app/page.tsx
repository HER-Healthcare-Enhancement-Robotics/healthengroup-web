"use client";

import { useState } from "react";
import { useS3Images } from "./hooks/useS3Images";

const teamMembers = [
  {
    name: "Nezih Nieto",
    role: "CEO",
    experience:
      "Computer Science expert leading healthcare innovation. Project management and AI development specialist.",
    linkedin: "https://www.linkedin.com/in/nez-niegu/",
  },
  {
    name: "Gustavo De Los Ríos",
    role: "CTO",
    experience:
      "IT infrastructure and robotics systems leader. Expert in technical architecture and scalable robotics platforms.",
    linkedin: "https://www.linkedin.com/in/gustavodlra/",
  },
  {
    name: "Mario Aguirre",
    role: "Software Engineer",
    experience:
      "Backend developer with robotics expertise, focused on autonomous systems and scalable services.",
    linkedin: "https://www.linkedin.com/in/mario-aguirre-9868d/",
  },

  {
    name: "Javier de Golferichs",
    role: "CFO",
    experience:
      "Applied physicist and financial strategist. Specialist in data-driven financial analysis and modeling.",
    linkedin: "https://www.linkedin.com/in/javier-de-golferichs/",
  },
  {
    name: "Juan Andres Sanchez",
    role: "Hardware Engineer",
    experience:
      "Robotics hardware design specialist focused on mechatronics systems and hardware integration.",
    linkedin: "https://www.linkedin.com/in/juan-san-ch/",
  },
  {
    name: "Arturo Murra",
    role: "Operations Feasility",
    experience:
      "Full-stack developer specializing in healthcare systems and biomedical software applications.",
    linkedin: "https://www.linkedin.com/in/arturomurra/",
  },
  {
    name: "Alberto Muñoz",
    role: "Advisor",
    experience:
      "Senior advisor in artificial intelligence and robotics, providing strategic and technical guidance.",
    linkedin: "https://www.linkedin.com/in/luisalbertomunozubando/",
  },
  {
    name: "Felipe Felix",
    role: "Data Science",
    experience:
      "Applied mathematician and AI specialist with strong expertise in predictive modeling and data analytics.",
    linkedin: "https://www.linkedin.com/in/felipefelixa/",
  },
];

const sections = ["home", "about", "team", "research", "contact"];

const teamPositions = [
  { left: "12%", top: "35%" },
  { left: "28%", top: "30%" },
  { left: "45%", top: "33%" },
  { left: "62%", top: "28%" },
  { left: "78%", top: "36%" },
  { left: "20%", top: "55%" },
  { left: "55%", top: "58%" },
  { left: "72%", top: "53%" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
      document
        .getElementById(sections[index])
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (sectionId: string) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const { images: heroImages, loading: heroLoading } = useS3Images("hero");

  const row1 = heroImages.slice(0, Math.ceil(heroImages.length / 3));
  const row2 = heroImages.slice(
    Math.ceil(heroImages.length / 3),
    Math.ceil((heroImages.length * 2) / 3),
  );
  const row3 = heroImages.slice(Math.ceil((heroImages.length * 2) / 3));

  const { images: momentImages, loading: momentsLoading } =
    useS3Images("moments");

  const momentCaptions: Record<number, string> = {
    0: "First lab setup - Beginning our robotics research",
    1: "Team collaboration on AI algorithms",
    2: "Celebrating our first client project",
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-8 right-8 z-50 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        {!menuOpen ? (
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black bg-opacity-90 shadow-2xl z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 p-12 mt-20">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Us" },
            { id: "team", label: "Team" },
            { id: "research", label: "Moments" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className="text-left text-white text-xl hover:text-2xl hover:text-pink-300 transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Section Navigation Arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <button
          onClick={() => scrollToSection(currentSection - 1)}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all hover:bg-pink-500 hover:scale-110"
        >
          <span className="text-2xl text-gray-800">↑</span>
        </button>
        <button
          onClick={() => scrollToSection(currentSection + 1)}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all hover:bg-pink-500 hover:scale-110"
        >
          <span className="text-2xl text-gray-800">↓</span>
        </button>
      </div>

      {/* Hero Section */}

      <section
        id="home"
        className="relative min-h-screen flex items-center bg-white px-8 overflow-hidden"
      >
        {/* Background moving photo collage */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Top row */}
          <div className="absolute top-[15%] left-0 right-0">
            <div
              className="flex gap-40 animate-scroll-left"
              style={{ animationDuration: "50s" }}
            >
              {[...row1, ...row1].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="flex-shrink-0 w-56 h-40 rounded-lg object-cover opacity-60"
                />
              ))}
            </div>
          </div>

          {/* Middle row */}
          <div className="absolute top-[50%] left-0 right-0 transform -translate-y-1/2">
            <div
              className="flex gap-48 animate-scroll-left"
              style={{ animationDuration: "35s", animationDelay: "2s" }}
            >
              {[...row2, ...row2].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="flex-shrink-0 w-40 h-28 rounded-lg object-cover opacity-70"
                />
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="absolute bottom-[15%] left-0 right-0">
            <div
              className="flex gap-36 animate-scroll-left"
              style={{ animationDuration: "25s", animationDelay: "4s" }}
            >
              {[...row3, ...row3].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="flex-shrink-0 w-80 h-56 rounded-lg object-cover opacity-80"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start">
              {/* Logo */}
              <div className="relative w-48 h-48 md:w-150 md:h-150 flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-full  before:bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0)_75%)]  before:blur-2xl before:-z-10">
                <img
                  src="/images/logo.png"
                  alt="Healthen Group Logo"
                  className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-8 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-black">About Us</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* About Us Text */}
            <div
              className={`transition-all duration-700 overflow-hidden ${
                servicesExpanded
                  ? "opacity-0 w-0"
                  : "opacity-100 w-full md:w-1/2"
              }`}
            >
              <p className="text-lg text-black leading-relaxed mb-4">
                We created Healthen as an academic idea to build cutting edge
                research in robotics and machine learning.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Looking at the advancement of AI technologies, we formalized
                this casual lab into a company to offer automation and
                consulting services.
              </p>
            </div>

            {/* Interactive Box */}
            <div
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className={`relative cursor-pointer group bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-in-out ${
                servicesExpanded
                  ? "w-full min-h-[600px] p-8"
                  : "w-full md:w-1/2 h-96"
              }`}
            >
              {!servicesExpanded && (
                <>
                  <div className="h-full flex items-center justify-center text-6xl">
                    👥
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl font-semibold">
                      Click to see our divisions
                    </span>
                  </div>
                </>
              )}

              {servicesExpanded && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-black bg-opacity-90 rounded-xl p-8">
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      Healthen Professional Services
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Our professional services division provides cutting-edge
                      automation and AI solutions to businesses across
                      industries. We specialize in transforming operations
                      through intelligent software, robotic process automation,
                      and strategic technical consulting.
                    </p>
                  </div>
                  <div className="bg-black bg-opacity-90 rounded-xl p-8">
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      Healthen Research
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Our research division pushes the boundaries of what&apos;s
                      possible in robotics and machine learning. We collaborate
                      with academic institutions worldwide, publish in leading
                      journals, and develop experimental technologies that shape
                      the future.
                    </p>
                  </div>
                  <div className="text-center text-gray-500 text-sm">
                    Click anywhere to close
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Team Section */}
      <section
        id="team"
        className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-8 py-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-left text-black">
            Our Team
          </h2>

          {/* Team photo with gradient buttons + details side by side */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div
              className={`relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 transition-all duration-500 ${
                selectedMember !== null ? "w-full md:w-3/5" : "w-full"
              }`}
            >
              {teamPositions.map((pos, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMember(index)}
                  className="team-btn absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-[7px] sm:text-[8px] md:text-[10px] transition-all shadow-lg hover:scale-110 z-10 bg-gradient-to-r from-blue-500 to-pink-500 pulse-animation text-center leading-tight"
                  style={{ left: pos.left, top: pos.top }}
                >
                  {teamMembers[index].role}
                </button>
              ))}
            </div>

            {/* Team Member Details */}
            {selectedMember !== null && (
              <div className="w-full md:w-2/5 bg-white rounded-2xl shadow-2xl p-8 border-2 border-pink-200 md:sticky md:top-20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-900">
                      {teamMembers[selectedMember].name}
                    </h3>
                    <p className="text-xl text-pink-500">
                      {teamMembers[selectedMember].role}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {teamMembers[selectedMember].experience}
                </p>
                <div className="flex gap-4">
                  <a
                    href={`${teamMembers[selectedMember].linkedin}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-[#0077b5] dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Moments Section */}
      <section
        id="research"
        className="min-h-screen bg-white px-8 py-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-left text-black">
            Moments
          </h2>
          <div className="space-y-8">
            <div className="text-left">
              <p className="text-lg text-black leading-relaxed mb-4">
                We learn from every challenge and celebrate innovation.
              </p>
              <p className="text-lg text-black leading-relaxed mb-8">
                Here are some notable moments in our journey as a startup.
              </p>
            </div>

            {/* Carousel */}
            {momentsLoading ? (
              <div className="aspect-video flex items-center justify-center bg-gray-100 rounded-2xl">
                <p className="text-gray-400 text-lg">Loading moments...</p>
              </div>
            ) : (
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${carouselIndex * 100}%)`,
                    }}
                  >
                    {momentImages.map((url, index) => (
                      <div
                        key={index}
                        className="min-w-full aspect-video relative group cursor-pointer"
                      >
                        <img
                          src={url}
                          alt={momentCaptions[index] ?? ""}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                          <p className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity px-8 text-center">
                            {momentCaptions[index] ?? ""}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={() =>
                    setCarouselIndex(
                      (prev) =>
                        (prev - 1 + momentImages.length) % momentImages.length,
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <span className="text-2xl text-gray-800">←</span>
                </button>
                <button
                  onClick={() =>
                    setCarouselIndex((prev) => (prev + 1) % momentImages.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <span className="text-2xl text-gray-800">→</span>
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {momentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`h-3 rounded-full transition-all ${
                        carouselIndex === index
                          ? "bg-pink-500 w-8"
                          : "bg-gray-300 w-3"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-black px-8 py-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto text-left w-full">
          <h2 className="text-5xl font-bold mb-8 text-white">Contact</h2>
          <p className="text-xl text-white leading-relaxed mb-4">
            We&apos;d be honored to know your ideas. Whether you are looking for
            a research collaboration or learning more about our services, feel
            free to get in touch with us.
          </p>

          <div className="mt-12">
            <a
              href="mailto:info@healthengroup.com"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-pink-500 hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              📧 info@healthengroup.com
            </a>
          </div>

          <div className="mt-8">
            <a
              href="https://www.linkedin.com/company/healthen-group"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-pink-300 transition-colors text-lg underline"
            >
              🔗 Connect with us on LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2025 Healthen Group. Where creativity meets engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
