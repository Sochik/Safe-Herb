import React, { useEffect } from "react";
import { services } from "../assets/images";

const servicesData = [
  {
    title: "Psychedelic Product Store",
    description: `Browse our secure online shop for ethically sourced psychedelics including:
    • Psilocybin mushrooms & truffles
    • LSD tabs & microdose blotters
    • DMT cartridges & Ayahuasca preparations
    • Ketamine
    All purchases are discreetly packaged and shipped with full respect for your privacy and local regulations.`,
  },
  {
    title: "Microdosing Solutions",
    description: `We offer:
    • Pre-measured microdosing kits
    • Customizable microdosing protocols
    • Supportive resources for optimizing creativity, focus, and emotional balance
    Explore safe and intentional practices supported by our integration guide.`,
  },
  {
    title: "Grow Kits & Mycology Supplies",
    description: `For those who want to grow at home, we provide:
    • Beginner-friendly psilocybin mushroom grow kits
    • Sterile spores and substrate supplies
    • A Grower’s Handbook to walk you through every step`,
  },
  {
    title: "Guided Psychedelic Therapy (Virtual)",
    description: `Partner with certified psychedelic guides and therapists to:
    • Prepare for your experience with intention
    • Navigate your journey safely
    • Integrate insights afterward for lasting change
    Therapy offerings vary based on jurisdiction—please review eligibility at checkout.`,
  },
  {
    title: "Integration Support & Educational Resources",
    description: `Access:
    • Digital guidebooks tailored to your chosen path
    • Articles, infographics, and community Q&As
    • Optional integration sessions with experienced professionals`,
  },
  {
    title: "Natural & Synthetic Antidepressant Options",
    description: `We provide thoughtfully selected alternatives for managing anxiety, depression, and emotional imbalance tailored to individual needs:
    Natural Options:
    • Adaptogens like Ashwagandha and Rhodiola
    • Mood-supportive nootropics (e.g., Lion’s Mane, 5-HTP)
    Synthetic Options:
    • Legal SSRIs with psychedelic integration support
    • MDMA-assisted therapy preparation materials`,
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Header Image */}
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={services}
          alt="Our Services"
          aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-primary my-6">
        Our Services
      </h1>

      {/* Services List */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-backdrop p-6 rounded-lg shadow-md flex flex-col items-start"
          >
            <h2 className="text-xl font-bold text-primary mb-4">
              {service.title}
            </h2>
            <p className="text-lg text-dark whitespace-pre-line">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Need More Info Section */}
      <div className="container mx-auto mt-12 bg-inherit p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Need More Info?</h2>
        <p className="text-lg text-dark mb-4">
          Our team is always here to help! For more details about any of our
          services and how to gain access to specific products, feel free to
          reach out to us via our social media channels{" "}
          <span className="mx-1">
            <a
              href="https://www.facebook.com/safeherb"
              className="text-highlight font-bold hover:text-tertiary"
            >
              Facebook
            </a>,
          </span>
          <span className="mx-1">
            <a
              href="https://www.instagram.com/adam_levine0nline?igsh=MXkwNDNoM3YyZmVqOQ=="
              className="text-highlight font-bold hover:text-tertiary"
            >
              Instagram
            </a>,
          </span>
          <span className="mx-1">
            <a
              href="https://www.tiktok.com/@safe.herbs?_t=ZM-8vaLVruk2cQ&_r=1"
              className="text-highlight font-bold hover:text-tertiary"
            >
              TikTok
            </a>,
          </span>{" "}
          or send us an{" "}
          <span className="mx-1">
            <a
              href="mailto:psychedeliestore@gmail.com"
              className="text-highlight font-bold hover:text-tertiary"
            >
              Email
            </a>
          </span>
          .
        </p>
        <p className="text-lg text-dark mb-4">
          We’re committed to providing you with the best possible experience,
          whether you’re a first-time user or a seasoned explorer.
        <br/>We’ll be glad to guide you.</p>
      </div>
    </section>
  );
}