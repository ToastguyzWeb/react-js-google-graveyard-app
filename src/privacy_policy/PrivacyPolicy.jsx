import React from "react";

import { useNavigate } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto px-4 py-12 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: August 10, 2025
        </p>

        <div className="prose max-w-none">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="text-green-800">
              <strong>Privacy-First Approach:</strong> We believe in
              transparency and minimal data collection. This policy explains
              exactly what we collect, why we collect it, and how we protect
              your privacy.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-6">
            Google Graveyard is committed to protecting your privacy. We collect
            minimal information necessary to provide and improve our service.
            Here's exactly what we collect and why:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Automatically Collected Information
          </h3>
          <p className="text-gray-600 mb-4">
            When you visit our website, we automatically collect:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Technical Information:</strong> IP address, browser type
              and version, operating system
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on site,
              click patterns
            </li>
            <li>
              <strong>Device Information:</strong> Screen resolution, device
              type, language preferences
            </li>
            <li>
              <strong>Referral Data:</strong> The website that referred you to
              us
            </li>
            <li>
              <strong>Performance Data:</strong> Page load times, error reports
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Information You Provide
          </h3>
          <p className="text-gray-600 mb-4">
            We only collect information you voluntarily provide:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Search Queries:</strong> Terms you search within our
              database
            </li>
            <li>
              <strong>Contact Information:</strong> When you reach out via our
              contact forms
            </li>
            <li>
              <strong>Feedback:</strong> Comments, suggestions, or bug reports
              you submit
            </li>
            <li>
              <strong>Newsletter:</strong> Email address (only if you subscribe
              to updates)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the collected information solely for these purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Service Provision:</strong> To provide and maintain our
              database service
            </li>
            <li>
              <strong>User Experience:</strong> To improve website functionality
              and user interface
            </li>
            <li>
              <strong>Performance Optimization:</strong> To analyze usage
              patterns and optimize site speed
            </li>
            <li>
              <strong>Support:</strong> To respond to your inquiries and provide
              technical support
            </li>
            <li>
              <strong>Security:</strong> To detect and prevent security threats
              and abuse
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws
              and regulations
            </li>
          </ul>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              We Never:
            </h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Sell your personal information to third parties</li>
              <li>Use your data for advertising purposes</li>
              <li>
                Share individual user data (only aggregated, anonymized data)
              </li>
              <li>Track you across other websites</li>
              <li>Store sensitive personal information unnecessarily</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Sharing and Disclosure
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or rent your personal information to third
            parties. We may share limited, aggregated, non-personally
            identifiable information (such as "number of searches per day") for
            research purposes or with trusted partners who help us operate our
            service.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            When We May Disclose Information
          </h3>
          <p className="text-gray-600 mb-4">
            We may disclose your information only in these limited
            circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations or court orders</li>
            <li>To protect our rights, property, or safety</li>
            <li>
              In connection with a business transfer (merger, acquisition, etc.)
            </li>
            <li>
              To trusted service providers who assist in operating our website
              (with strict confidentiality agreements)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar technologies to enhance your browsing
            experience and analyze site usage. Our cookies are primarily
            functional and analytical, not for advertising purposes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Types of Cookies We Use
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for basic site
              functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors use our site
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and
              preferences
            </li>
            <li>
              <strong>Security Cookies:</strong> Protect against fraudulent
              activity
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            You can control cookies through your browser settings, but some
            features may not work properly if essential cookies are disabled.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 mb-6">
            We implement robust technical and organizational security measures
            to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Encryption:</strong> All data transmissions are encrypted
              using HTTPS
            </li>
            <li>
              <strong>Access Controls:</strong> Strict access controls and
              authentication procedures
            </li>
            <li>
              <strong>Regular Audits:</strong> Regular security assessments and
              vulnerability testing
            </li>
            <li>
              <strong>Data Minimization:</strong> We collect and retain only
              necessary information
            </li>
            <li>
              <strong>Secure Hosting:</strong> Data hosted on secure, regularly
              updated servers
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            However, no method of transmission over the internet is 100% secure.
            While we strive to protect your information, we cannot guarantee
            absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Rights and Choices
          </h2>
          <p className="text-gray-600 mb-4">
            You have several rights regarding your personal information:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Access Rights
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Request a copy of your data</li>
                <li>• Know what data we have about you</li>
                <li>• Understand how we use your data</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Control Rights
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Update or correct your information</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of communications</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Processing Rights
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Object to data processing</li>
                <li>• Request data portability</li>
                <li>• Withdraw consent</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Legal Rights</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• File complaints with authorities</li>
                <li>• Request processing restrictions</li>
                <li>• Get human review of automated decisions</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Retention
          </h2>
          <p className="text-gray-600 mb-6">
            We retain personal information only as long as necessary to fulfill
            the purposes outlined in this Privacy Policy, comply with legal
            obligations, resolve disputes, and enforce agreements. Specific
            retention periods vary based on the type of information and our
            legitimate business needs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            International Data Transfers
          </h2>
          <p className="text-gray-600 mb-6">
            If you are accessing our service from outside the United States,
            please note that your information may be transferred to, stored, and
            processed in the United States. We ensure appropriate safeguards are
            in place for international data transfers.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Children's Privacy
          </h2>
          <p className="text-gray-600 mb-6">
            Our service is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us
            immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the new Privacy Policy on this
            page and updating the "Last updated" date. We encourage you to
            review this policy periodically.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Contact Us About Privacy
            </h3>
            <p className="text-blue-700 mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  General Privacy Inquiries
                </h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>
                    <strong>Email:</strong> privacy@googlegraveyard.com
                  </li>
                  <li>
                    <strong>Response Time:</strong> 48-72 hours
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Data Protection Officer
                </h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>
                    <strong>Email:</strong> dpo@googlegraveyard.com
                  </li>
                  <li>
                    <strong>For:</strong> GDPR/CCPA requests
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
