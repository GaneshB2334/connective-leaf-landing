
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Globe, Mail, MapPin, MessageSquare, Star, Users, Video } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for a mentor
const mentorData = {
  id: "sarah-johnson",
  name: "Sarah Johnson",
  role: "Tech Lead at Google",
  bio: "With over 10 years of experience in the tech industry, I specialize in helping professionals transition into tech roles and advance their careers. My background includes leading engineering teams at Google and mentoring dozens of successful tech professionals.",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  rating: 4.9,
  reviews: 134,
  location: "San Francisco, CA",
  languages: ["English", "Spanish"],
  experience: "10+ years",
  specialties: ["Machine Learning", "Career Transition", "Leadership", "Technical Interviews"],
  education: [
    { degree: "M.S. Computer Science", institution: "Stanford University", year: "2012" },
    { degree: "B.S. Computer Engineering", institution: "MIT", year: "2010" }
  ],
  workHistory: [
    { role: "Tech Lead", company: "Google", period: "2018 - Present" },
    { role: "Senior Software Engineer", company: "Meta", period: "2015 - 2018" },
    { role: "Software Engineer", company: "Amazon", period: "2012 - 2015" }
  ],
  services: [
    {
      id: "one-on-one",
      title: "One-on-One Mentorship",
      description: "Personalized 1:1 video calls to address your specific challenges and goals.",
      price: 150,
      duration: "60 min",
      icon: Video
    },
    {
      id: "group-sessions",
      title: "Group Mentoring Sessions",
      description: "Join a small group of peers for collaborative learning and networking.",
      price: 75,
      duration: "90 min",
      icon: Users
    },
    {
      id: "long-term",
      title: "Long-term Mentorship Program",
      description: "3-month structured program with weekly sessions and personalized roadmap.",
      price: 1200,
      duration: "3 months",
      icon: Calendar
    },
    {
      id: "digital-product",
      title: "Career Advancement Toolkit",
      description: "Comprehensive digital resource pack with templates, guides and video tutorials.",
      price: 299,
      duration: "Lifetime access",
      icon: Globe
    }
  ],
  availability: [
    { day: "Monday", slots: ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"] },
    { day: "Wednesday", slots: ["10:00 AM - 12:00 PM", "4:00 PM - 6:00 PM"] },
    { day: "Friday", slots: ["9:00 AM - 12:00 PM"] }
  ]
};

const MentorProfile = () => {
  const { mentorId } = useParams();
  const { toast } = useToast();
  const [mentor, setMentor] = useState(mentorData);
  
  useEffect(() => {
    // In a real app, we would fetch the mentor data based on mentorId
    // For now, we're using the mock data
    console.log(`Fetching data for mentor: ${mentorId}`);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [mentorId]);

  const handleBookService = (serviceId: string) => {
    toast({
      title: "Booking initiated",
      description: `You're booking ${mentor.services.find(s => s.id === serviceId)?.title}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero section with mentor info */}
        <div className="relative py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <Button 
              variant="ghost" 
              className="mb-6 pl-0" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all mentors
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left column - Profile info */}
              <div className="md:col-span-1 space-y-6">
                <div className="flex flex-col items-center text-center p-6 glass-card">
                  <div className="relative mb-4">
                    <Avatar className="h-32 w-32 border-4 border-white shadow-lg image-glow">
                      <img src={mentor.image} alt={mentor.name} className="object-cover" />
                    </Avatar>
                    <div className="absolute bottom-0 right-0 bg-white rounded-full px-2 py-1 text-xs font-medium text-primary shadow-sm border border-primary/10">
                      {mentor.rating} <Star className="inline h-3 w-3 fill-primary text-primary" />
                    </div>
                  </div>
                  
                  <h1 className="text-2xl font-bold">{mentor.name}</h1>
                  <p className="text-muted-foreground mb-2">{mentor.role}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {mentor.specialties.map(specialty => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{mentor.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{mentor.experience} experience</span>
                    </div>
                  </div>
                  
                  <div className="w-full pt-4 mt-4 border-t">
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <div className="flex justify-center gap-2 mt-1">
                      {mentor.languages.map(language => (
                        <Badge key={language} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <Button className="w-full" size="lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </div>
                
                {/* Availability section */}
                <div className="p-6 glass-card">
                  <h3 className="text-lg font-semibold mb-4">Availability</h3>
                  <div className="space-y-3">
                    {mentor.availability.map(slot => (
                      <div key={slot.day} className="text-sm">
                        <h4 className="font-medium">{slot.day}</h4>
                        <ul className="mt-1 space-y-1">
                          {slot.slots.map(time => (
                            <li key={time} className="text-muted-foreground">
                              {time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column - Tabs with details */}
              <div className="md:col-span-2">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
                    <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
                    <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="pt-6">
                    <div className="glass-card p-6 mb-6">
                      <h2 className="text-xl font-semibold mb-3">Bio</h2>
                      <p className="text-muted-foreground">{mentor.bio}</p>
                    </div>
                    
                    <div className="glass-card p-6 mb-6">
                      <h2 className="text-xl font-semibold mb-3">Education</h2>
                      <div className="space-y-3">
                        {mentor.education.map((edu, index) => (
                          <div key={index} className="flex justify-between">
                            <div>
                              <h4 className="font-medium">{edu.degree}</h4>
                              <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{edu.year}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-card p-6">
                      <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
                      <div className="space-y-4">
                        {mentor.workHistory.map((work, index) => (
                          <div key={index} className="flex justify-between">
                            <div>
                              <h4 className="font-medium">{work.role}</h4>
                              <p className="text-sm text-muted-foreground">{work.company}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{work.period}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="services" className="pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {mentor.services.map(service => (
                        <Card key={service.id} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex flex-col h-full">
                              <div className="p-5 pb-4">
                                <div className="flex items-center gap-4 mb-3">
                                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                                    <service.icon className="h-5 w-5" />
                                  </div>
                                  <h3 className="text-lg font-semibold">{service.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                                <div className="flex justify-between text-sm">
                                  <div>
                                    <span className="font-medium">${service.price}</span>
                                    {service.id !== "digital-product" && service.id !== "long-term" && 
                                      <span className="text-muted-foreground"> / session</span>
                                    }
                                  </div>
                                  <div className="text-muted-foreground">
                                    <Clock className="inline h-3.5 w-3.5 mr-1" />
                                    {service.duration}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-auto p-5 pt-3 border-t">
                                <Button 
                                  className="w-full" 
                                  onClick={() => handleBookService(service.id)}
                                >
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-8 glass-card p-6">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-10 w-10 text-primary" />
                        <div>
                          <h3 className="text-xl font-semibold mb-1">Not finding what you need?</h3>
                          <p className="text-muted-foreground mb-4">
                            Reach out directly to discuss custom mentorship options tailored to your specific needs and goals.
                          </p>
                          <Button variant="outline">
                            Contact {mentor.name.split(" ")[0]}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="pt-6">
                    <div className="glass-card p-6 mb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-xl font-semibold">Client Reviews</h2>
                          <p className="text-muted-foreground">{mentor.reviews} total reviews</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-3xl font-bold">{mentor.rating}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-5 w-5 ${i < Math.floor(mentor.rating) ? "fill-primary text-primary" : "text-muted"}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Sample reviews */}
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="mb-6 pb-6 border-b last:border-0 last:mb-0 last:pb-0">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10 bg-secondary">
                                <img src={`https://i.pravatar.cc/150?img=${review + 10}`} alt="Reviewer" />
                              </Avatar>
                              <div>
                                <h4 className="font-medium">Client {review}</h4>
                                <p className="text-xs text-muted-foreground">2 months ago</p>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted"}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {review === 1 ? 
                              "Sarah was incredibly helpful in preparing me for technical interviews. Her feedback on my approach to system design questions was invaluable." :
                              review === 2 ?
                              "The 3-month mentorship program exceeded my expectations. Sarah provided clear guidance that helped me transition into a machine learning role." :
                              "Regular sessions with Sarah helped me gain confidence in my leadership abilities. Her industry insights and practical advice were exactly what I needed."
                            }
                          </p>
                        </div>
                      ))}
                      
                      <Button variant="outline" className="w-full mt-4">
                        View All Reviews
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorProfile;
