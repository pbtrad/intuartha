import Navbar from "./components/Navbar";
import Image from 'next/image';
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <section
          id="hero"
          className="relative py-20 text-center overflow-hidden"
        >
          <Image
  src="/hero-bg.jpg"
  alt="Waveform background"
  fill
  style={{ objectFit: 'cover' }}
  className="absolute inset-0 z-0 brightness-150"
  priority
/>
          <div className="relative z-10 px-4">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              AI-Driven Forecasting Solutions
            </h1>
            <p className="text-2xl text-black mb-8 font-black">
              Smarter predictions. Sharper decisions.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-full hover:scale-105 transition"
            >
              Get Started
            </a>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-white text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Intuartha develops advanced forecasting tools powered by machine
            learning and AI. Our solutions help businesses across sectors make
            informed, data-driven decisions. While we're rooted in the energy
            domain, our capabilities extend far beyond.
          </p>
        </section>

        <section id="services" className="py-20 px-4 bg-cyan-50 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Intuartha delivers AI-powered forecasting solutions tailored to your
            needs. Whether you're working in energy, finance, or operations, we
            have you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                Forecasting APIs
              </h3>
              <p className="text-gray-600">
                Easy-to-integrate APIs for predictive insights across sectors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                Custom ML Models
              </h3>
              <p className="text-gray-600">
                Tailored machine learning models for your unique forecasting
                challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                Energy + Beyond
              </h3>
              <p className="text-gray-600">
                We specialize in energy—but our models work for all time series
                data.
              </p>
            </div>
          </div>
        </section>

        <section id="coming-soon" className="py-20 px-4 bg-cyan-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're currently building out a powerful new feature: Balancing
            Market Forecasting. Designed to help market participants anticipate
            imbalances and price signals, this tool will support better
            decision-making and greater grid stability.
          </p>
        </section>

        <section id="contact" className="py-20 px-4 bg-cyan-50 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Interested in a demo or partnership? Let's talk.
          </p>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
