import React from 'react';
import './App.css';
const { useState, useEffect } = React;


// Data from JSON
const gymData = {
  gymName: "VibRation Gym & Fitness Centre",
  tagline: "Building Confidence. Building Fitness.",
  contact: {
    address: "A-1/10, 4th Floor, Sector-8, Near M2K, Rohini, Delhi 110085",
    phones: ["9911979682", "9266237450"],
    email: "groveryash1234@gmail.com",
    hours: {
      morning: "6:00 AM - 12:00 PM",
      evening: "4:00 PM - 10:00 PM"
    }
  },
  classes: [
    {day: "Tuesday", class: "Yoga", time: "8:00 - 9:00 AM", icon: "leaf"},
    {day: "Thursday", class: "Zumba", time: "8:00 - 9:00 AM", icon: "music"},
    {day: "Saturday", class: "CrossFit", time: "8:00 - 9:00 AM", icon: "fire"}
  ],
  trainers: [
    {name: "Mukesh Pant", specialty: "Strength & Yoga Expert", bio: "Experienced fitness trainer specializing in strength training, weight management, and yoga. Dedicated to helping clients achieve their fitness goals through personalized workout plans."},
    {name: "Aditya Singh", specialty: "Zumba & CrossFit Coach", bio: "Certified personal trainer with expertise in Zumba, CrossFit workouts, and functional training. Passionate about motivating clients to reach their full potential."}
  ],
  specialOffer: {
    title: "BIG Festival Offer",
    subtitle: "For New Membership",
    details: "4 Month Membership",
    price: "₹4,500",
    originalPrice: "₹7,000"
  },
  membershipPlans: [
    {duration: "Monthly", price: "₹2,500", popular: false},
    {duration: "3 Month", price: "₹5,500", popular: false},
    {duration: "6 Month", price: "₹8,500", popular: true},
    {duration: "12 Month", price: "₹12,000", popular: false}
  ],
  services: ["Special Counselling", "Personalized Diet Plans"],
  galleryItems: [
    {name: "Weight Training Area", icon: "dumbbell"},
    {name: "Yoga Zone", icon: "leaf"},
    {name: "Reception Area", icon: "door-open"},
    {name: "Cardio Zone", icon: "heart"},
    {name: "Dance Floor", icon: "music"},
    {name: "Locker Room", icon: "lock"}
  ],
  socialMedia: {
    facebook: "#",
    instagram: "#",
    whatsapp: "#",
    youtube: "#"
  }
};

// Navbar Component
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
       <button className="navbar-brand" onClick={(e) => scrollToSection(e, 'hero')}>
  <img src="/logo.jpg" alt="VibRation Gym Logo" className="logo-img" />
  
</button>

<ul className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}>
  <li><button onClick={(e) => scrollToSection(e, 'hero')}>Home</button></li>
  <li><button onClick={(e) => scrollToSection(e, 'about')}>About Us</button></li>
  <li><button onClick={(e) => scrollToSection(e, 'classes')}>Classes</button></li>
  <li><button onClick={(e) => scrollToSection(e, 'trainers')}>Trainers</button></li>
  <li><button onClick={(e) => scrollToSection(e, 'plans')}>Plans</button></li>
  <li><button onClick={(e) => scrollToSection(e, 'gallery')}>Gallery</button></li>
  <li><button onClick={(e) => scrollToSection(e, 'contact')}>Contact</button></li>
</ul>

<button className="join-btn" onClick={(e) => scrollToSection(e, 'contact')}>
  Join Now
</button>

        
       
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>{gymData.gymName}</h1>
        <p className="tagline">{gymData.tagline}</p>
        <div className="hero-cta">
          <button className="btn btn--primary btn--lg" onClick={() => scrollToSection('contact')}>
            Start Your Journey
          </button>
          <button className="btn btn--outline btn--lg" onClick={() => scrollToSection('about')}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About VibRation Gym</h2>
        <div className="about-content">
          <p className="section-subtitle">
            Welcome to VibRation Gym & Fitness Centre, where we believe in building not just your body, 
            but your confidence too. Located in the heart of Rohini, Delhi, we provide a premium fitness 
            experience with state-of-the-art equcipment and expert trainers.
          </p>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h4>Modern Equipment</h4>
              <p>State-of-the-art fitness equipment for all your workout needs</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Expert Trainers</h4>
              <p>Certified personal trainers to guide you on your fitness journey</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Flexible Hours</h4>
              <p>Open morning and evening to fit your busy schedule</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Classes Component
const Classes = () => {
  const getIconClass = (icon) => {
    const iconMap = {
      leaf: 'fa-leaf',
      music: 'fa-music',
      fire: 'fa-fire'
    };
    return iconMap[icon] || 'fa-dumbbell';
  };

  return (
    <section id="classes" className="section">
      <div className="container">
        <h2 className="section-title">Our Classes</h2>
        <p className="section-subtitle">
          Join our specialized fitness classes led by certified instructors
        </p>
        
        <div className="classes-grid">
          {gymData.classes.map((classItem, index) => (
            <div key={index} className="class-card">
              <div className="class-icon">
                <i className={`fas ${getIconClass(classItem.icon)}`}></i>
              </div>
              <span className="class-day">{classItem.day}</span>
              <h4 className="class-title">{classItem.class}</h4>
              <p><strong>Time:</strong> {classItem.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trainers Component
const Trainers = () => {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <h2 className="section-title">Meet Our Trainers</h2>
        <p className="section-subtitle">
          Our certified trainers are here to help you achieve your fitness goals
        </p>
        
        <div className="trainers-grid">
          {gymData.trainers.map((trainer, index) => (
  <div key={index} className="trainer-card">
    <div className="trainer-avatar">
      <i className="fas fa-user"></i>
    </div>
    <h3 className="trainer-name">{trainer.name}</h3>   
    <div className="trainer-specialty">{trainer.specialty}</div>
    <p>{trainer.bio}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

// Special Offers Component
const Offers = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="section offers">
      
    </section>
  );
};

// Membership Plans Component
const Plans = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" className="section">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <p className="section-subtitle">
          Choose the perfect plan that fits your fitness goals and budget
        </p>
        
        <div className="plans-grid">
          {gymData.membershipPlans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h4>{plan.duration}</h4>
              <div className="plan-price">{plan.price}</div>
              <button className="btn btn--primary" onClick={scrollToContact}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Component
const Gallery = () => {
  const getIconClass = (icon) => {
    const iconMap = {
      dumbbell: 'fa-dumbbell',
      leaf: 'fa-leaf',
      'door-open': 'fa-door-open',
      heart: 'fa-heart',
      music: 'fa-music',
      lock: 'fa-lock'
    };
    return iconMap[icon] || 'fa-image';
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <p className="section-subtitle">
          Explore our modern and well-equipped fitness facilities
        </p>
        
        <div className="gallery-grid">
          {gymData.galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-icon">
                <i className={`fas ${getIconClass(item.icon)}`}></i>
              </div>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component

// Enhanced Contact Component with Real-time Validation and Email Integration
const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'membership', // New field for lead tracking
    source: 'website' // Track lead source
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState('');

  // Real-time validation function
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(value.replace(/\s/g, ''))) {
          error = 'Please enter a valid phone number (10+ digits)';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        } else if (value.trim().length > 1000) {
          error = 'Message must be less than 1000 characters';
        }
        break;
    }

    return error;
  };

  // Handle input changes with real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    // Clear submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage('');
    }
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      if (['name', 'email', 'phone', 'message'].includes(field)) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Enhanced form submission with multiple integration options
 const handleSubmit = async (e) => {
  e.preventDefault();

  // Step 1: Validate form first
  if (!validateForm()) {
    setSubmitStatus('error');
    setSubmitMessage('Please fix the errors below and try again.');
    return;
  }

  // Step 2: Set loading state
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    // Step 3: Send form data to Netlify
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        // ✅ Explicitly list each field (don't use spread operator)
        'form-name': 'contact',           // Required by Netlify
        'name': formData.name,            // User's name
        'email': formData.email,          // User's email
        'phone': formData.phone,          // User's phone
        'message': formData.message,      // User's message
        'interest': formData.interest,    // What they're interested in
        'source': formData.source,        // Where they came from
        'submitted_at': new Date().toISOString() // Timestamp
      }).toString()
    });

    // Step 4: Check if submission was successful
    if (response.ok) {
      // ✅ Success - show success message
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your interest in VibRation Gym! We will contact you within 24 hours to discuss your fitness goals.');
      
      // ✅ Reset the form to empty state
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'membership',
        source: 'website'
      });
      
      // Clear any validation errors
      setErrors({});

    } else {
      
      throw new Error(`HTTP error! status: ${response.status}`);
    }

  } catch (error) {
    
    console.error('Form submission error:', error);
    setSubmitStatus('error');
    setSubmitMessage('Sorry, there was a problem sending your message. Please try again or call us directly at 9911979682.');
  } finally {
    
    setIsSubmitting(false);
  }
};


  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneLength = phoneNumber.length;

    if (phoneLength < 4) return phoneNumber;
    if (phoneLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to start your fitness journey? Get in touch with us today!
        </p>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h5>Address</h5>
                <p>{gymData.contact.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h5>Phone</h5>
                {gymData.contact.phones.map((phone, index) => (
                  <p key={index}>
                    <a href={`tel:${phone}`} className="phone-link">{phone}</a>
                  </p>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h5>Email</h5>
                <p>
                  <a href={`mailto:${gymData.contact.email}`} className="email-link">
                    {gymData.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h5>Operating Hours</h5>
                <p><strong>Morning:</strong> {gymData.contact.hours.morning}</p>
                <p><strong>Evening:</strong> {gymData.contact.hours.evening}</p>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="response-guarantee">
              <div className="guarantee-badge">
                <i className="fas fa-clock"></i>
                <span>24-Hour Response Guarantee</span>
              </div>
              <p>We respond to all inquiries within 24 hours, usually much sooner!</p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <form 
  className="contact-form" 
  onSubmit={handleSubmit} 
  noValidate
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />


            <h3>Send Message</h3>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`status status--${submitStatus}`}>
                <i className={`fas ${submitStatus === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}`}></i>
                <span>{submitMessage}</span>
              </div>
            )}

            {/* Form Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? 'error' : ''} ${formData.name && !errors.name ? 'success' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? 'error' : ''} ${formData.email && !errors.email ? 'success' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-control ${errors.phone ? 'error' : ''} ${formData.phone && !errors.phone ? 'success' : ''}`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="form-label">
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="form-control"
                  value={formData.interest}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                >
                  <option value="membership">Membership Plans</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                  <option value="nutrition">Nutrition Counseling</option>
                  <option value="facilities">Facility Tour</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={`form-control ${errors.message ? 'error' : ''} ${formData.message && !errors.message ? 'success' : ''}`}
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your fitness goals, preferred schedule, or any questions you have..."
                disabled={isSubmitting}
              ></textarea>
              <div className="character-count">
                <span className={formData.message.length > 900 ? 'warning' : ''}>
                  {formData.message.length}/1000 characters
                </span>
              </div>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {/* Privacy Notice */}
            <div className="privacy-notice">
              <i className="fas fa-shield-alt"></i>
              <small>
                Your information is secure and will only be used to contact you about VibRation Gym services. 
                We never share your details with third parties.
              </small>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn btn--primary btn--full-width ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending Message...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </button>

            {/* Alternative Contact */}
            <div className="alternative-contact">
              <p>Prefer to call? Reach us at:</p>
              <div className="phone-buttons">
                {gymData.contact.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="btn btn--outline btn--small"
                  >
                    <i className="fas fa-phone"></i>
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* WhatsApp Quick Contact */}
        <div className="whatsapp-contact">
          <a
            
  href={`https://wa.me/91${gymData.contact.phones[0].replace(/[^0-9]/g, '')}?text=Hi! I'm interested in VibRation Gym membership.`}


            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i>
            <span>Quick Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};


// Footer Component
const Footer = () => {
  const getSocialIcon = (platform) => {
    const iconMap = {
      facebook: 'fa-facebook-f',
      instagram: 'fa-instagram',
      whatsapp: 'fa-whatsapp',
      youtube: 'fa-youtube'
    };
    return iconMap[platform] || 'fa-link';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {Object.entries(gymData.socialMedia).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab ${getSocialIcon(platform)}`}></i>
            </a>
          ))}
        </div>
        
        <p>&copy; 2025 {gymData.gymName}. All rights reserved.</p>
        <p>{gymData.tagline}</p>
      </div>
    </footer>
  );
};

// Floating Join Button Component
const FloatingJoinButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <a href="#" className="floating-join-btn" onClick={scrollToContact}>
      <i className="fas fa-rocket" style={{marginRight: 'var(--space-8)'}}></i>
      Join Now
    </a>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <Offers />
      <Plans />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingJoinButton />
    </div>
  );
};

export default App;
