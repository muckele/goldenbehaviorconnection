import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Heart, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Award,
  Shield,
  Compass
} from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800">
              About Golden Behavior Connection
            </Badge>
            <h1 className="display-hero text-gray-900 mb-6">
              Empowering Children and Families Through Compassionate ABA Therapy
            </h1>
            <p className="body-large text-gray-600 mb-8 max-w-3xl mx-auto">
              {mockData.mission.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-large text-gray-900 mb-6">Our Mission</h2>
              <p className="body-large text-gray-600 mb-8">
                {mockData.mission.statement}
              </p>
              <p className="body-standard text-gray-600 mb-8">
                {mockData.mission.vision}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compassion First</h4>
                    <p className="text-gray-600 text-sm">Every decision is made with your child's best interests at heart.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Family-Centered</h4>
                    <p className="text-gray-600 text-sm">We support the entire family, not just the child.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ethics-Driven</h4>
                    <p className="text-gray-600 text-sm">Our approach is grounded in ethical, evidence-based practices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="heading-medium text-gray-900 mb-4">Our Vision</h3>
                <p className="body-standard text-gray-600 mb-6">
                  {mockData.mission.vision}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
                    <div className="text-sm text-gray-600">Families Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">3</div>
                    <div className="text-sm text-gray-600">Service Areas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">0</div>
                    <div className="text-sm text-gray-600">Waitlist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Our Approach</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              {mockData.mission.approach}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white hover-lift transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-medium text-gray-900 mb-4">Individualized Care</h3>
                <p className="body-standard text-gray-600">
                  Every treatment plan is tailored to your child's unique needs, strengths, and goals. We believe in personalized attention, not one-size-fits-all solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white hover-lift transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-medium text-gray-900 mb-4">Evidence-Based</h3>
                <p className="body-standard text-gray-600">
                  Our interventions are grounded in the latest research and best practices in Applied Behavior Analysis, ensuring effective and ethical treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white hover-lift transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Compass className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-medium text-gray-900 mb-4">Collaborative Journey</h3>
                <p className="body-standard text-gray-600">
                  We work closely with families, schools, and other providers to ensure consistent support across all environments where your child learns and grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-large text-gray-900 mb-4">What Makes Us Different</h2>
              <p className="body-large text-gray-600">
                We're not your typical ABA provider. Here's what sets Golden Behavior Connection apart.
              </p>
            </div>

            <div className="space-y-12">
              {mockData.valueProps.slice(0, 4).map((prop, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="heading-medium text-gray-900">{prop.title}</h3>
                    </div>
                    <p className="body-standard text-gray-600">{prop.description}</p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 h-48 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {index === 0 && <Users />}
                        {index === 1 && <Heart />}
                        {index === 2 && <Users />}
                        {index === 3 && <Target />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Where We Serve</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We proudly provide ABA therapy services throughout the greater New York City area and Hudson River Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Westchester County, NY", "Southern Connecticut", "Northern NYC"].map((area, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white text-center hover-lift transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <h3 className="heading-medium text-gray-900 mb-2">{area}</h3>
                  <p className="text-sm text-gray-600">In-home, community, and daycare services available</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="body-standard text-gray-600 mb-6">
              Ready to learn more about how we can support your family?
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;