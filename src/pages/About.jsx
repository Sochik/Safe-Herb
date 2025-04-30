import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { about } from '../assets/images';
import { offer } from '../data/asideData';

export default function About() {
    useEffect(() => {
        return () => {
          window.scrollTo(0, 0);
        };
      }, []);
    return (
      <section className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        {/* Header Image */}
        <div className="w-full h-[60vh] mx-auto">
          <img
            className="object-cover w-full h-full"
            src={about}
            alt="About Us"
            aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-primary">
          About Us
        </h1>

        <div className="w-full flex flex-col items-center my-5 px-3 py-5 text-center gap-3">
          <div className="container px-2 ">
            <p className="text-lg text-dark mb-8">
              Welcome to Safe Herb, your trusted gateway to conscious
              exploration, healing, and personal transformation. We are a
              discreet, result oriented online platform dedicated to offering
              safe, carefully curated psychedelic products—from microdosing to
              macrodose experiences. Whether you’re seeking deeper
              self-awareness, mental clarity, creative expansion, or emotional
              healing, we’re here to support your journey with science-backed
              tools and soul-forward guidance.
            </p>
            <p className="text-lg text-dark ">
              At the core of our mission is accessibility, safety, and
              integration. We believe in the power of psychedelics like
              psilocybin, LSD, DMT, ayahuasca, ketamine, and more—not just for
              recreation, but for real, transformative inner work. Whether
              you’re microdosing to unlock daily potential or embarking on a
              deeper therapeutic experience, we provide holistic support
              grounded in both ancient wisdom and modern neuroscience.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 items-start justify-center">
            <h3 className="text-xl font-bold font-poppins text-primary text-center mt-8">
              What We Offer:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {offer.map((offer, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-start bg-backdrop rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold font-poppins text-highlight">
                    {offer.title}
                  </h3>
                  <p className="text-lg font-light mt-4 text-gray-700">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="container px-2 ">
            <p className="text-lg text-dark mb-8">
              We operate with the highest regard for privacy and discretion. All
              purchases are encrypted and shipped in plain, secure packaging.
              Our {" "}
              <span>
                <Link
                  to="/Terms#PrivacyPolicy"
                  className="text-highlight font-bold hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>{" "}
              and{" "}
              <span>
                <Link
                  to="/Terms"
                  className="text-highlight font-bold hover:underline"
                >
                  Terms and Conditions
                </Link>
              </span>{" "}
              clearly outline our commitment to your confidentiality and safety.
            </p>
            <p className="text-lg text-dark ">
              This is more than a store—it’s a movement. We’re helping rewrite
              the narrative around psychedelics, empowering individuals to heal,
              evolve, and thrive.
            </p>
          </div>
        </div>
      </section>
    );
}

export function AboutShort() {
  return (
      <section className="container mx-auto py-16 px-4 md:px-16 bg-backdrop">
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Discover your path to transformation with Safe Herb—a discreet,
          result-oriented platform offering ethically sourced psychedelics,
          microdosing kits, grow kits, and integration support. We’re here to
          guide you safely through every step of your journey, whether you’re
          exploring for mental clarity, healing, or creativity. Each order
          includes an expert-written guidebook for safe and informed use. <br />{" "}
          We prioritize confidentiality and discreet delivery, with a strong
          commitment to ethical practices. For full details, see our{" "}
          <span>
            <Link
              to="/Terms#PrivacyPolicy"
              className="text-highlight font-bold hover:underline"
            >
              Privacy Policy
            </Link>
          </span>{" "}
          and{" "}
          <span>
            <Link
              to="/Terms"
              className="text-highlight font-bold hover:underline"
            >
              Terms and Conditions
            </Link>
          </span>
          .
        </p>
        <Link
          to="/About"
          className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-highlight transition-all text-center items-center justify-center w-36 mx-auto block"
        >
          About Us
        </Link>
      </div>
    </section>
  );
}

