// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Heart, Users, BookOpen, Palette, Music, Star, User, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getProgramCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['program-card-0', 'program-card-1', 'program-card-2', 'program-card-3'];
  return ids[index] || 'noID';
};

const getActivityIconId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['activity-icon-0', 'activity-icon-1', 'activity-icon-2', 'activity-icon-3', 'activity-icon-4', 'activity-icon-5'];
  return ids[index] || 'noID';
};

const getActivityBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['activity-badge-0', 'activity-badge-1', 'activity-badge-2', 'activity-badge-3', 'activity-badge-4', 'activity-badge-5'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const programs = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Toddler Care",
      age: "18 months - 3 years",
      description: "Nurturing environment focused on early development, social skills, and basic learning through play"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Pre-K Program",
      age: "3 - 4 years",
      description: "School readiness program with structured learning, literacy development, and social preparation"
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Kindergarten Prep",
      age: "4 - 5 years",
      description: "Advanced preparation for elementary school with academic foundations and independence skills"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "After School Care",
      age: "5 - 8 years",
      description: "Safe, supervised environment with homework help, activities, and nutritious snacks"
    }
  ];

  const stats = [
    { label: "Happy Children", value: "250+" },
    { label: "Qualified Teachers", value: "18" },
    { label: "Years Experience", value: "15+" },
    { label: "Parent Satisfaction", value: "98%" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with cheerful gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Kindergarten logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-10 h-10 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="Little Stars Kindergarten brand name"
              className="text-2xl font-bold text-gray-800"
            >
              Little Stars Kindergarten
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="programs-button" 
              devName="Programs Button" 
              devDescription="Link to programs information"
              variant="ghost" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Programs
            </Button>
            <Button 
              devId="about-button" 
              devName="About Button" 
              devDescription="Link to about us page"
              variant="ghost" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-600"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Staff Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Enroll now button in navigation header"
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Enroll Now
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing kindergarten mission"
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            >
              Where Little 
              <Span 
                devId="stars-highlight" 
                devName="Stars Highlight" 
                devDescription="Highlighted Stars text in gradient"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
              >
                {' '}Stars
              </Span>
              {' '}Shine Bright
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description explaining kindergarten mission"
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Nurturing young minds through play-based learning, creative exploration, 
              and loving care in a safe, stimulating environment.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-dashboard-button"
                    devName="Go to Dashboard Button"
                    devDescription="Primary call-to-action button for accessing dashboard"
                    className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-enroll-button"
                    devName="Enroll Your Child Button"
                    devDescription="Primary call-to-action button for enrollment"
                    className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Enroll Your Child
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-tour-button"
                devName="Schedule Tour Button"
                devDescription="Secondary button to schedule a tour"
                variant="outline"
                className="border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Schedule a Tour
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing kindergarten achievements"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-100 shadow-lg"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-3xl font-bold text-pink-600 mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-600">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Programs Section */}
      <Container componentId="programs-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Our Programs</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Age-appropriate programs designed to foster growth, learning, and development at every stage
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                devId={getProgramCardId(index)}
                devName={`${program.title} Program Card`}
                devDescription={`Program card for ${program.title}: ${program.description}`}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{program.icon}</Div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                  <Badge devId="noID" className="mb-3 bg-pink-100 text-pink-700">{program.age}</Badge>
                  <P devId="noID" className="text-gray-600">{program.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Activities Section */}
      <Container componentId="activities-section">
        <Section devId="noID" className="container mx-auto px-4 py-20 bg-white/50 rounded-3xl mx-4">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Daily Activities</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Engaging activities that promote learning, creativity, and social development
            </P>
          </Div>
          <Div devId="noID" className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { name: "Reading", icon: BookOpen, color: "from-blue-400 to-blue-500" },
              { name: "Art & Crafts", icon: Palette, color: "from-purple-400 to-purple-500" },
              { name: "Music", icon: Music, color: "from-green-400 to-green-500" },
              { name: "Outdoor Play", icon: Users, color: "from-yellow-400 to-yellow-500" },
              { name: "Science", icon: Star, color: "from-pink-400 to-pink-500" },
              { name: "Math Games", icon: Award, color: "from-indigo-400 to-indigo-500" }
            ].map((activity, index) => (
              <Div key={index} devId="noID" className="text-center">
                <Div devId={getActivityIconId(index)} className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
                  <activity.icon className="text-white w-8 h-8" />
                </Div>
                <Badge 
                  devId={getActivityBadgeId(index)}
                  devName={`${activity.name} Activity Badge`}
                  devDescription={`Activity badge for ${activity.name}`}
                  className="text-gray-700 font-medium bg-transparent border-none"
                >
                  {activity.name}
                </Badge>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Testimonials Section */}
      <Container componentId="testimonials-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">What Parents Say</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Hear from families who trust us with their most precious gifts
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter loves going to Little Stars every day. The teachers are amazing and she's learned so much!",
                parent: "Sarah Johnson",
                child: "Emma, age 4"
              },
              {
                quote: "The caring environment and structured learning have prepared my son wonderfully for kindergarten.",
                parent: "Michael Chen",
                child: "Lucas, age 5"
              },
              {
                quote: "I feel completely confident leaving my children here. They're safe, happy, and thriving.",
                parent: "Lisa Rodriguez",
                child: "Sofia & Diego"
              }
            ].map((testimonial, index) => (
              <Card key={index} devId="noID" className="bg-white rounded-xl p-6 shadow-lg">
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </Div>
                  <P devId="noID" className="text-gray-600 mb-4 italic">"{testimonial.quote}"</P>
                  <Div devId="noID">
                    <P devId="noID" className="font-semibold text-gray-800">{testimonial.parent}</P>
                    <P devId="noID" className="text-sm text-gray-500">{testimonial.child}</P>
                  </Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* CTA Section */}
      <Container componentId="cta-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-12 text-center border border-pink-200">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Ready to Join Our Family?</H2>
            <P devId="noID" className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Give your child the best start in life with our nurturing, educational environment
            </P>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="cta-enroll-button"
                devName="Enroll Today Button"
                devDescription="Primary CTA button to start enrollment"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Enroll Today
                </span>
              </Button>
              <Button 
                devId="cta-contact-button"
                devName="Contact Us Button"
                devDescription="Secondary CTA button to contact the school"
                variant="outline"
                className="border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Contact Us
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with contact information and links"
        className="container mx-auto px-4 py-8 border-t border-gray-200"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-600 mb-4 md:mb-0">
            © 2024 Little Stars Kindergarten. Nurturing young minds with love and care.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Programs</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Enrollment</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};