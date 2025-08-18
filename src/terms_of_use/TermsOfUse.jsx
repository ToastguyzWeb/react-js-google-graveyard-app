import React from "react";

import { useNavigate } from "react-router-dom";

const TermsOfUsePage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto px-4 py-12 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: August 10, 2025
        </p>

        <div className="prose max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Important:</strong> Please read these Terms of Use
              carefully before using our service. By accessing or using Google
              Graveyard, you agree to be bound by these terms.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 mb-6">
            By accessing and using Google Graveyard ("the Service"), you accept
            and agree to be bound by the terms and provisions of this agreement
            ("Terms of Use"). If you do not agree to abide by the above, please
            do not use this service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Description of Service
          </h2>
          <p className="text-gray-600 mb-6">
            Google Graveyard is an informational website and database that
            catalogs discontinued Google products and services. We provide
            historical data, descriptions, launch and discontinuation dates, and
            links to external sources for educational, research, and
            informational purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Use License
          </h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily access and use the materials on
            Google Graveyard for personal, non-commercial, educational, and
            research purposes only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              Modify, copy, or distribute the materials for commercial purposes
            </li>
            <li>
              Use the materials for any commercial purpose without written
              permission
            </li>
            <li>
              Attempt to reverse engineer any software contained on the website
            </li>
            <li>
              Remove any copyright, trademark, or other proprietary notations
              from the materials
            </li>
            <li>
              Transfer the materials to another person or "mirror" the materials
              on any other server
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. User Conduct
          </h2>
          <p className="text-gray-600 mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit any harmful, offensive, or inappropriate content</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>
              Attempt to gain unauthorized access to any part of the Service
            </li>
            <li>Collect or harvest any personally identifiable information</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Content Accuracy and Disclaimer
          </h2>
          <p className="text-gray-600 mb-6">
            While we strive to provide accurate and up-to-date information about
            discontinued Google products, we make no representations or
            warranties about the completeness, accuracy, reliability, or
            suitability of the information. The materials on Google Graveyard
            are provided on an 'as is' basis. We disclaim all warranties,
            expressed or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. External Links
          </h2>
          <p className="text-gray-600 mb-6">
            Google Graveyard contains links to external websites and resources.
            We have not reviewed all linked sites and are not responsible for
            their contents, availability, or accuracy. The inclusion of any link
            does not imply endorsement by Google Graveyard. Use of any linked
            website is at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-gray-600 mb-6">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of Google Graveyard and
            its licensors. The Service is protected by copyright, trademark, and
            other laws. Our trademarks and trade dress may not be used without
            our prior written consent.
          </p>

          <h2 className="text-2xl font-semibent text-gray-800 mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-6">
            In no event shall Google Graveyard or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on Google Graveyard, even if
            Google Graveyard or its authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Privacy Policy
          </h2>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. Please review our Privacy Policy,
            which also governs your use of the Service, to understand our
            practices regarding the collection and use of your information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Termination
          </h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your access to the Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms of Use.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            11. Changes to Terms
          </h2>
          <p className="text-gray-600 mb-6">
            Google Graveyard reserves the right to revise these Terms of Use at
            any time without notice. By using this website, you are agreeing to
            be bound by the then current version of these Terms of Use. We
            encourage you to periodically review these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            12. Governing Law
          </h2>
          <p className="text-gray-600 mb-6">
            These Terms of Use and any separate agreements whereby we provide
            you Services shall be governed by and construed in accordance with
            the laws of the jurisdiction in which Google Graveyard operates.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 border">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Use, please contact
              us:
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong>Email:</strong> legal@googlegraveyard.com
              </li>
              <li>
                <strong>Address:</strong> Google Graveyard Legal Department
              </li>
              <li>
                <strong>Response Time:</strong> We typically respond within 48
                hours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
