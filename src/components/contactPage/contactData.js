export const contactData = {
  
  hero: {
    title: "Contact Us",
    subtitle: "Get in Touch with Our Team",
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
    description: "We're here to help you with all your petroleum specialties needs. Reach out to us for inquiries, quotes, or technical support."
  },

  
  contactInfo: {
    heading: "Contact Information",
    description: "Multiple ways to reach our team",
    methods: [
      {
        type: "Phone",
        value: "+91 22 4232 4121",
        icon: "phone",
        description: "Call us for immediate assistance"
      },
      {
        type: "Email",
        value: "info@unicornpetro.co.in",
        icon: "email",
        description: "Send us an email for detailed inquiries"
      },
      {
        type: "WhatsApp",
        value: "+91 98765 43210",
        icon: "whatsapp",
        description: "Quick messaging for urgent queries"
      }
    ]
  },

  
  officeLocations: {
    heading: "Our Office Locations",
    description: "Visit us at our offices worldwide",
    offices: [
      {
        name: "Head Office - Mumbai",
        address: "123, Industrial Area, Andheri East, Mumbai - 400069, Maharashtra, India",
        phone: "+91 22 4232 4121",
        email: "mumbai@unicornpetro.co.in",
        coordinates: { lat: 19.0760, lng: 72.8777 },
        hours: "Monday - Friday: 9:00 AM - 6:00 PM"
      },
      {
        name: "Chennai Office",
        address: "456, Business Park, T Nagar, Chennai - 600017, Tamil Nadu, India",
        phone: "+91 44 2345 6789",
        email: "chennai@unicornpetro.co.in",
        coordinates: { lat: 13.0827, lng: 80.2707 },
        hours: "Monday - Friday: 9:00 AM - 6:00 PM"
      },
      {
        name: "Dubai Office",
        address: "789, Sheikh Zayed Road, Dubai - 12345, UAE",
        phone: "+971 4 123 4567",
        email: "dubai@unicornpetro.co.in",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        hours: "Sunday - Thursday: 8:00 AM - 5:00 PM"
      }
    ]
  },

  
  contactForm: {
    heading: "Send Us a Message",
    description: "Fill out the form below and we'll get back to you within 24 hours",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name"
      },
      {
        name: "companyName",
        label: "Company Name",
        type: "text",
        required: false,
        placeholder: "Enter your company name"
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Enter your email address"
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: false,
        placeholder: "Enter your phone number"
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: [
          "India", "USA", "Germany", "France", "UK", "Japan", "China", "Australia",
          "Canada", "Brazil", "UAE", "Singapore", "South Korea", "Italy", "Spain",
          "Netherlands", "Belgium", "Switzerland", "Other"
        ]
      },
      {
        name: "inquiryType",
        label: "Inquiry Type",
        type: "select",
        required: true,
        options: [
          "Product Inquiry",
          "Price Quote",
          "Technical Support",
          "Partnership",
          "General Inquiry",
          "Other"
        ]
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
        placeholder: "Please describe your inquiry in detail"
      }
    ]
  },

  
  faq: {
    heading: "Frequently Asked Questions",
    description: "Quick answers to common questions",
    questions: [
      {
        question: "What are your minimum order quantities?",
        answer: "Our minimum order quantities vary by product and market. Please contact us for specific requirements based on your needs."
      },
      {
        question: "Do you provide samples?",
        answer: "Yes, we provide samples for qualified customers. Please contact us with your requirements and we'll arrange sample delivery."
      },
      {
        question: "What is your delivery time?",
        answer: "Standard delivery time is 2-4 weeks for international orders. Express delivery options are available for urgent requirements."
      },
      {
        question: "Do you offer technical support?",
        answer: "Yes, we provide comprehensive technical support including formulation assistance, application guidance, and troubleshooting."
      },
      {
        question: "What quality certifications do you have?",
        answer: "We maintain ISO 9001:2015, ISO 14001:2015, GMP, FDA, CE, and REACH certifications among others."
      },
      {
        question: "Can you provide custom formulations?",
        answer: "Yes, we specialize in custom formulations to meet your specific requirements. Our R&D team works closely with customers."
      }
    ]
  },

  
  businessHours: {
    heading: "Business Hours",
    description: "Our customer service team is available during these hours",
    hours: [
      {
        day: "Monday - Friday",
        time: "9:00 AM - 6:00 PM (IST)",
        status: "Open"
      },
      {
        day: "Saturday",
        time: "9:00 AM - 1:00 PM (IST)",
        status: "Open"
      },
      {
        day: "Sunday",
        time: "Closed",
        status: "Closed"
      }
    ],
    note: "For urgent inquiries outside business hours, please email us and we'll respond within 24 hours."
  }
};
