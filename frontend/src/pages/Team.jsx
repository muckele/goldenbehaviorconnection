import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowRight,
  Award,
  GraduationCap,
  Clock,
  Star,
  Users,
  Heart,
  CheckCircle
} from 'lucide-react';
import { mockData } from '../mock';

const Team = () => {
  const qualifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Board Certified Behavior Analysts (BCBAs)",
      description: "All our lead clinicians are board-certified with extensive training in ABA principles and practices."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Advanced Education",
      description: "Our team holds master's and doctoral degrees in behavior analysis, psychology, and related fields."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Extensive Experience",
      description: "Collectively, our team has decades of experience working with children with autism spectrum disorders."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Approach",
      description: "We prioritize ethics, compassion, and family-centered care in everything we do."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800">
              Meet Our Expert Team
            </Badge>
            <h1 className="display-hero text-gray-900 mb-6">
              Dedicated Professionals Committed to Your Child's Success
            </h1>
            <p className="body-large text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team of Board Certified Behavior Analysts and experienced clinicians bring passion, expertise, and compassion to every family we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Team Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Our Qualifications</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              When you choose Golden Behavior Connection, you're choosing a team with the highest standards of education, certification, and ethical practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="border-0 shadow-sm hover-lift transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{qual.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{qual.title}</h3>
                  <p className="text-sm text-gray-600">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Meet Our Team</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Get to know the dedicated professionals who will be working with your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.team.map((member) => (
              <Card key={member.id} className="border-0 shadow-lg hover-lift transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Users className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="heading-medium text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-700 font-medium mb-2">{member.title}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">{member.credentials}</Badge>
                      <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-green-50 text-green-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">Expert Level</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-large text-gray-900 mb-4">Our Team Approach</h2>
              <p className="body-large text-gray-600">
                Collaboration, communication, and continuous learning are at the heart of our team's methodology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-medium text-gray-900 mb-6">How We Work Together</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Collaborative Treatment Planning</h4>
                      <p className="text-gray-600 text-sm">Our BCBAs work together to develop comprehensive, individualized treatment plans.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Regular Case Consultations</h4>
                      <p className="text-gray-600 text-sm">Weekly team meetings ensure consistent approaches and shared learning.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ongoing Professional Development</h4>
                      <p className="text-gray-600 text-sm">Continuous training keeps our team current with the latest research and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Family-Centered Communication</h4>
                      <p className="text-gray-600 text-sm">Regular updates and open communication keep families informed and engaged.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-8">
                    <h4 className="heading-medium text-gray-900 mb-6 text-center">Team Statistics</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">45+</div>
                        <div className="text-sm text-gray-600">Years Combined Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                        <div className="text-sm text-gray-600">Board Certified BCBAs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                        <div className="text-sm text-gray-600">Families Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                        <div className="text-sm text-gray-600">Family Satisfaction</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finni Health Partnership */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">🦊</span>
              </div>
              <div>
                <h2 className="heading-large text-gray-900">Empowered by Finni Health</h2>
                <p className="text-gray-600">Supporting Independent BCBAs</p>
              </div>
            </div>
            
            <p className="body-large text-gray-600 mb-8">
              Our partnership with Finni Health allows our independent BCBAs to focus on what they do best—providing exceptional, 
              personalized care—while having access to the resources and support of a larger organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Independent Decision Making</h4>
                <p className="text-sm text-gray-600">Our BCBAs maintain full clinical independence and make decisions based on your child's best interests.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Enhanced Resources</h4>
                <p className="text-sm text-gray-600">Access to advanced training, technology, and administrative support enhances our service quality.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Collaborative Network</h4>
                <p className="text-sm text-gray-600">Connection with a broader network of professionals enriches our knowledge and expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-large text-gray-900 mb-6">Ready to Meet Our Team?</h2>
            <p className="body-large text-gray-600 mb-8">
              Schedule a consultation to learn more about our approach and how our experienced team can support your family's journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/get-started">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;