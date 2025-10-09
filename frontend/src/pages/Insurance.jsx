import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle, 
  ArrowRight,
  Shield,
  CreditCard,
  FileText,
  Phone,
  Clock,
  HelpCircle
} from 'lucide-react';
import { mockData } from '../mock';

const Insurance = () => {
  const insuranceBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "In-Network Benefits",
      description: "We work directly with your insurance to maximize your benefits and minimize out-of-pocket costs."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Prior Authorization Support",
      description: "Our team handles all prior authorization paperwork and communicates directly with your insurance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Processing",
      description: "Streamlined verification process means faster access to services for your child."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Transparent Billing",
      description: "Clear, detailed billing statements and regular updates on your benefits usage."
    }
  ];

  const verificationProcess = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Provide your insurance information during your first consultation call."
    },
    {
      step: "2",
      title: "Benefits Verification",
      description: "We verify your ABA therapy benefits and any authorization requirements."
    },
    {
      step: "3",
      title: "Authorization Request",
      description: "If needed, we submit prior authorization requests on your behalf."
    },
    {
      step: "4",
      title: "Start Services",
      description: "Once approved, we begin services with clear understanding of your coverage."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800">
              Insurance & Coverage
            </Badge>
            <h1 className="display-hero text-gray-900 mb-6">
              We Accept Most Major Insurance Plans
            </h1>
            <p className="body-large text-gray-600 mb-8 max-w-3xl mx-auto">
              Making high-quality ABA therapy accessible and affordable for families. We handle the insurance complexities so you can focus on what matters most—your child's progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/get-started">
                  Verify Your Benefits
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <a href={`tel:${mockData.company.phone}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Call for Questions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Accepted Insurance Plans</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We work with most major insurance providers to make ABA therapy accessible and affordable for your family.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {mockData.insurance.map((provider, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-full h-12 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 bg-white rounded-lg relative">
                    <img 
                      src={provider.logo} 
                      alt={provider.alt}
                      className="insurance-logo max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        e.target.style.display = 'none';
                        const fallback = e.target.parentNode.querySelector('.logo-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="logo-fallback absolute inset-0 bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-500 font-medium text-xs"
                      style={{ display: 'none' }}
                    >
                      {provider.name}
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 text-xs md:text-sm leading-tight">{provider.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
              <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Don't See Your Insurance?</h3>
              <p className="text-gray-600 mb-4">
                We're constantly adding new insurance partnerships. Contact us to check if we can work with your specific plan.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/contact">Check My Insurance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Why Choose In-Network Care</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Working with an in-network provider like Golden Behavior Connection offers significant advantages for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white hover-lift transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{benefit.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Benefits Verification Process</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We make insurance verification simple and straightforward. Here's how we handle your benefits check.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {verificationProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    {index < verificationProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 rounded-lg p-8 max-w-3xl mx-auto">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="heading-medium text-gray-900 mb-4">Verification Usually Takes 24-48 Hours</h3>
              <p className="body-standard text-gray-600 mb-6">
                Our experienced insurance team works quickly to verify your benefits and get you the information you need to make informed decisions about your child's care.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/get-started">
                  Start Verification Process
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-large text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Common questions about insurance coverage for ABA therapy services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is ABA therapy covered by insurance?",
                answer: "Yes, most major insurance plans are required to cover ABA therapy for children with autism spectrum disorder. Coverage varies by plan, but we work with you to understand and maximize your benefits."
              },
              {
                question: "Do I need a referral from my pediatrician?",
                answer: "Requirements vary by insurance plan. Some plans require a referral or prior authorization, while others do not. We'll help determine what your specific plan requires during the verification process."
              },
              {
                question: "What if my insurance requires prior authorization?",
                answer: "Our team handles all prior authorization paperwork and communications with your insurance company. We'll work to get approval as quickly as possible so services can begin."
              },
              {
                question: "How much will I pay out of pocket?",
                answer: "Your out-of-pocket costs depend on your specific insurance plan, including your deductible, copayment, and coinsurance amounts. We'll provide a clear breakdown of your expected costs during verification."
              },
              {
                question: "What happens if my benefits are exhausted?",
                answer: "If you reach your annual benefit limit, we'll discuss options including appeals processes, alternative funding sources, or modified service plans to continue supporting your child's progress."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="body-standard text-gray-600 mb-6">
              Have more questions about insurance coverage?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="btn-secondary">
                <a href={`tel:${mockData.company.phone}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us: {mockData.company.phone}
                </a>
              </Button>
              <Button asChild className="btn-primary">
                <Link to="/contact">
                  Contact Our Insurance Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;