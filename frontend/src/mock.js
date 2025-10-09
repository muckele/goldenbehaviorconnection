// Mock data for Golden Behavior Connection ABA Therapy website

export const mockData = {
  // Company Information
  company: {
    name: "Golden Behavior Connection",
    tagline: "Empowered by Finni Health",
    phone: "(914) 768-8525",
    email: "info@goldenbehaviorconnection.com",
    website: "goldenbehaviorconnection.com",
    fullWebsite: "https://www.goldenbehaviorconnection.com",
    address: "Serving Westchester County, Southern Connecticut, and Northern NYC"
  },

  // Hero Section
  hero: {
    title: "Helping Children with Autism Thrive",
    subtitle: "Compassionate, evidence-based ABA therapy in the comfort of your home and community",
    description: "At Golden Behavior Connection, we believe every child has the potential to thrive when given the right support, compassion, and tools.",
    primaryCTA: "Get Started Today",
    secondaryCTA: "Learn More"
  },

  // Services
  services: [
    {
      id: 1,
      title: "Individual ABA Therapy",
      description: "Personalized, one-on-one therapy sessions tailored to your child's unique needs and goals.",
      features: ["In-home sessions", "Community-based therapy", "Daycare support", "Flexible scheduling"]
    },
    {
      id: 2,
      title: "Parent Training & Support",
      description: "Comprehensive training programs to empower parents with strategies and techniques.",
      features: ["BCBA-led training", "Practical strategies", "Ongoing support", "Family collaboration"]
    },
    {
      id: 3,
      title: "Behavioral Consultation",
      description: "Expert consultation to develop and implement effective behavioral intervention plans.",
      features: ["Assessment & evaluation", "Treatment planning", "Progress monitoring", "Team collaboration"]
    }
  ],

  // Why Choose Us / Value Props
  valueProps: [
    {
      title: "No Waitlist, No 'Big Box' Feel",
      description: "We're a small, clinician-led organization — meaning your child receives personalized attention, not cookie-cutter care."
    },
    {
      title: "Compassion-Driven Care",
      description: "Our BCBAs make decisions with compassion and ethics first, always putting your child's best interest at the heart of treatment."
    },
    {
      title: "Whole-Family Support",
      description: "We don't just work with your child — we support your entire family with parent training, collaboration, and practical strategies."
    },
    {
      title: "Empowering Independence",
      description: "From communication and social skills to flexibility and executive functioning, we help children grow with confidence and joy."
    },
    {
      title: "Flexible, In-Home Services",
      description: "Therapy happens where it matters most — at home, in the community, or in your child's daycare."
    },
    {
      title: "Insurance Accepted",
      description: "We work with most major insurance providers to make access to high-quality ABA care simple and affordable."
    }
  ],

  // Team Members
  team: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Lead BCBA, Clinical Director",
      credentials: "Ph.D., BCBA-D",
      experience: "15+ years",
      specialties: ["Autism Spectrum Disorders", "Behavioral Interventions", "Parent Training"],
      bio: "Dr. Johnson has dedicated her career to helping children with autism reach their full potential through evidence-based ABA practices."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Senior BCBA",
      credentials: "M.S., BCBA",
      experience: "8+ years",
      specialties: ["Early Intervention", "Social Skills", "Communication"],
      bio: "Michael specializes in early intervention and has a passion for developing communication skills in young children."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "BCBA, Parent Training Specialist",
      credentials: "M.A., BCBA",
      experience: "6+ years",
      specialties: ["Parent Training", "Family Collaboration", "Behavioral Consulting"],
      bio: "Emily focuses on empowering families with the tools and strategies they need to support their children's growth."
    }
  ],

  // Insurance Providers with actual logo URLs
  insurance: [
    { 
      name: "Aetna", 
      logo: "https://images.seeklogo.com/logo-png/32/1/aetna-logo-png_seeklogo-322017.png",
      alt: "Aetna Insurance Logo"
    },
    { 
      name: "Cigna", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Cigna-Logo.png",
      alt: "Cigna Insurance Logo"
    },
    { 
      name: "United Healthcare", 
      logo: "https://images.seeklogo.com/logo-png/30/1/united-healthcare-logo-png_seeklogo-303927.png",
      alt: "United Healthcare Logo"
    },
    { 
      name: "NY Medicaid", 
      logo: "https://www.health.ny.gov/health_care/medicaid/images/medicaid_logo.png",
      alt: "New York Medicaid Logo"
    },
    { 
      name: "Emblem Health", 
      logo: "https://www.emblemhealth.com/-/media/emblem/images/logos/emblem-health-logo.png",
      alt: "EmblemHealth Insurance Logo"
    },
    { 
      name: "NY Ship", 
      logo: "https://www.cs.ny.gov/employee-benefits/shared/images/nyship-logo.png",
      alt: "New York State Health Insurance Program Logo"
    },
    { 
      name: "Empire Blue Cross Blue Shield", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Blue-Cross-Blue-Shield-Logo.png",
      alt: "Empire Blue Cross Blue Shield Logo"
    }
  ],

  // Mission & About
  mission: {
    statement: "Our mission is to help children with autism thrive — at home, at school, and in their communities — by providing compassionate, ethical, and family-centered ABA therapy.",
    vision: "We strive to create a world where every child can be happy, independent, and proud of who they are, and every parent feels supported, informed, and empowered in the journey.",
    approach: "Our approach is grounded in ethics, collaboration, and individualized care — empowering families while promoting independence, communication, and confidence in each child."
  },

  // Service Areas
  serviceAreas: [
    "Westchester County, NY",
    "Southern Connecticut", 
    "Northern NYC",
    "In-home services available",
    "Community-based therapy",
    "Daycare and school support"
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      parent: "Jennifer M.",
      child: "Emma, age 6",
      quote: "The team at Golden Behavior Connection has been incredible. Emma has made so much progress, and they've taught us strategies we use every day.",
      rating: 5
    },
    {
      id: 2,
      parent: "David L.",
      child: "Marcus, age 4",
      quote: "Professional, caring, and effective. They truly understand each child's unique needs and work closely with our family.",
      rating: 5
    },
    {
      id: 3,
      parent: "Maria S.",
      child: "Alex, age 8",
      quote: "The in-home therapy has been perfect for Alex. He's more comfortable, and we can see the techniques in action in our daily routine.",
      rating: 5
    }
  ],

  // Contact Form Fields
  contactForm: {
    fields: [
      { name: "parentName", label: "Parent/Guardian Name", type: "text", required: true },
      { name: "childName", label: "Child's Name", type: "text", required: true },
      { name: "childAge", label: "Child's Age", type: "number", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "location", label: "Location", type: "text", required: true },
      { name: "insurance", label: "Insurance Provider", type: "select", required: true },
      { name: "currentServices", label: "Current Services", type: "checkbox" },
      { name: "urgency", label: "How soon do you need services?", type: "select", required: true },
      { name: "questions", label: "Questions or Additional Information", type: "textarea", required: false }
    ]
  }
};