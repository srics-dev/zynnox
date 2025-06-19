"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Cloud,
  Brain,
  Zap,
  ArrowRight,
  Star,
  Users,
  Globe,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TechConsultingWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to drive your business forward.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your operations.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Serverless Architecture"],
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Intelligent automation and machine learning solutions to transform your business processes.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots"],
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions and workflow optimization.",
      features: ["RPA Implementation", "Workflow Automation", "Integration Services", "Process Optimization"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "Their AI solutions transformed our customer service operations, reducing response time by 70% while improving satisfaction scores.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupX",
      content:
        "The cloud migration was seamless. Our infrastructure costs dropped by 40% while performance improved dramatically.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      content:
        "Their automation solutions saved us 20 hours per week on manual processes. ROI was achieved within 3 months.",
      rating: 5,
    },
  ]

  const caseStudies = [
    {
      
      title: "E-commerce Platform Transformation",
      client: "RetailGiant Inc.",
      description: "Complete digital transformation resulting in 300% increase in online sales",
      technologies: ["React", "Node.js", "AWS", "AI Recommendations"],
      results: "300% sales increase, 50% faster load times",
    },
    {
      title: "Healthcare AI Implementation",
      client: "MedTech Solutions",
      description: "AI-powered diagnostic system improving accuracy and reducing diagnosis time",
      technologies: ["Python", "TensorFlow", "Azure", "Computer Vision"],
      results: "95% accuracy improvement, 60% faster diagnosis",
    },
    {
      title: "Financial Services Automation",
      client: "FinanceFlow Corp",
      description: "Automated trading and risk assessment system with real-time analytics",
      technologies: ["Java", "Kafka", "Machine Learning", "Real-time Analytics"],
      results: "40% risk reduction, 24/7 automated trading",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ZYNNOX SOLUTION
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="#services" className="hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="hover:text-blue-400 transition-colors">
                Testimonials
              </Link>
              <Link href="#portfolio" className="hover:text-blue-400 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <Link href="#contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
                <Link href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
                <Link href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
                
                <Link href="#contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </Button>
              </Link>
                
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">Global IT Consulting Leaders</Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
                    Business
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We deliver cutting-edge software development, AI solutions, and business consulting 
                  into the future. Join 5+ companies that trust us with their digital transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                </Link>
                <Link href="#portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 text-lg px-8 py-6"
                >
                  See Our Work
                </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">20+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">99%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 backdrop-blur-sm border border-gray-700">
                <Image
                  src="/Compete Case Study GIF by Consulting Cup.gif?height=400&width=600"
                  alt="Futuristic Technology Animation"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-gray-300 text-center">AI-Powered Innovation in Action</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-4">
              About Zynnox Solution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Leading the Digital Revolution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For over a decade, we've been at the forefront of technological innovation, helping businesses worldwide
              harness the power of cutting-edge technology to achieve unprecedented growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Serving clients across 5+ countries with 24/7 support and localized expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  20+ certified developers, architects, and consultants with deep industry expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  99% project success rate with average ROI of 300% within the first year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services that drive innovation and accelerate
              your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              Explore All Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-4">Client Testimonials</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-4">Case Studies</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how we've helped businesses transform their operations and achieve remarkable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative">
                  <Image
                  
                    src="/Retail Giant Accelerates Its Time to Market for Product Release.jpg?height=200&width=400"
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30">{study.client}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{study.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Results:</h4>
                    <p className="text-green-400 font-semibold">{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 text-lg px-8 py-6"
            >
              View All Case Studies
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Get In Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your technology goals. Get a free consultation and project
              estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">mshrikanth315@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+919019675683</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Headquarters</div>
                      <div className="text-gray-300">Mangalore, India</div>
                    </div>
                  </div>
                </div>  
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Free initial consultation and project assessment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Agile development methodology
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Transparent pricing and timeline
                  </li>
                </ul>
              </div>
            </div>

            <form action="https://formsubmit.co/mshrikanth315@gmail.com" method="POST">
  <Card className="bg-gray-800/50 border-gray-700">
    <CardHeader>
      <CardTitle className="text-white text-2xl">Get Free Consultation</CardTitle>
      <CardDescription className="text-gray-300">
        Fill out the form below and we'll get back to you within 24 hours.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
          <Input
            name="First Name"
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
          <Input
            name="Last Name"
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <Input
          type="email"
          name="Email"
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          placeholder="john@company.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
        <Input
          name="Company"
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
        <Textarea
          name="Project Details"
          className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 min-h-[120px]"
          placeholder="Tell us about your project requirements... 
          
          please click captcha 3-5 times"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg py-6"
      >
        Send Message(click captcha 3-4 times)
        <ArrowRight className="ml-2" size={20} />
      </Button>
    </CardContent>
  </Card>
</form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TechFlow Solutions
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative technology solutions and expert consulting services.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    AI/ML Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Process Automation(Trading Automation)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ZYNNOX Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
