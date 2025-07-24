import React from "react";
import {
  Facebook,
  Twitter,
  Briefcase,
  Instagram,
  ShieldCheck,
  Lock,
  Zap,
  Trophy,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="text-[var(--color-primary)] bg-[var(--color-light)]"
        style={{
          background: "var(--color-light)",
          color: "var(--color-primary)",
        }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold mb-4">
                {/* Job<span style={{ color: 'var(--color-secondary)' }}>Matrix</span> */}
                <Link href="/">
                  <Image
                    src="/assets/Images/Logo.png"
                    alt="JobScraper Logo"
                    width={180}
                    height={180}
                  />
                </Link>
              </div>
              <p className="mb-6 leading-relaxed max-w-md text-[var(--color-dark)]">
                Revolutionizing job discovery through AI-powered automation.
                Stop searching, start finding your dream career with
                personalized job matches delivered straight to your inbox.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-[var(--color-white)] hover:bg-[var(--color-info)] w-10 h-10 rounded-lg flex items-center justify-center transition-colors border border-[var(--color-accent)]"
                >
                  <Facebook className="w-5 h-5 text-[var(--color-primary)]" />
                </a>
                <a
                  href="#"
                  className="bg-[var(--color-white)] hover:bg-[var(--color-info)] w-10 h-10 rounded-lg flex items-center justify-center transition-colors border border-[var(--color-accent)]"
                >
                  <Twitter className="w-5 h-5 text-[var(--color-primary)]" />
                </a>
                <a
                  href="#"
                  className="bg-[var(--color-white)] hover:bg-[var(--color-info)] w-10 h-10 rounded-lg flex items-center justify-center transition-colors border border-[var(--color-accent)]"
                >
                  <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                </a>
                <a
                  href="#"
                  className="bg-[var(--color-white)] hover:bg-[var(--color-info)] w-10 h-10 rounded-lg flex items-center justify-center transition-colors border border-[var(--color-accent)]"
                >
                  <Instagram className="w-5 h-5 text-[var(--color-primary)]" />
                </a>
              </div>
              {/* Newsletter Signup */}
              <div className="bg-[var(--color-accent)] rounded-xl p-4">
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">
                  Stay Updated
                </h4>
                <p className="text-[var(--color-dark)] text-sm mb-3">
                  Get job market insights & product updates
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-[var(--color-white)] border border-[var(--color-info)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-[var(--color-primary)]"
                  />
                  <button className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] px-4 py-2 rounded-lg text-sm font-medium transition-colors text-[var(--color-white)]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            {/* Product Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    API Access
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Mobile App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors flex items-center"
                  >
                    Integrations
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                      50+
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Job Search Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Salary Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Career Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors flex items-center"
                  >
                    Help Center
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                      24/7
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Press Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Trust Badges Section */}
        {/* <div className="border-t border-[var(--color-accent)]">
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="flex items-center space-x-3">
          <div className="bg-green-500 rounded-full p-2">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[var(--color-primary)]">SOC 2 Certified</div>
            <div className="text-[var(--color-dark)] text-sm">Enterprise Security</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 rounded-full p-2">
            <Lock className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[var(--color-primary)]">GDPR Compliant</div>
            <div className="text-[var(--color-dark)] text-sm">Data Protection</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-purple-500 rounded-full p-2">
            <Zap className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[var(--color-primary)]">99.9% Uptime</div>
            <div className="text-[var(--color-dark)] text-sm">Always Available</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 rounded-full p-2">
            <Trophy className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[var(--color-primary)]">Award Winner</div>
            <div className="text-[var(--color-dark)] text-sm">Best Job Tech 2024</div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-accent)]">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-[var(--color-dark)] text-sm">
                  © 2025 JobMatrix. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Terms of Service
                  </a>
                  <span className="text-gray-400">•</span>
                  {/* <a href="#" className="text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">Cookie Policy</a> */}
                  {/* <span className="text-gray-400">•</span> */}
                  <a
                    href="#"
                    className="text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Sitemap
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* <div className="flex items-center space-x-2 text-sm text-[var(--color-dark)]">
            <span className="bg-green-500 w-2 h-2 rounded-full"></span>
            <span>All systems operational</span>
          </div> */}
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-[var(--color-dark)]">Made with</span>
                  <span className="text-red-500">❤️</span>
                  <span className="text-[var(--color-dark)]">
                    for job seekers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Back to Top Button */}
        {/* <button className="fixed bottom-8 right-8 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-[var(--color-white)] w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center">
          <ArrowUp className="w-6 h-6" />
        </button> */}
      </footer>
    </>
  );
};

export default Footer;
