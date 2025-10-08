import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle, 
  ArrowRight,
  User,
  Users,
  MessageCircle,
  Home as HomeIcon,
  School,
  Clock,
  Target,
  Heart
} from 'lucide-react';
import { mockData } from '../mock';

const Services = () => {
  const serviceDetails = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Individual ABA Therapy Sessions",
      description: "One-on-one therapy sessions designed to help your child develop essential skills in communication, social interaction, and daily living.",
      features: [
        "Personalized treatment plans",
        "BCBA supervision and oversight",
        "Data-driven progress tracking",
        "Regular family meetings",
        "Flexible scheduling options"
      ],
      settings: ["In-home", "Community-based", "Daycare centers", "Virtual sessions"],
      duration: "Typically 2-6 hours per session",
      frequency: "2-5 days per week"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parent Training & Support",
      description: "Comprehensive training programs that empower parents and caregivers with effective strategies and techniques to support their child's development.",
      features: [
        "BCBA-led training sessions",
        "Practical skill demonstrations",
        "Strategy implementation support",
        "Ongoing consultation",
        "Resource materials and guides"
      ],
      settings: ["In-home training", "Virtual sessions", "Group workshops", "Individual consultation"],
      duration: "1-2 hours per session",
      frequency: "Weekly or bi-weekly"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Behavioral Consultation",
      description: "Expert consultation services to assess, design, and implement comprehensive behavioral intervention plans for children with autism.",
      features: [
        "Comprehensive behavioral assessments",
        "Individualized treatment planning",
        "Crisis intervention strategies",
        "Team collaboration and training",
        "Progress monitoring and adjustments"
      ],
      settings: ["Home environments", "School settings", "Community programs", "Remote consultation"],
      duration: "Initial assessment: 3-4 hours",
      frequency: "Ongoing as needed"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800">
              Comprehensive ABA Services
            </Badge>
            <h1 className="display-hero text-gray-900 mb-6">
              Evidence-Based ABA Therapy Services
            </h1>
            <p className="body-large text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide comprehensive Applied Behavior Analysis services designed to meet your child and family's unique needs, promoting independence, communication, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/get-started">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                        <div className="text-green-600">{service.icon}</div>
                      </div>
                      <div>
                        <h2 className="heading-large text-gray-900">{service.title}</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Target className="w-3 h-3 mr-1" />
                            {service.frequency}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="body-large text-gray-600 mb-8">{service.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Service Settings:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.settings.map((setting, settingIndex) => (
                            <Badge key={settingIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                              {setting}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <div className="text-white text-2xl">{service.icon}</div>
                            </div>
                            <h3 className="heading-medium text-gray-900 mb-2">Ready to Get Started?</h3>
                            <p className="text-gray-600 mb-4">
                              Schedule a consultation to learn how this service can help your child.
                            </p>
                            <Button asChild size="sm" className="btn-primary">
                              <Link to="/get-started">
                                Get Started
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Link>
                            </Button>
                          </div>
                          
                          <div className="border-t pt-6">
                            <h4 className="font-medium text-gray-900 mb-3">Key Benefits</h4>
                            <div className="space-y-2">
                              <div className="flex items-center text-sm text-gray-600">
                                <Heart className="w-4 h-4 text-red-500 mr-2" />
                                Compassionate, individualized approach
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Target className="w-4 h-4 text-green-500 mr-2" />
                                Evidence-based interventions
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Users className="w-4 h-4 text-blue-500 mr-2" />
                                Family-centered care model
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Where We Provide Services</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We bring our expertise directly to you, providing services in the environments where your child feels most comfortable and engaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HomeIcon className="w-6 h-6" />, title: "In-Home Services", desc: "Comfortable, familiar environment" },
              { icon: <School className="w-6 h-6" />, title: "Daycare Centers", desc: "Supporting everyday routines" },
              { icon: <Users className="w-6 h-6" />, title: "Community Settings", desc: "Real-world skill development" },
              { icon: <MessageCircle className="w-6 h-6" />, title: "Virtual Sessions", desc: "Convenient online support" }
            ].map((setting, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white text-center hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{setting.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{setting.title}</h3>
                  <p className="text-sm text-gray-600">{setting.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Our Process</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              From initial consultation to ongoing support, here's how we work with your family to achieve meaningful outcomes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We start with a comprehensive consultation to understand your child's needs, your family's goals, and current challenges."
                },
                {
                  step: "02", 
                  title: "Assessment & Planning",
                  description: "Our BCBA conducts thorough assessments and develops an individualized treatment plan tailored to your child's unique strengths and needs."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We begin implementing the treatment plan with regular sessions, continuous data collection, and ongoing family communication."
                },
                {
                  step: "04",
                  title: "Progress Monitoring",
                  description: "Regular progress reviews, plan adjustments, and family meetings ensure we're meeting goals and celebrating achievements."
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-medium text-gray-900 mb-2">{process.title}</h3>
                    <p className="body-standard text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-large mb-6">Ready to Begin Your Journey?</h2>
            <p className="body-large mb-8 opacity-90">
              Every child deserves the opportunity to thrive. Let's work together to help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Link to="/get-started">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link to="/team">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;