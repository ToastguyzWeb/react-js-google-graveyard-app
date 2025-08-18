import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto px-4 py-12 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Google Graveyard
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Google Graveyard, your comprehensive archive of
            discontinued Google products and services. We document the
            innovative journey of Google's experiments, both successful and
            unsuccessful.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to preserve the history of Google's innovation by
            maintaining a complete record of all products and services that have
            been discontinued. We believe that understanding what didn't work is
            just as important as celebrating what did.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Track
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Hardware products that were discontinued</li>
            <li>Software applications and mobile apps</li>
            <li>Web services and online platforms</li>
            <li>APIs and developer tools</li>
            <li>Experimental projects and beta releases</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why It Matters
          </h2>
          <p className="text-gray-600 mb-6">
            Technology history shows us patterns of innovation, user adoption,
            and market needs. By documenting discontinued products, we help
            developers, researchers, and tech enthusiasts understand the
            evolution of digital products and make informed decisions about
            future technologies.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Did You Know?
            </h3>
            <p className="text-blue-700">
              Google has discontinued over 200 products and services since its
              inception. Some lasted only a few months, while others served
              millions of users for years before being shut down.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-600 mb-6">
            We meticulously research and verify information about each
            discontinued product, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Launch dates and discontinuation dates</li>
            <li>Product descriptions and key features</li>
            <li>Reasons for discontinuation (when available)</li>
            <li>Impact on users and the broader tech ecosystem</li>
            <li>Links to official announcements and news coverage</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Community Contribution
          </h2>
          <p className="text-gray-600 mb-6">
            We welcome contributions from the tech community. If you have
            information about a discontinued Google product that we haven't
            covered, or if you notice any inaccuracies in our database, please
            don't hesitate to reach out. Together, we can build the most
            comprehensive archive of Google's product history.
          </p>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
            <h3 className="text-xl font-semibold mb-2">Join Our Mission</h3>
            <p className="mb-4">
              Help us preserve tech history by contributing to our database or
              sharing our work with others who might find it valuable.
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Involved
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            Have information about a discontinued Google product we missed?
            Found an error in our data? We'd love to hear from you:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>Email:</strong> contact@googlegraveyard.com
              </li>
              <li>
                <strong>GitHub:</strong> github.com/googlegraveyard
              </li>
              <li>
                <strong>Twitter:</strong> @googlegraveyard
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
