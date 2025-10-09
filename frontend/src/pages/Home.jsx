import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Heart, 
  Users, 
  Home as HomeIcon, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { mockData } from '../mock';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <Badge variant="secondary" className="mb-4 md:mb-6 bg-green-100 text-green-800 text-xs md:text-sm px-3 py-1">
                <span className="hidden sm:inline">No Waitlist • Serving NYC Area • BCBA-Led Care</span>
                <span className="sm:hidden">No Waitlist • BCBA-Led Care</span>
              </Badge>
              <h1 className="display-hero text-gray-900 mb-4 md:mb-6 px-4">
                {mockData.hero.title}
              </h1>
              <p className="body-large text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                {mockData.hero.description}
              </p>
              <p className="body-standard text-gray-500 mb-8 md:mb-10 px-4">
                {mockData.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Button asChild size="lg" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                  <Link to="/get-started">
                    {mockData.hero.primaryCTA}
                    <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                  <Link to="/services">
                    {mockData.hero.secondaryCTA}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="animate-slide-up delay-300 mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <div className="flex items-center text-gray-600 text-sm md:text-base">
                <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                <a href={`tel:${mockData.company.phone}`} className="hover:text-green-700 transition-colors font-medium">
                  {mockData.company.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-600 text-sm md:text-base">
                <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                <a href={`mailto:${mockData.company.email}`} className="hover:text-green-700 transition-colors font-medium break-all sm:break-normal">
                  {mockData.company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Why Families Choose Golden Behavior Connection</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We're different from traditional ABA providers. Here's what makes our approach special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockData.valueProps.map((prop, index) => (
              <Card key={index} className="hover-lift border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      {index === 0 && <Users className="w-6 h-6 text-green-600" />}
                      {index === 1 && <Heart className="w-6 h-6 text-green-600" />}
                      {index === 2 && <Users className="w-6 h-6 text-green-600" />}
                      {index === 3 && <Star className="w-6 h-6 text-green-600" />}
                      {index === 4 && <HomeIcon className="w-6 h-6 text-green-600" />}
                      {index === 5 && <CheckCircle className="w-6 h-6 text-green-600" />}
                    </div>
                    <h3 className="heading-medium text-gray-900 mb-2">{prop.title}</h3>
                  </div>
                  <p className="body-standard text-gray-600">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Our Services</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Comprehensive ABA therapy services designed to meet your child and family's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockData.services.map((service) => (
              <Card key={service.id} className="hover-lift border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="heading-medium text-gray-900 mb-4">{service.title}</h3>
                  <p className="body-standard text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">What Families Say</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Real stories from families we've had the privilege to support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-sm bg-green-50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="body-standard text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">{testimonial.parent}</div>
                    <div>Parent of {testimonial.child}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-large mb-6">Ready to Get Started?</h2>
            <p className="body-large mb-8 opacity-90">
              Take the first step toward helping your child thrive. No waitlist, compassionate care, and personalized attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Link to="/get-started">
                  Start Your Journey Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;