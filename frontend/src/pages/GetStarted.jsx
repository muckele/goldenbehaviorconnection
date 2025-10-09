import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  FileText,
  Phone,
  Calendar,
  Heart,
  Send
} from 'lucide-react';
import { mockData } from '../mock';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Parent/Guardian Information
    parentName: '',
    relationship: '',
    email: '',
    phone: '',
    
    // Child Information
    childName: '',
    childAge: '',
    childGender: '',
    diagnosis: '',
    diagnosisDate: '',
    
    // Location & Insurance
    address: '',
    city: '',
    state: '',
    zipCode: '',
    insurance: '',
    memberID: '',
    
    // Current Services & Goals
    currentServices: [],
    previousABA: '',
    primaryGoals: '',
    challenges: '',
    
    // Preferences
    preferredSettings: [],
    availability: '',
    urgency: 'normal',
    
    // Additional Information
    additionalInfo: '',
    hearAboutUs: '',
    
    // Consent
    consent: false,
    privacyPolicy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxGroup = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value) 
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mock form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Application submitted successfully! We\'ll contact you within 24 hours to schedule your consultation.');
      // Reset form or redirect
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    }
  };

  const steps = [
    { number: 1, title: "Basic Information", description: "Tell us about you and your child" },
    { number: 2, title: "Location & Insurance", description: "Where you are and coverage details" },
    { number: 3, title: "Goals & Preferences", description: "What you hope to achieve" },
    { number: 4, title: "Review & Submit", description: "Confirm your information" }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No Waitlist",
      description: "Start services immediately upon approval"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Response",
      description: "We'll contact you within 24 hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Verification",
      description: "We handle all insurance paperwork"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description: "Family-centered, ethical approach"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800">
              Get Started Today
            </Badge>
            <h1 className="heading-large text-gray-900 mb-4">
              Begin Your Child's ABA Therapy Journey
            </h1>
            <p className="body-large text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the first step toward helping your child thrive. Complete this form to schedule your free consultation with our experienced BCBAs.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-green-600 mb-2">{benefit.icon}</div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex-1 relative">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step.number ? 'bg-green-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                  <div className="mt-2">
                    <div className="text-sm font-medium text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Form */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
                    <p className="text-gray-600">{steps[currentStep - 1].description}</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Basic Information */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Parent/Guardian Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                                <Input
                                  name="parentName"
                                  value={formData.parentName}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input"
                                  placeholder="Enter your full name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship to Child *</label>
                                <select
                                  name="relationship"
                                  value={formData.relationship}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input w-full"
                                >
                                  <option value="">Select relationship</option>
                                  <option value="parent">Parent</option>
                                  <option value="guardian">Guardian</option>
                                  <option value="grandparent">Grandparent</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <Input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input"
                                  placeholder="your@email.com"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                <Input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input"
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Child Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name *</label>
                                <Input
                                  name="childName"
                                  value={formData.childName}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input"
                                  placeholder="Enter child's name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Child's Age *</label>
                                <Input
                                  type="number"
                                  name="childAge"
                                  value={formData.childAge}
                                  onChange={handleInputChange}
                                  required
                                  min="1"
                                  max="21"
                                  className="form-input"
                                  placeholder="Age in years"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                <select
                                  name="childGender"
                                  value={formData.childGender}
                                  onChange={handleInputChange}
                                  className="form-input w-full"
                                >
                                  <option value="">Select gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                  <option value="prefer-not-to-say">Prefer not to say</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Diagnosis</label>
                                <Input
                                  name="diagnosis"
                                  value={formData.diagnosis}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  placeholder="e.g., Autism Spectrum Disorder"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Location & Insurance */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Location Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                                <Input
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input"
                                  placeholder="Street address"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                                <Input
                                  name="city"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input"
                                  placeholder="City"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                                <select
                                  name="state"
                                  value={formData.state}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input w-full"
                                >
                                  <option value="">Select state</option>
                                  <option value="NY">New York</option>
                                  <option value="CT">Connecticut</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Insurance Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider *</label>
                                <select
                                  name="insurance"
                                  value={formData.insurance}
                                  onChange={handleInputChange}
                                  required
                                  className="form-input w-full"
                                >
                                  <option value="">Select insurance provider</option>
                                  <option value="aetna">Aetna</option>
                                  <option value="cigna">Cigna</option>
                                  <option value="united">United Healthcare</option>
                                  <option value="medicaid">NY Medicaid</option>
                                  <option value="emblem">Emblem Health</option>
                                  <option value="nyship">NY Ship</option>
                                  <option value="empire">Empire Blue Cross Blue Shield</option>
                                  <option value="other">Other</option>
                                  <option value="none">No insurance</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Member ID</label>
                                <Input
                                  name="memberID"
                                  value={formData.memberID}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  placeholder="Insurance member ID"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Goals & Preferences */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Current Services & History</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  What services is your child currently receiving? (Check all that apply)
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                  {['Speech Therapy', 'Occupational Therapy', 'Physical Therapy', 'ABA Therapy', 'Special Education', 'Other'].map((service) => (
                                    <label key={service} className="flex items-center text-sm">
                                      <Checkbox
                                        checked={formData.currentServices.includes(service)}
                                        onCheckedChange={() => handleCheckboxGroup('currentServices', service)}
                                        className="mr-2"
                                      />
                                      {service}
                                    </label>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Has your child received ABA therapy before?</label>
                                <select
                                  name="previousABA"
                                  value={formData.previousABA}
                                  onChange={handleInputChange}
                                  className="form-input w-full"
                                >
                                  <option value="">Select an option</option>
                                  <option value="never">Never received ABA</option>
                                  <option value="currently">Currently receiving ABA</option>
                                  <option value="previously">Previously received ABA</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Goals & Challenges</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  What are your primary goals for your child? *
                                </label>
                                <Textarea
                                  name="primaryGoals"
                                  value={formData.primaryGoals}
                                  onChange={handleInputChange}
                                  required
                                  rows={3}
                                  className="form-input resize-none"
                                  placeholder="e.g., improve communication, reduce challenging behaviors, increase independence..."
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  What are the main challenges you're facing?
                                </label>
                                <Textarea
                                  name="challenges"
                                  value={formData.challenges}
                                  onChange={handleInputChange}
                                  rows={3}
                                  className="form-input resize-none"
                                  placeholder="Describe the specific behaviors or areas where your child needs support..."
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Service Preferences</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Where would you prefer services? (Check all that apply)
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                  {['In-home', 'Community settings', 'Daycare/School', 'Virtual sessions'].map((setting) => (
                                    <label key={setting} className="flex items-center text-sm">
                                      <Checkbox
                                        checked={formData.preferredSettings.includes(setting)}
                                        onCheckedChange={() => handleCheckboxGroup('preferredSettings', setting)}
                                        className="mr-2"
                                      />
                                      {setting}
                                    </label>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">How soon do you need services?</label>
                                <select
                                  name="urgency"
                                  value={formData.urgency}
                                  onChange={handleInputChange}
                                  className="form-input w-full"
                                >
                                  <option value="normal">Within 2-4 weeks</option>
                                  <option value="soon">Within 1-2 weeks</option>
                                  <option value="urgent">As soon as possible</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Review & Submit */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Additional Information</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Is there anything else you'd like us to know?
                                </label>
                                <Textarea
                                  name="additionalInfo"
                                  value={formData.additionalInfo}
                                  onChange={handleInputChange}
                                  rows={4}
                                  className="form-input resize-none"
                                  placeholder="Any additional information about your child's needs, family situation, or questions you have..."
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                                <select
                                  name="hearAboutUs"
                                  value={formData.hearAboutUs}
                                  onChange={handleInputChange}
                                  className="form-input w-full"
                                >
                                  <option value="">Select an option</option>
                                  <option value="google">Google search</option>
                                  <option value="referral">Doctor/therapist referral</option>
                                  <option value="friend">Friend/family recommendation</option>
                                  <option value="social-media">Social media</option>
                                  <option value="insurance">Insurance provider directory</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">Consent & Privacy</h3>
                            <div className="space-y-4">
                              <label className="flex items-start space-x-3">
                                <Checkbox
                                  checked={formData.consent}
                                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked }))}
                                  className="mt-1"
                                />
                                <span className="text-sm text-gray-600">
                                  I consent to Golden Behavior Connection contacting me about ABA therapy services. 
                                  I understand this form is for informational purposes and does not guarantee services.
                                </span>
                              </label>

                              <label className="flex items-start space-x-3">
                                <Checkbox
                                  checked={formData.privacyPolicy}
                                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyPolicy: checked }))}
                                  className="mt-1"
                                />
                                <span className="text-sm text-gray-600">
                                  I agree to the <Link to="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link> and 
                                  <Link to="/terms" className="text-green-600 hover:underline ml-1">Terms of Service</Link>.
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="bg-green-50 p-6 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">What Happens Next?</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                              <p>✓ We'll review your application within 24 hours</p>
                              <p>✓ Our insurance team will verify your benefits</p>
                              <p>✓ We'll schedule a free consultation with a BCBA</p>
                              <p>✓ If it's a good fit, we'll create your child's treatment plan</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-6 border-t">
                        {currentStep > 1 && (
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Previous Step
                          </Button>
                        )}
                        <div className="flex-1"></div>
                        {currentStep < 4 ? (
                          <Button type="button" onClick={nextStep} className="btn-primary">
                            Next Step
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            className="btn-primary"
                            disabled={!formData.consent || !formData.privacyPolicy}
                          >
                            Submit Application
                            <Send className="ml-2 w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-green-600 mr-2" />
                        <a href={`tel:${mockData.company.phone}`} className="text-green-600 hover:underline">
                          {mockData.company.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-green-600 mr-2" />
                        <Link to="/contact" className="text-green-600 hover:underline">
                          Schedule a call
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                    <div className="space-y-3">
                      {[
                        'No waitlist - start immediately',
                        'BCBA-led, individualized care',
                        'In-network with major insurances', 
                        'Compassionate, ethical approach'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;