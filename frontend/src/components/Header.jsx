import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { mockData } from '../mock';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦊</span>
            </div>
            <div>
              <div className="font-semibold text-xl text-gray-900">Golden Behavior Connection</div>
              <div className="text-xs text-gray-600">Empowered by Finni Health</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${mockData.company.phone}`}
              className="flex items-center text-sm text-gray-600 hover:text-green-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              {mockData.company.phone}
            </a>
            <Button asChild className="btn-primary">
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 pb-6 border-b">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🦊</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Golden Behavior Connection</div>
                    <div className="text-xs text-gray-600">Empowered by Finni Health</div>
                  </div>
                </div>
                
                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                          isActive(item.href)
                            ? 'text-green-700 bg-green-50'
                            : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="border-t pt-6">
                  <a
                    href={`tel:${mockData.company.phone}`}
                    className="flex items-center justify-center text-base text-gray-600 hover:text-green-700 transition-colors mb-4"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {mockData.company.phone}
                  </a>
                  <Button asChild className="w-full btn-primary">
                    <Link to="/get-started" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;