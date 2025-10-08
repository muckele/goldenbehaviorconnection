import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦊</span>
              </div>
              <div>
                <div className="font-semibold text-xl text-gray-900">Golden Behavior Connection</div>
                <div className="text-sm text-gray-600">Empowered by Finni Health</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {mockData.mission.statement}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{mockData.company.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href={`tel:${mockData.company.phone}`} className="hover:text-green-700 transition-colors">
                  {mockData.company.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href={`mailto:${mockData.company.email}`} className="hover:text-green-700 transition-colors">
                  {mockData.company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-700 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-green-700 transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-green-700 transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-600 hover:text-green-700 transition-colors text-sm">
                  Insurance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-700 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 text-sm">Individual ABA Therapy</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">Parent Training</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">Behavioral Consultation</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">In-Home Services</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">Community Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Service Areas</h4>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {mockData.serviceAreas.map((area, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {currentYear} Golden Behavior Connection. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-green-700 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-green-700 transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-600 hover:text-green-700 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;